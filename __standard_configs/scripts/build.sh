#!/bin/bash
git add . &&
git commit . -m "message" &&
npm version patch &&
git push origin main &&
npm publish --access public