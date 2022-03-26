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
       bg-secondary py-1 text-white"
    >
      <p>Store Updates!</p>
      <AiOutlineClose
        onClick={showStoreUpdateHandler}
        className="absolute right-4 text-2xl p-1
       hover:bg-black cursor-pointer"
      />
    </div>
  );
};

export default StoreUpdates;
