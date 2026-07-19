const SHADES = ["#eef2f0", "#d9f7a8", "#8fdb46", "#5fae2c", "#3a8c1f", "#1f5c12"];

const MONTH_LABELS = [
  { name: "Jul", weeks: 2 },
  { name: "Aug", weeks: 4 },
  { name: "Sep", weeks: 5 },
  { name: "Oct", weeks: 4 },
  { name: "Nov", weeks: 5 },
  { name: "Dec", weeks: 4 },
  { name: "Jan", weeks: 5 },
  { name: "Feb", weeks: 4 },
  { name: "Mar", weeks: 4 },
  { name: "Apr", weeks: 5 },
  { name: "May", weeks: 4 },
  { name: "Jun", weeks: 5 },
  { name: "Jul", weeks: 2 },
];

function buildActivityCells() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const weeks = 53;
  const cells: string[] = [];

  for (let w = 0; w < weeks; w++) {
    const density = w < 11 ? 0.03 : w < 20 ? 0.3 : w < 44 ? 0.55 : 0.75;
    for (let d = 0; d < 7; d++) {
      const r = rand();
      let level = 0;
      if (r < density * 0.5) {
        level = 1 + Math.floor(rand() * 4);
      }
      cells.push(SHADES[level]);
    }
  }

  return cells;
}

const activityCells = buildActivityCells();

export default function ActivityGraph() {
  return (
    <div>
      <div className="overflow-hidden rounded-card border border-border bg-card p-4">
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-pill bg-accent font-display text-xs font-bold text-white">
            LK
          </div>
          <div>
            <div className="font-display text-[13px] font-semibold text-ink">
              Latif Kalkan
            </div>
            <div className="font-mono text-[10px] text-muted">@latif</div>
          </div>
        </div>

        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 55%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 55%, black 100%)",
          }}
        >
          <div className="mb-1 flex pl-[20px]">
            {MONTH_LABELS.map((m, i) => (
              <span
                key={`${m.name}-${i}`}
                style={{ flex: `${m.weeks} 0 0` }}
                className="overflow-hidden font-mono text-[8.5px] text-muted"
              >
                {m.name}
              </span>
            ))}
          </div>

          <div className="flex gap-1.5">
            <div className="flex h-[60px] flex-col justify-between py-0.5">
              <span className="font-mono text-[8px] text-muted">M</span>
              <span className="font-mono text-[8px] text-muted">W</span>
              <span className="font-mono text-[8px] text-muted">F</span>
            </div>
            <div className="grid flex-1 grid-flow-col grid-rows-7 gap-[2px]">
              {activityCells.map((color, i) => (
                <div
                  key={i}
                  className="aspect-square w-full rounded-cell"
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-1">
          <span className="font-mono text-[8px] text-muted">Less</span>
          {SHADES.map((color) => (
            <div
              key={color}
              className="h-1.5 w-1.5 rounded-cell"
              style={{ background: color }}
            />
          ))}
          <span className="font-mono text-[8px] text-muted">More</span>
        </div>
        <p className="mt-1.5 font-mono text-[8px] text-muted">
          GitLab- und Git-Aktivität — Commits, Merge Requests, Issues.
        </p>
      </div>
    </div>
  );
}
