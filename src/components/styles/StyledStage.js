import styled from 'styled-components/macro';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(20vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 20vw;
  background: #111;

  @media only screen and (max-width: 1024px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(45vw / ${props => props.width})
    );
    max-width: 45vw;
  }

  @media only screen and (max-width: 768px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(40vw / ${props => props.width})
    );
    max-width: 40vw;
  }

  @media only screen and (max-width: 480px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(50vw / ${props => props.width})
    );
    max-width: 50vw;
    margin: 0 auto;
  }
`;
