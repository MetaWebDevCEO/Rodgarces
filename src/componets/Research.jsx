import React, { useEffect, useRef, useState } from 'react';
import './Research.css';

// Datos con valores numéricos para animación de conteo
const stats = [
  { label: 'Libros', value: 2 },
  { label: 'Conferencias y talleres', value: 50 },
  { label: 'Años de Formador', value: 15 },
];

// Formatea con separadores de miles
const formatNumber = (n) => n.toLocaleString('en-US');

function Research() {
  // Estados para mostrar el conteo progresivo
  const [display, setDisplay] = useState(stats.map(() => 0));
  const started = useRef(new Set());
  const cardsRef = useRef([]);

  useEffect(() => {
    // Observa la entrada de las tarjetas en viewport para iniciar animaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Evita reiniciar el conteo si ya se ejecutó
          if (!started.current.has(index)) {
            started.current.add(index);
            animateCount(index, stats[index].value, 2000);
          }
        }
      });
    }, { threshold: 0.4 });

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Animación de conteo con requestAnimationFrame (ease-out)
  const animateCount = (idx, end, duration = 1200) => {
    const start = 0;
    const startTs = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const progress = Math.min(1, (now - startTs) / duration);
      const eased = easeOut(progress);
      const current = Math.round(start + (end - start) * eased);
      setDisplay((prev) => {
        const next = [...prev];
        next[idx] = current;
        return next;
      });
      if (progress < 1) requestAnimationFrame(step);
      else bumpValue(idx); // dispara efecto visual en el número al terminar
    };
    requestAnimationFrame(step);
  };

  // Añade clase temporal para animar el número (CSS value-pop)
  const bumpValue = (idx) => {
    const el = cardsRef.current[idx]?.querySelector('.stat-value');
    if (!el) return;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 280);
  };

  return (
    <section id="research" className="research">
      <div className="research-container">
        <div className="research-head reveal">
          <h2 className="research-title">Resultados e impacto comprobado.</h2>
          <p className="research-sub">Charlas y talleres que inspiran cambio real en familias y líderes.</p>
        </div>
        <div className="research-stats">
          {stats.map((s, i) => (
            <div
              className={`stat-card reveal delay-${(i+1)*100}`}
              key={s.label}
              ref={(el) => (cardsRef.current[i] = el)}
              data-index={i}
            >
              {/* aria-live para anunciar el cambio del número de forma no intrusiva */}
              <div className="stat-value" aria-live="polite">
                <span className="num">{formatNumber(display[i])}</span>
                <span className="stat-suffix">+</span>
              </div>
              <div className="stat-label">
                {s.label === 'Libros' && 'Libros publicados'}
                {s.label === 'Conferencias y talleres' && 'Conferencias y talleres impartidos'}
                {s.label === 'Años de Formador' && 'Años formando líderes'}
                {(!['Libros','Conferencias y talleres','Años de Formador'].includes(s.label)) && s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
