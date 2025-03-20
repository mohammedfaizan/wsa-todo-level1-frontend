import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  // Close modal when `Escape` is pressed
  useEffect(() => {
    if (!isOpen) return;
    // Don't proceed further if modal is supposed to be closed, as below code should
    // only run when it is open, otherwise performance can decrease (and we don't need it when modal is closed).
    // Above type of exit is called a "Guard Clause"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      // If `Escape` button is pressed AND modal is open, close it.
    };

    document.addEventListener("keydown", handleKeyDown);
    // Execute `handleKeyDown` function whenever any key is pressed

    return () => {
      // Cleanup function that will run when Modal component unmounts or dependencies change
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div>
      <div className="overlay-style" onClick={onClose}></div>
      <div className="modal-style">{children}</div>
    </div>
  ) : null;
};

export default Modal;
