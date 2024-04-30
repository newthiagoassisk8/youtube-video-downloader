import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { ModalProps, Modal as ReactModal } from "react-native";
import { ModalContainer, ModalContent } from "./styles";

export interface ModalRef {
  showModal: () => void;
  hideModal: () => void;
}

export const Modal = forwardRef(
  ({ children }: ModalProps, ref: Ref<ModalRef>) => {
    const [modalVisible, setModalVisible] = useState(false);

    function showModal() {
      setModalVisible(true);
    }

    function hideModal() {
      setModalVisible(false);
    }

    useImperativeHandle(ref, () => ({
      showModal,
      hideModal,
    }));

    return (
      <ReactModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <ModalContainer>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      </ReactModal>
    );
  }
);
