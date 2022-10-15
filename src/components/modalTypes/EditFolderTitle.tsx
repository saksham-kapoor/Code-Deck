import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseButton, ModalProps } from "../Modal";

const EditFolderTitle = ({ closeModal, identifer }: ModalProps) => {
  return (
    <div>
      EditFolderTitle
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

export default EditFolderTitle;
