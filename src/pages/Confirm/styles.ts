import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ThanksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vh;
  height: 90vh;

  @media (max-width: 689px) {
    width: 50vh;
  }
`;

export const ThanksText = styled.p`
  font-size: 30px;
  margin: 10px 0 10px 0;
  @media (max-width: 689px) {
    text-align: center;
  }
`;

export const CompleteText = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ReferenceText = styled.p`
  color: #a5a5a5;
  margin-bottom: 10px;

  @media (max-width: 689px) {
    text-align: center;
  }
`;

export const GoBackButton = styled.button`
  width: 250px;
  height: 50px;
  color: #a5a5a5;
  border: 1px solid #a5a5a5;
`;
