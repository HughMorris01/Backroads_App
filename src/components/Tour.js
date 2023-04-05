import TourInfo from './TourInfo';

function Tour({ imgSrc, date, name, country, length, price }) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={imgSrc} className="tour-img" alt="tour" />
        <p className="tour-date">{date}</p>
      </div>
      <TourInfo name={name} country={country} length={length} price={price} />
    </article>
  );
}
export default Tour;
