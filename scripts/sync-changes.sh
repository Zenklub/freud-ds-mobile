#!/bin/bash

SAMPLE_PROJ_PATH=../preview/node_modules/@freud-ds/react-native

path=../dist

for file in "$@"; do
  file_path="${path}/${file}"

  if [ -e "${file_path}" ]; then
    echo "Coping changes in file: \"dist/${file}\" to: \"${SAMPLE_PROJ_PATH}/dist/${file}\""
    cp -rf "${path}/${file}" "${SAMPLE_PROJ_PATH}/dist/${file}"
  else
    echo "Removing file: \"${SAMPLE_PROJ_PATH}/dist/$file\""
    rm -rf "${SAMPLE_PROJ_PATH}/dist/$file"
  fi
done
