import "./ClassSchedule.css";

type ClassScheduleEntry = {
  course: string;
  mode: string;
  trainer: string;
  days: string;
  startDate: string;
  timings: string;
};

const schedule: ClassScheduleEntry[] = [
  {
    course: "CCNA 86 with FREE LINUX (Morning)",
    mode: "Online / In Campus",
    trainer: "Mr. Tahir Ali",
    days: "Daily",
    startDate: "10th Nov, 2026",
    timings: "11:30am to 12:30pm",
  },
  {
    course: "CCNA 87 with FREE LINUX",
    mode: "Online",
    trainer: "Mr. Haroon Malik",
    days: "Monday, Wednesday, Friday",
    startDate: "18th Nov, 2026",
    timings: "6:30pm to 7:30pm",
  },
  {
    course: "CCNP Enterprise (Morning)",
    mode: "Online / In Campus",
    trainer: "Mr. Tahir Ali",
    days: "Monday to Thursday",
    startDate: "3rd Nov, 2026",
    timings: "12:30pm to 1:30pm",
  },
  {
    course: "CCIE Security",
    mode: "Online",
    trainer: "Mr. Haroon Malik / Mr. Moiz Aftab",
    days: "Saturday / Sunday",
    startDate: "31st Oct, 2026",
    timings: "1:00pm to 3:00pm",
  },
  {
    course: "CEH (Certified Ethical Hacking)",
    mode: "Online / In Campus",
    trainer: "Mr. Ahsan Malik",
    days: "Daily",
    startDate: "20th Oct, 2026",
    timings: "6:15pm to 7:30pm",
  },
  {
    course: "DevOps & Modern Deployment",
    mode: "Online",
    trainer: "Mr. Subhan Malik",
    days: "Saturday / Sunday",
    startDate: "5th Dec, 2026",
    timings: "6:00pm to 7:30pm",
  },
  {
    course: "AWS Solution Architect Associate",
    mode: "Online",
    trainer: "Mr. Subhan Malik",
    days: "Saturday / Sunday",
    startDate: "12th Dec, 2026",
    timings: "7:30pm to 9:00pm",
  },
  {
    course: "AWS Cloud Security",
    mode: "Online",
    trainer: "Mr. Subhan Malik",
    days: "Saturday / Sunday",
    startDate: "21st Nov, 2026",
    timings: "4:30pm to 6:30pm",
  },
  {
    course: "Agentic AI",
    mode: "Online / In Campus",
    trainer: "Mr. M. Kamran Khan",
    days: "Saturday / Sunday",
    startDate: "14th Nov, 2026",
    timings: "4:00pm to 6:00pm",
  },
  {
    course: "Graphic Designing AND Video Editing",
    mode: "Online / In Campus",
    trainer: "",
    days: "Monday, Wednesday, Friday",
    startDate: "4th Nov, 2026",
    timings: "6:30pm to 7:30pm",
  },
  {
    course: "MCSE 2025 with FREE Azure Cloud",
    mode: "Online / In Campus",
    trainer: "Mr Asif Shafiq",
    days: "Tuesday, Thursday, Saturday",
    startDate: "20th Oct, 2026",
    timings: "6:30pm to 7:30pm",
  },
  {
    course: "Exchange Server 2025",
    mode: "Online / In Campus",
    trainer: "Mr Asif Shafiq",
    days: "Tuesday / Thursday",
    startDate: "27th Oct, 2026",
    timings: "7:30pm to 9:00pm",
  },
];

export default function ClassSchedule() {
  return (
    <main className="schedule-page">
      <section className="schedule-shell" aria-labelledby="schedule-title">
        <header className="schedule-intro">
          <p className="schedule-eyebrow">Course timetable · Pakistan</p>
          <h1 id="schedule-title">Class Schedule for Kanzul Islam Lahore</h1>
          <p className="schedule-description">
            Browse course batches, class days, and timings. All times are listed
            in Pakistan Standard Time (GMT+5).
          </p>
          <div className="schedule-summary" aria-label={`${schedule.length} classes listed`}>
            <span className="schedule-summary-dot" aria-hidden="true" />
            {schedule.length} classes listed
          </div>
        </header>

        <div className="schedule-table-wrap" role="region" aria-label="Class schedule table" tabIndex={0}>
          <table className="schedule-table" aria-label="Corvit Lahore class schedule">
            <thead>
              <tr>
                <th scope="col" className="schedule-number">#</th>
                <th scope="col">Course</th>
                <th scope="col">Training mode</th>
                <th scope="col">Trainer</th>
                <th scope="col">Days</th>
                <th scope="col">Starting date</th>
                <th scope="col">Time (GMT+5)</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((entry, index) => (
                <tr key={entry.course}>
                  <th scope="row" className="schedule-number">
                    {index + 1}
                  </th>
                  <td className="schedule-course">
                    {entry.course}
                  </td>
                  <td>
                    {entry.mode}
                  </td>
                  <td>
                    {entry.trainer || <span className="schedule-unlisted">Not listed</span>}
                  </td>
                  <td>{entry.days}</td>
                  <td className="schedule-nowrap">{entry.startDate}</td>
                  <td className="schedule-nowrap">{entry.timings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
