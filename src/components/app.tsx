import React, { Component } from 'react';
import { SketcherCanvas } from './sketcher';
import { onCanvasMount } from '../three-renderer/react';

export const App = () => {
  return <React.Fragment>
    <h1 className='text-2xl underline'>Hello world!</h1>
    <SketcherCanvas onCanvasMount={onCanvasMount}/>
  </React.Fragment>;
};