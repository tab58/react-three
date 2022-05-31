import React from 'react';
import { DrawingCanvas } from './drawingCanvas';
import { StatusBar, AlertType } from './statusBar';

interface AppProps {
  onCanvasMount: (canvas: HTMLCanvasElement) => void;
}

export const App = (props: AppProps) => {
  return (<React.Fragment>
    <div className='absolute top-0 left-0 h-screen w-screen'>
      <DrawingCanvas onCanvasMount={props.onCanvasMount}/>
    </div>
    <StatusBar type={AlertType.Primary}>Placeholder status bar text.</StatusBar>
  </React.Fragment>);
};