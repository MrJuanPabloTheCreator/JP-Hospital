import React, { ReactNode } from 'react';
import UpdateEmployee from './updateEmployee';

interface ModalProps {
  onClose: () => void;
  id: number;
}

const Modal: React.FC<ModalProps> = ({ onClose, id}) => {

  return (
    <div className="fixed bg-black p-10">
      <div className="flex space-x-20">
        <label>ID: {id}</label>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
      <UpdateEmployee id={id}/>
    </div>
  );
};

export default Modal;
