// import * as asyncAssemble from '@tab58/assemble2d';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './react-ui/app';
import { onCanvasMount } from './three-renderer/react';

import './index.css';

// export function start(assemble2d: typeof import('@tab58/assemble2d')) {
function appStart() {
  const rootElement = document.getElementById('root');
  if (rootElement !== null) {
    const docRoot = ReactDOM.createRoot(rootElement);
    docRoot.render(<App onCanvasMount={onCanvasMount}/>);
  }
}

// load the app when the WASM module loads
(async function loadWasmModule() {
  // const assemble2d = await (asyncAssemble as any).default;
  // start(assemble2d);
  appStart();
})().catch((err) => {
  console.error(err);
});