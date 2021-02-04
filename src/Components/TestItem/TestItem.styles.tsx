import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(77, 77, 34);
  width: 400px;
  margin: 10px;
  padding: 10px;
`;

export const TextBold = styled.p`
    color: ${props => props.color? props.color: 'white'};
    font-size: 16px;
    font-weight: 600;
`;