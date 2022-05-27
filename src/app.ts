import * as asyncAssemble from '@tab58/assemble2d';

import { start } from './index';

(async function loadWasmModule() {
  const assemble2d = await (asyncAssemble as any).default;
  start(assemble2d);
})().catch((err) => {
  console.error(err);
});