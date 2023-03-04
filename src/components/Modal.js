import { OverlayStyled, ModalStyled } from "../styles/ModalStyles.js";

const Overlay = () => {
  return <OverlayStyled />;
};
const Modal = ({ title, text, onCloseModal }) => {
  const close = () => {
    onCloseModal();
  };
  return (
    <>
      <Overlay />
      <ModalStyled>
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={close}>Close</button>
      </ModalStyled>
    </>
  );
};

export default Modal;
