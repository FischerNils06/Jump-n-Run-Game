import React from 'react';
import { Context } from './maps/state';

const options = [50, 100, 150, 200, 250];

const getRandomHeight = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};


const Ground = () => {
  const randomWidth = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

  return (
    <div id="ground" className="block" style={{ width: randomWidth }}></div>
  );
};

const Block1 = () => {
  const randomHeight = getRandomHeight();
  const [state, setState] = React.useContext(Context);
  return (
    <div id="block1" className="block" style={{ height: randomHeight, left: `${state.Block1.x}px` }}></div>
  );
};

export { Ground, Block1 };