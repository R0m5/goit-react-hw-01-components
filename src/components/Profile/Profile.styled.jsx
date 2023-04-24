import styled from 'styled-components';

export const Avatar = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 300px;
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 25px;
`;

export const Description = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px 30px;
  text-align: center;
  border-radius: 24px;
`;

export const Img = styled.img`
  border-radius: 50%;
  border: 2px solid #e2e8ef;
  width: 100px;
  background-color: hsla(215, 98%, 79%, 0.4);
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const Name = styled.p`
  color: black;
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  color: black;
`;

export const Location = styled.p`
  color: black;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  padding: 0;
  margin: auto;
  list-style: none;
  justify-content: center;
`;

export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8ef;
  text-align: center;
  flex: 0 200px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SpanLabel = styled.span`
  color: black;
`;

export const SpanQuantity = styled.span`
  color: black;
`;
