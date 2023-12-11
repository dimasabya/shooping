import ReactDom from "react-dom";

const BackgroundOverplay = () => {
  return <div className="fixed top-0 w-full h-screen z-20 bg-black bg-opacity-75" />;
};
const ModalOverplay = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
      <div className="bg-white p-4 rounded-lg shadow-lg text-gray-900 mx-2">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<BackgroundOverplay />, portalElement)}
      {ReactDom.createPortal(<ModalOverplay>{props.children}</ModalOverplay>, portalElement)}
    </>
  );
};

export default Modal;
