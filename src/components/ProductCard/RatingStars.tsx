import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex items-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <div className="absolute inset-0 text-yellow-400 flex items-center">
          {[...Array(Math.round(rating))].map((star, index) => {
            return (
              <FaStar key={`star-${index - rating}`} className={`${rating}`} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RatingStars;
