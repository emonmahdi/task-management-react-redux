/* eslint-disable react/prop-types */
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
        alias?
      </p>
    </Modal>
  );
};

export default AddTaskModal;
