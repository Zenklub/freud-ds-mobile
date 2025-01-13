#!/bin/bash
reanimatedContent=""


function fixFiles() {
    freudDSVariablesJs="node_modules/@freud-ds/tokens/style/react-native/variables.js"
    sed -i '' 's/export const /module.exports./g' $freudDSVariablesJs

    reanimatedJs="node_modules/react-native-reanimated/lib/commonjs/Animated.js"
    reanimatedContent=$(cat $reanimatedJs)

    echo "exports.Easing = { bezier: () => {} }" > $reanimatedJs
}

function undoFix() {
    freudDSVariablesJs="node_modules/@freud-ds/tokens/style/react-native/variables.js"
    sed -i '' 's/module.exports./export const /g' $freudDSVariablesJs

    reanimatedJs="node_modules/react-native-reanimated/lib/commonjs/Animated.js"
    echo "$reanimatedContent" > $reanimatedJs
}


fixFiles
ts-node scripts/generate-docs/index.ts
undoFix