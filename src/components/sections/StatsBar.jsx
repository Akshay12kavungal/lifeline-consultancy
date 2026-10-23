import CountUp from "../ui/CountUp";
import { STATS } from "../../data/content";
import "./StatsBar.css";

export default function StatsBar() {
  return (
    <div className="stats-wrap">
      <div className="container">
        <div className="stats">
          {STATS.map(s => (
            <div key={s.label} className="stat">
              <div className="stat-value"><CountUp value={s.value} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
