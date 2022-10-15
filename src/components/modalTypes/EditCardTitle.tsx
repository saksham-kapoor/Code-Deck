import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseButton, ModalProps } from "../Modal";

const EditCardTitle = ({ closeModal, identifer }: ModalProps) => {
  return (
    <div>
      EditCardTitle
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

export default EditCardTitle;
