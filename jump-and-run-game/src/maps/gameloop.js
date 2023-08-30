import React, {useEffect} from 'react';
import { Context } from './state';

const GameLoop = (gameloop) => {
  
  const [state, setState] = React.useContext(Context);
  let currentPosition = state.Block1.x;
  const blocks = document.querySelectorAll('.block');
  
  
    const animateBlock = (block) => {
      const updatePosition = () => {
        currentPosition -= 1;
        block.style.left = `${currentPosition}px`;

        if (currentPosition > -block.offsetWidth) {
          requestAnimationFrame(updatePosition);
        }
      };
      
      updatePosition();
    };

    blocks.forEach((block) => {
      if (block.id === 'block1') {
        animateBlock(block);
      }
    });


  return null; 
};

export { GameLoop };

