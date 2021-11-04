import React from 'react';
import {Container, Image} from './styles';

const Preload = () => {
  return (
    <Container>
      <Image
        accessibilityLabel="logo do app"
        source={require('../../assets/images/logo.png')}
      />
    </Container>
  );
};

export default Preload;
