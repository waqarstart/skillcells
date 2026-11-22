import "./ClassSchedule.css";
import { usePage } from "@/lib/content";

export default function ClassSchedule() {
  const page = usePage("schedule");
  const header = page.header ?? {};
  const columns = (page.timetable?.table?.columns ?? []) as { key: string; label: string }[];
  const rows = (page.timetable?.table?.rows ?? []) as Record<string, string>[];
  const summary = `${rows.length} ${header.summaryLabel ?? "classes listed"}`;

  return (
    <div className="schedule-page">
      <section className="schedule-shell" aria-labelledby="schedule-title">
        <header className="schedule-intro">
          <p className="schedule-eyebrow">{header.eyebrow}</p>
          <h1 id="schedule-title">{header.title}</h1>
          <p className="schedule-description">{header.description}</p>
          <div className="schedule-summary" aria-label={summary}>
            <span className="schedule-summary-dot" aria-hidden="true" />
            {summary}
          </div>
        </header>

        <div className="schedule-table-wrap" role="region" aria-label="Class schedule table" tabIndex={0}>
          <table className="schedule-table" aria-label={header.title ?? "Class schedule"}>
            <thead>
              <tr>
                <th scope="col" className="schedule-number">#</th>
                {columns.map((c) => <th key={c.key} scope="col">{c.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <th scope="row" className="schedule-number">{index + 1}</th>
                  {columns.map((c, ci) => (
                    <td key={c.key} data-label={c.label} className={ci === 0 ? "schedule-course" : undefined}>
                      {row[c.key] || (c.key === "trainer" ? <span className="schedule-unlisted">Not listed</span> : "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
