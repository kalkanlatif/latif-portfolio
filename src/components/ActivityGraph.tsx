const SHADES = ["#1c2417", "#22301a", "#3a5c22", "#5fae2c", "#8fdb46", "#d9f7a8"];

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
    <div className="flex-1 overflow-hidden rounded-card bg-card-dark p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-pill bg-accent-bright font-display text-sm font-bold text-card-dark">
          LK
        </div>
        <div>
          <div className="font-display text-sm font-semibold text-on-dark">
            Latif Kalkan
          </div>
          <div className="font-mono text-[11px] text-on-dark-muted">
            @latif
          </div>
        </div>
      </div>

      <div
        style={{
          maskImage: "linear-gradient(to right, black 0%, black 45%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 45%, transparent 95%)",
        }}
      >
        <div className="mb-1.5 flex pl-[26px]">
          {MONTH_LABELS.map((m, i) => (
            <span
              key={`${m.name}-${i}`}
              style={{ flex: `${m.weeks} 0 0` }}
              className="overflow-hidden font-mono text-[10px] text-on-dark-muted"
            >
              {m.name}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="flex h-[88px] flex-col justify-between py-0.5">
            <span className="font-mono text-[9.5px] text-on-dark-muted">
              M
            </span>
            <span className="font-mono text-[9.5px] text-on-dark-muted">
              W
            </span>
            <span className="font-mono text-[9.5px] text-on-dark-muted">
              F
            </span>
          </div>
          <div className="grid flex-1 grid-flow-col grid-rows-7 gap-[3px]">
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

      <div className="mt-4 flex items-center gap-1.5">
        <span className="font-mono text-[9.5px] text-on-dark-muted">
          Less
        </span>
        {SHADES.map((color) => (
          <div
            key={color}
            className="h-2.5 w-2.5 rounded-cell"
            style={{ background: color }}
          />
        ))}
        <span className="font-mono text-[9.5px] text-on-dark-muted">
          More
        </span>
      </div>
    </div>
  );
}
