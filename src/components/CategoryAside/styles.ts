import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 25vh;
  min-height: 100%;
  background-color: #f5f6f7;

  @media (max-width: 1192px) {
    visibility: hidden;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AsideAnchor = styled.button`
  font-size: 18px;
  margin: 20px;
  border: 0;
  background: #f5f6f7;
  text-align: left;

  &:hover {
    color: #764abc;
    transition: 0.3s;
  }
`;
