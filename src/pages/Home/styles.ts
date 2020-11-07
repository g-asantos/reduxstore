import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 320px 320px 320px;
  align-items: center;
  justify-content: center;
`;
export const ImageText = styled.p`
  background-color: #f5f6f7;
  text-align: left;
`;

export const ImageContainer = styled.button`
  position: relative;
  margin: 20px 10px 10px 10px;
  width: 300px;
  height: 300px;
  border: 0;
  background-color: #f5f6f7;

  &:hover ${ImageText} {
    background-color: black;
    color: white;
    transition: 0.6s;
  }
`;

export const Image = styled.img`
  width: 100%;
  background-color: #e0e0eb;
`;

export const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
`;
