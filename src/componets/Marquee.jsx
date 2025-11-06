import "./marquee.css";

export default function Marquee() {
  const text = "14 de Noviembre • La Aventura de Ser Papá • ";

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text">{text.repeat(10)}</span>
      </div>
    </div>
  );
}