import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 25vh;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  min-width: 300px;
  min-height: 40px;

  background-color: black;
  border-color: black;
  margin: 20px;

  &:hover {
    background-color: white;

    p {
      color: black;
    }
  }
`;

export const ButtonText = styled.p`
  color: white;
`;

export const SignUpContainer = styled.div``;

export const CreateAccText = styled.a`
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #764abc;
  }
`;
