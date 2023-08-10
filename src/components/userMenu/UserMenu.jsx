import { useState } from "react";
import RegisterView from "../../pages/RegisterView";

const UserMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
//   const onRegisterClick = () => {
//     console.log(1);
//   };
//   const onLoginClick = () => {
//     console.log(2);
//   };

  return (
    <>
      {showModal && (
        // <Modal toggleModal={toggleModal}>
          <RegisterView toggleModal={toggleModal} />
        // </Modal>
      )}
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Register
      </button>
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Log In
      </button>
    </>
  );
};

export default UserMenu;
