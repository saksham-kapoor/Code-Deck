import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseButton, ModalProps } from "../Modal";

const NewFolder = ({ closeModal, identifer }: ModalProps) => {
  return (
    <div>
      NewFolder
      <CloseButton
        onClick={() => {
          closeModal();
        }}
      >
        <RiCloseFill />
      </CloseButton>
    </div>
  );
};

export default NewFolder;
