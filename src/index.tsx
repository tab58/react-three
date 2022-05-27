import { AssembleError } from '@tab58/assemble2d';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';

import './index.css';

export function start(assemble2d: typeof import('@tab58/assemble2d')) {
  const rootElement = document.getElementById('root');
  if (rootElement !== null) {
    const docRoot = ReactDOM.createRoot(rootElement);
    docRoot.render(<App />);
  }
  

  // const { solve_constraints } = assemble2d;

  // const point_coordinates = [2.1, 3.1, 5.1, 7.1, 11.1, 13.1];
  // const solution = solve_constraints({
  //   constraints: [
  //     {
  //       constraint_type: 1,
  //       point_indices: [0, 1, 2, 3]
  //     }
  //   ],
  //   point_coordinates
  // });

  // const solutionError = (solution as AssembleError).error;
  // if (solutionError) {
  //   console.log(`Error: ${solutionError}`);
  // } else {
  //   console.log(solution);
  // }
}