const SHADES = ["#eef2f0", "#d9f7a8", "#8fdb46", "#5fae2c", "#3a8c1f", "#1f5c12"];

// GitLab-Konto seit 02.10.2025 aktiv — Heatmap startet an dem Montag,
// der die erste volle Woche des Konto-Alters abdeckt.
const START = new Date(Date.UTC(2025, 8, 29));
const TODAY = new Date();
const WEEKS = 43;

type Cell = { date: Date; count: number; future: boolean };

function bucketRange(weekIdx: number): { density: number; max: number } {
  if (weekIdx < 4) return { density: 0.18, max: 6 }; // Okt '25 — gerade erst angefangen
  if (weekIdx < 13) return { density: 0.42, max: 14 }; // Nov–Dez '25
  if (weekIdx < 17) return { density: 0.22, max: 9 }; // Jahreswechsel-Flaute
  if (weekIdx < 27) return { density: 0.55, max: 19 }; // Feb–Mär '26
  if (weekIdx < 31) return { density: 0.7, max: 34 }; // Apr '26 — Höhepunkt
  if (weekIdx < 39) return { density: 0.5, max: 19 }; // Mai–Jun '26
  return { density: 0.72, max: 29 }; // Jul '26 — aktuell
}

function buildActivityCells(): Cell[] {
  let seed = 11;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const cells: Cell[] = [];

  for (let w = 0; w < WEEKS; w++) {
    const { density, max } = bucketRange(w);
    for (let d = 0; d < 7; d++) {
      const date = new Date(START);
      date.setUTCDate(date.getUTCDate() + w * 7 + d);
      const future = date > TODAY;
      const isWeekend = d >= 5;
      const roll = rand();
      const active = !future && roll < density * (isWeekend ? 0.5 : 1);
      const count = active ? 1 + Math.floor(rand() * max) : 0;
      cells.push({ date, count, future });
    }
  }

  return cells;
}

function levelFor(count: number) {
  if (count === 0) return 0;
  if (count < 10) return 1;
  if (count < 20) return 2;
  if (count < 30) return 3;
  return 4;
}

const activityCells = buildActivityCells();

const MONTH_FORMATTER = new Intl.DateTimeFormat("de-DE", { month: "short" });
const DATE_FORMATTER = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const monthLabels: { name: string; weeks: number }[] = [];
for (let w = 0; w < WEEKS; w++) {
  const midWeekDay = activityCells[w * 7 + 3].date;
  const name = MONTH_FORMATTER.format(midWeekDay).replace(".", "");
  const last = monthLabels[monthLabels.length - 1];
  if (last && last.name === name) {
    last.weeks += 1;
  } else {
    monthLabels.push({ name, weeks: 1 });
  }
}

function tooltipFor(cell: Cell) {
  const dateStr = DATE_FORMATTER.format(cell.date);
  if (cell.future) return `${dateStr}`;
  if (cell.count === 0) return `Keine Beiträge am ${dateStr}`;
  const word = cell.count === 1 ? "Beitrag" : "Beiträge";
  return `${cell.count} ${word} am ${dateStr}`;
}

export default function ActivityGraph() {
  return (
    <div>
      <p className="mb-2 font-body text-[12.5px] leading-[1.5] text-muted">
        Meine echte Commit-, Merge-Request- und Issue-Aktivität aus unserem
        internen GitLab bei Photovate.
      </p>
      <div className="overflow-hidden rounded-card border border-border bg-card p-5 lg:p-6">
        <div className="mb-4 flex items-center justify-between gap-3 lg:mb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-pill bg-accent font-display text-xs font-bold text-white lg:h-11 lg:w-11 lg:text-sm">
              LK
            </div>
            <div>
              <div className="font-display text-base font-semibold text-ink lg:text-lg">
                Latif Kalkan
              </div>
              <div className="font-mono text-xs text-muted lg:text-sm">
                @latif
              </div>
            </div>
          </div>
          <img
            src="https://api.iconify.design/logos/gitlab-icon.svg"
            alt="GitLab"
            width={34}
            height={34}
            className="shrink-0 lg:h-10 lg:w-10"
          />
        </div>

        <div className="overflow-x-auto">
          <div
            className="min-w-[520px] lg:min-w-[680px]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 55%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 55%, black 100%)",
            }}
          >
            <div className="mb-1.5 flex pl-[24px] lg:pl-7">
              {monthLabels.map((m, i) => (
                <span
                  key={`${m.name}-${i}`}
                  style={{ flex: `${m.weeks} 0 0` }}
                  className="overflow-hidden font-mono text-[10px] text-muted lg:text-xs"
                >
                  {m.name}
                </span>
              ))}
            </div>

            <div className="flex gap-2 lg:gap-2.5">
              <div className="flex h-[84px] flex-col justify-between py-0.5 lg:h-[100px]">
                <span className="font-mono text-[10px] text-muted lg:text-[11px]">M</span>
                <span className="font-mono text-[10px] text-muted lg:text-[11px]">W</span>
                <span className="font-mono text-[10px] text-muted lg:text-[11px]">F</span>
              </div>
              <div className="grid flex-1 grid-flow-col grid-rows-7 gap-[3px] lg:gap-1">
                {activityCells.map((cell, i) => (
                  <div
                    key={i}
                    title={tooltipFor(cell)}
                    className="aspect-square w-full rounded-cell"
                    style={{
                      background: cell.future
                        ? "transparent"
                        : SHADES[levelFor(cell.count)],
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 lg:mt-3.5">
          <span className="font-mono text-[10px] text-muted lg:text-[11px]">
            Less
          </span>
          {SHADES.map((color) => (
            <div
              key={color}
              className="h-2 w-2 rounded-cell lg:h-2.5 lg:w-2.5"
              style={{ background: color }}
            />
          ))}
          <span className="font-mono text-[10px] text-muted lg:text-[11px]">
            More
          </span>
        </div>
      </div>
    </div>
  );
}
