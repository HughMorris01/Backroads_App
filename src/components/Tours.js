import Title from './Title';
import Tour from './Tour';
import { tourCards, tourInfo } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />

      <div className="section-center featured-center">
        {tourCards.map((tour, index) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              name={tourInfo[index].name}
              country={tourInfo[index].country}
              length={tourInfo[index].length}
              price={tourInfo[index].price}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
