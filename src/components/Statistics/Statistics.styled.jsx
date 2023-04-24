import styled from 'styled-components';

export const Section = styled.div`
  margin-left: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 400px;
`;
export const Title = styled.h2`
  max-width: 300px;
  text-align: center;
  padding-top: 20px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  margin: auto;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  padding: 0;
  margin: auto;
  justify-content: center;
`;
export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8ef;
  text-align: center;
  flex: 0 200px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
export const Percentage = styled.span``;
