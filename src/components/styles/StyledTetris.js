import styled from 'styled-components/macro';
import bgImage from '../../img/bg.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding-left: 20px;
  }
`;
