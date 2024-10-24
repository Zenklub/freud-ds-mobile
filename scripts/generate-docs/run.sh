#!/bin/bash

# Fix token library to use ts-node
file="node_modules/@freud-ds/tokens/style/react-native/variables.js"

# replace "export const FILENAME" with "module.exports.FILENAME"
sed -i '' 's/export const /module.exports./g' $file

ts-node scripts/generate-docs/index.ts

# Revert token library to use export const
sed -i '' 's/module.exports./export const /g' $file