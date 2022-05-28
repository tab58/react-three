import React from 'react';
import { DrawingCanvas } from './drawingCanvas';
import { onCanvasMount } from '../three-renderer/react';
import { StatusBar, AlertType } from './statusBar';

export const App = () => {
  return (<React.Fragment>
    <div className='absolute top-0 left-0 h-screen w-screen'>
      <DrawingCanvas onCanvasMount={onCanvasMount}/>
    </div>
    <StatusBar type={AlertType.Danger}>Placeholder status bar text.</StatusBar>
  </React.Fragment>);
};