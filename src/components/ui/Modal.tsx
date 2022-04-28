/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  showModal: boolean;
  side: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  showModal,
  side
}) => {
  if (!showModal) {
    document.body.classList.remove("overflow-hidden");
    return null;
  }
  document.body.classList.add("overflow-hidden");
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal-backdrop z-30 fixed inset-0" onClick={onClose}>
          {side === "right" && (
            <div
              className={`modal-overlay w-[90%] lg:w-[40%] h-full overflow-y-auto fixed
            top-0 right-0 bg-white`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          )}
          {side === "left" && (
            <div
              className={`modal-overlay w-[90%] lg:w-[40%] h-full overflow-y-auto fixed
            top-0 left-0 bg-white`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          )}
        </div>,
        document.getElementById("root-modal") as HTMLElement
      )}
    </>
  );
};

export default Modal;
