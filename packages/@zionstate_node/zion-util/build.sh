#!/bin/bash
git add . &&
npm version patch &&
git push origin main &&
npm publish --access public