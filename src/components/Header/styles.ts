import styled from 'styled-components';

export const Container = styled.div`
  background-color: #764abc;
  display: flex;
  width: 100vw;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 689px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 98vw;
  @media (max-width: 689px) {
    display: flex;
  }
`;

export const HeaderTextContainer = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-items: center;
  background-color: #764abc;
  border: 0;
  visibility: hidden;

  @media (max-width: 768px) {
    position: absolute;
    visibility: visible;
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

export const ButtonContainer = styled.div`
  position: relative;
  margin-left: auto;
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
  position: absolute;
  right: 0.3rem;
  top: 1.2rem;

  font-size: 13px;
  font-weight: 700;
`;
