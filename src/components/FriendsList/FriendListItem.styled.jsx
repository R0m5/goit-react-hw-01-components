import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
  :last-child {
  margin-bottom: 0;
  border-bottom: none;

`;

export const Span = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Img = styled.img`
  width: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;
  background-color: hsla(215, 98%, 79%, 0.4);
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
`;
