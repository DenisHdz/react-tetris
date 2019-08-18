import React from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { StyledTitle } from './styles/StyledTitle';
import { createStage } from '../gameHelpers';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTitle>
        <h1>React Tetris</h1>
      </StyledTitle>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
