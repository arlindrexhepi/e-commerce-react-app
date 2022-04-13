import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }: { rating: number }) => {
  //   const totalStars = 5;
  //   const starPercentage = Math.round((rating / totalStars) * 100);
  console.log(rating, "okej");
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex items-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <div className="absolute inset-0 text-yellow-400 flex items-center">
          {/* {[...Array(Math.round(rating))].map((star, index) => {
            return <FaStar key={index} />;
          })} */}
        </div>
      </div>
    </div>
  );
};
export default RatingStars;
