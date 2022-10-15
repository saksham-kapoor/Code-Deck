import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseButton, ModalProps } from "../Modal";

const NewCard = ({ closeModal, identifer }: ModalProps) => {
  return (
    <div>
      NewCard
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

export default NewCard;
