#!/usr/bin/env node
const { spawnSync } = require('child_process');

// Normalize Windows backslashes to forward slashes so playwright receives a proper path/pattern
const args = process.argv.slice(2).map(a => a.replace(/\\/g, '/'));

const cmdArgs = ['playwright', 'test', ...args];

const res = spawnSync('npx', cmdArgs, { stdio: 'inherit' });
process.exit(res.status);
