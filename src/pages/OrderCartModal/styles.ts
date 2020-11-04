import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 100;
  right: 0;
  bottom: 0;
  width: 85vh;
  height: 100vh;
  background-color: #f5f6f7;
  display: grid;
  grid-template-rows: 100px 500px 1fr;
`;

export const DarkContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 74vh 50vh;
  margin-right: 20px;
  margin-left: 20px;
  border-bottom-color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 20px;
`;

export const ModalButton = styled.button`
  border: 0;
  background-color: inherit;
  width: 10px;
  height: 10px;
`;

export const ModalHeaderText = styled.p``;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
`;

export const ModalFooter = styled.div`
  border-top-color: black;
  border-top-width: 1px;
  border-top-style: solid;
  background-color: #e0e0eb;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ModalFooterTextContainer = styled.div``;

export const ModalFooterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContinueButton = styled.button``;

export const CheckoutButton = styled.button``;
