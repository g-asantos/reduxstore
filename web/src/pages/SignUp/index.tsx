import React from 'react';
import { SiRedux } from 'react-icons/si';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  CreateAccText,
  Input,
  InputContainer,
  SignUpContainer,
} from './styles';

const SignUp: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <SiRedux size={40} style={{ marginBottom: 20 }} />
      <Form
        onSubmit={() => {
          console.log('');
        }}
      >
        <InputContainer>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </InputContainer>

        <ButtonContainer>
          <Button>
            <ButtonText>Log In</ButtonText>
          </Button>
        </ButtonContainer>
      </Form>
      <SignUpContainer>
        <CreateAccText
          onClick={() => {
            history.push('/');
          }}
        >
          Sign Up
        </CreateAccText>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
