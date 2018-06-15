import React from 'react';
import styled from 'styled-components';

import './styles/global';

const Title = styled.h1`
  color: #f00;
  font-size: 32px;
`;

const App = () => (
  <div className="App">
    <Title>Github Compare</Title>
  </div>
);

export default App;
