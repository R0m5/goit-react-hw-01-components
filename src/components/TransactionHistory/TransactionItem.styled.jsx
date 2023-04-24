import styled from 'styled-components';

export const Tr = styled.tr`
  display: flex;
  /* border-radius: 8px; */
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const Td = styled.td`
  display: flex;
  min-height: 40px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  font-size: 18px;
`;
