function TourInfo({ name, country, length, price }) {
  return (
    <div className="tour-info">
      <div className="tour-title">
        <h4>{name}</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
        tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
        qui corporis.
      </p>
      <div className="tour-footer">
        <p>
          <span>
            <i className="fas fa-map"></i>
          </span>{' '}
          {country}
        </p>
        <p>{length}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
export default TourInfo;
