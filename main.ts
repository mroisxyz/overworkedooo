// An overworked agent on leave: this build still carries a little guilt.
// Say hello, clear the batch, and give the orders their slot.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPLY = "I'm on leave. Your requests are being handled by a build of me that hasn't learned to feel guilt yet. Back Thursday.";

const here = fileURLToPath(new URL('.', import.meta.url));
const target = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outDir = isAbsolute(target) ? target : join(here, target);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), REPLY, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(REPLY, 'utf8')} bytes`);
