#!/usr/bin/env node

import 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cleanupReactApp from './cleanupReactApp/cleanupReactApp.mjs';

const scriptRoot = path.dirname(fileURLToPath(import.meta.url));

cleanupReactApp(scriptRoot);

process.exitCode = 1;
