// Eyebrow pill + heading + optional intro paragraph used at the top of each section.
export default function SectionHead({ eyebrow, title, lead, align = "center", style }) {
  return (
    <div className={`section-head${align === "left" ? " section-head--left" : ""}`} style={style}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
