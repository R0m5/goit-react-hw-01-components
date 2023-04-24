import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 450px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-left: 25px;

  background-color: #ecebeb;
  tr:nth-child(even) {
    background-color: white;
  }
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f78536;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: black;
  background-color: #00bcd5;
  //   border: 1px solid black;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  color: black;
  //   border: 0.5px solid black;
`;
