import styled from 'styled-components';

export const Container = styled.div`
  background-color: #764abc;
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 689px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 635px) {
    width: 100vh;
  }
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;

  @media (max-width: 689px) {
    display: flex;
  }
`;

export const HeaderTextContainer = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-items: center;
  margin-left: 42%;
  background-color: #764abc;
  border: 0;
  width: 150px;
  height: 100%;

  @media (max-width: 689px) {
    position: absolute;
    width: initial;
    height: initial;
    left: 10px;

    margin: 0;
  }
`;

export const HeaderMinorTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 689px) {
    visibility: hidden;
  }
`;

export const HeaderText = styled.div`
  margin-left: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 10px;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 689px) {
    position: absolute;
    left: 95vh;
  }
`;

export const Button = styled.button`
  background-color: #764abc;
  border: 0;
  color: white;
  margin-right: 10px;

  &:hover {
    color: #d1d1e0;
    animation: 0.6s;
  }
`;

export const Counter = styled.span`
  color: white;
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 50%;

  align-items: center;
  justify-content: center;
  position: absolute;
  right: 26px;
  top: 34px;
  font-size: 13px;
  font-weight: 700;

  @media (max-width: 689px) {
    top: 20px;
  }
`;
