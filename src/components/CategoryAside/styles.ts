import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;

  width: 25vh;
  min-height: 100%;
  background-color: #f5f6f7;
`;

export const TextContainer = styled.div``;

export const AsideAnchor = styled.button`
  font-size: 18px;
  margin: 20px;
  border: 0;
  background: #f5f6f7;

  &:hover {
    text-decoration: underline;
    color: #764abc;
    transition: 0.3s;
  }
`;
