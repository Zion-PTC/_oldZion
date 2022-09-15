#!/bin/bash
tsc
git add . &&
git commit . -m "npm publish" &&
npm version patch &&
git push origin main &&
npm publish --access public