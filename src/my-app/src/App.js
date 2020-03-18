import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap'

import { LabelInput } from './components/Input'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <LabelInput
            label="Nome"
            id="id-0"
            helpText="Insira seu nome completo" />

          <LabelInput
            label="Sobrenome"
            helpText="Texto de ajuda" />
        </Col>
      </Row>

      <Row>
        <Col>
          <LabelInput
            label="Email"
            helpText="Texto de ajuda"
            type="email" />

          <LabelInput
            label="Senha"
            type="password"
            helpText="Texto de ajuda" />
        </Col>
      </Row>

      <Button color="success">Enviar</Button>
    </Container>
  );
}

export default App;
