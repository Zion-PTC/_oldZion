#!/bin/bash
cd $!
git add . &&
git commit . -m $2 &&
npm version patch &&
git push origin main &&
npm publish --access public