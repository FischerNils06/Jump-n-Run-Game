import { Figur } from '../figur';
import { Block1, Ground } from '../blocks';
import { Context } from './state';
import React from 'react';
import { Startgame } from './startgame'; 

const MapOne = () => { 

  let block1 = [];
  block1.push(<Block1 key="block1-1" />);

  const stateblock1 = block1.length > 0 ? block1[0].props.y : 0;
  if (stateblock1 < 700) {
    block1 = [];
    block1.push(<Block1 key="block1-2" />);
  }

  return (
    <div id="bild">
      <Ground />
      {block1}
      <Figur />
      <Startgame /> {/* Render die Startgame-Komponente hier */}
    </div>
  );
};

export { MapOne };
