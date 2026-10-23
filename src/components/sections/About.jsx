import SectionHead from "../ui/SectionHead";
import CountUp from "../ui/CountUp";
import { SITE, LINKS } from "../../config/site";
import { ABOUT_STATS, ABOUT_BARS, TEAM } from "../../data/content";
import "./About.css";

export default function About({ visible, setRef }) {
  const v = visible.about ? " in" : "";
  return (
    <section id="about" ref={setRef("about")} className="section section--white">
      <div className="container">
        <div className="about-grid">
          {/* Story */}
          <div className={`about-copy fade-up${v}`}>
            <SectionHead
              align="left"
              eyebrow="About Us"
              title={<>About Lifeline<br /><span className="accent">Education</span><br />Consultancy</>}
              style={{ marginBottom: 24 }}
            />
            <p>
              Lifeline Education Consultancy was created with one mission — to help students continue their education without giving up on their dreams.
            </p>
            <p>
              We understand the pressure students face due to backlogs, academic gaps, transfer issues, career confusion, or university-related challenges. Our expert team provides personalized guidance for B.Tech credit transfer, admission assistance, educational counselling, and academic support.
            </p>
            <p>
              With a student-first approach, we help candidates explore the right academic opportunities and make confident decisions for a better future.
            </p>
            <div className="about-stats">
              {ABOUT_STATS.map(s => (
                <div key={s.label}>
                  <div className="stat-value"><CountUp value={s.value} /></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision, mission, scores */}
          <div className={`fade-up s2${v}`}>
            <div className="about-panel">
              <div className="vm-item">
                <div className="emoji-tile">🎯</div>
                <div>
                  <h4>Our Vision</h4>
                  <p>To become Kerala's most trusted educational consultancy for students seeking a second opportunity to complete their academic journey.</p>
                </div>
              </div>
              <div className="vm-item">
                <div className="emoji-tile">🚀</div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To provide honest guidance, simplified processes, and reliable educational support that helps students move forward confidently.</p>
                </div>
              </div>

              <div className="panel-divider bars">
                {ABOUT_BARS.map(item => (
                  <div key={item.label}>
                    <div className="bar-head">
                      <span>{item.label}</span>
                      <strong>{item.val}%</strong>
                    </div>
                    <div className="bar"><div style={{ width: `${visible.about ? item.val : 0}%` }} /></div>
                  </div>
                ))}
              </div>

              <div className="panel-divider panel-contact">
                <div>📍 {SITE.locality}</div>
                <div>
                  📞{" "}
                  <a href={LINKS.tel} className="link">{SITE.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How we help */}
        <h3 className={`team-title fade-up${v}`}>How We Help You</h3>
        <div className="team-grid">
          {TEAM.map((t, i) => (
            <div key={t.name} className={`card team-card fade-up s${i + 1}${v}`}>
              <div className="avatar">{t.initials}</div>
              <h3 style={{ marginBottom: 6 }}>{t.name}</h3>
              <div className="team-role">{t.role}</div>
              <p style={{ fontSize: 14 }}>{t.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
