import React from 'react';

import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  background-color: ${({ bg }) => bg};
`;

const TestComponent = ({ bg = 'red', name, onClick }) => {
  return <StyledFlex bg={bg} onClick={onClick}>{name}</StyledFlex>;
};

export default TestComponent;
