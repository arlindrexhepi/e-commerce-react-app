import { AiOutlineClose } from "react-icons/ai";

interface StoreUpdatesProps {
  showStoreUpdateHandler: () => void;
}

const StoreUpdates: React.FC<StoreUpdatesProps> = ({
  showStoreUpdateHandler
}) => {
  return (
    <div
      className="relative flex items-center justify-center
       bg-lightGrey py-1 text-darkBlue"
    >
      <p>Store Updates!</p>
      <AiOutlineClose
        onClick={showStoreUpdateHandler}
        className="absolute right-4 text-2xl p-1
       hover:bg-darkGrey rounded cursor-pointer"
      />
    </div>
  );
};

export default StoreUpdates;
