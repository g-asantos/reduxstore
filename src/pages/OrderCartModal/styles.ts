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
  display: flex;
  flex-direction: column;
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
  display: flex;
  grid-template-columns: 74vh 50vh;
  justify-content: space-between;
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
  height: 100vh;
`;

export const ModalFooter = styled.div`
  border-top-color: black;
  border-top-width: 1px;
  border-top-style: solid;
  background-color: #e0e0eb;

  display: grid;
  grid-template-rows: 80px 80px;
`;

export const ModalFooterTextContainer = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: 20px;
  color: grey;

  span {
    color: red;
  }
`;

export const ModalFooterButtonContainer = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: -20px;
`;

export const ContinueButton = styled.button`
  height: 50px;
  width: 248px;
  font-weight: 600;
  margin-right: 20px;
  border-color: black;
  border-width: 1px;
  border-style: solid;
`;

export const CheckoutButton = styled.button`
  height: 50px;
  width: 248px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
