import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 15px;
  min-height: 30px;
  width: 100%;
  border-radius: 15px;
  border: none;
  text-align: center;
  color: #fff;
  background: #7b1fa2;
  box-shadow: 0 5px #666;
  font-size: 1rem;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #6a1b9a;
  }

  &:active {
    box-shadow: 0 3px #333;
    transform: translateY(4px);
  }
`;
