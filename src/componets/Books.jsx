import React from 'react';
import './Books.css';

const books = [
  {
    title: 'Nunca te canses de comensar de nuevo',
    desc: 'comparte su experiencia personal atravesando el duelo y las enseñanzas que nacen del dolor ',
    img: '/src/img/Libro1.jpg',
    cta: 'Comprar ahora',
  },
  {
    title: 'La aventura de ser papa ',
    desc: 'Una mirada entrañable sobre la paternidad, el amor y esos pequeños instantes que revelan los grandes significados de la vida.',
    img: '/src/img/Libro2.jpg',
    cta: 'Comprar ahora',
  },
];

function Books() {
  return (
    <section id="books" className="books">
      <div className="books-container">
        <div className="books-grid">
          {books.map((b) => (
            <article className="book-card" key={b.title}>
              <div className="book-media">
                <img src={b.img} alt={b.title} />
              </div>
              <div className="book-body">
                <h3 className="book-heading">{b.title}</h3>
                <p className="book-desc">{b.desc}</p>
                <div className="book-action">
                  <a className="book-btn" href="#contact">{b.cta}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
