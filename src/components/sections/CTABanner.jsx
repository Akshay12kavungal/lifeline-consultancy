import "./CTABanner.css";

export default function CTABanner({ scrollTo }) {
  return (
    <section className="section section--dark cta">
      <span className="cta-ring" style={{ top: -120, right: -80, width: 360, height: 360 }} />
      <span className="cta-ring" style={{ bottom: -90, left: -60, width: 240, height: 240 }} />
      <div className="container" style={{ maxWidth: 760 }}>
        <h2 className="h2">
          Your Academic Journey Starts Again Here.
        </h2>
        <p className="lead">
          Restart your engineering journey today. Your first consultation is completely free — talk to our expert team and discover the right academic path for you.
        </p>
        <button className="btn btn-primary" onClick={() => scrollTo("contact")}>
          Get Free Consultation →
        </button>
      </div>
    </section>
  );
}
