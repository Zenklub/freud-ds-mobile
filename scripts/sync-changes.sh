#!/bin/bash

SAMPLE_PROJ_PATH=../playground/node_modules/@freud-ds/react-native

path=../lib

for file in "$@"; do
  file_path="${path}/${file}"

  if [ -e "${file_path}" ]; then
    echo "Coping changes in file: \"lib/${file}\" to: \"${SAMPLE_PROJ_PATH}/lib/${file}\""
    cp -rf "${path}/${file}" "${SAMPLE_PROJ_PATH}/lib/${file}"
  else
    echo "Removing file: \"${SAMPLE_PROJ_PATH}/lib/$file\""
    rm -rf "${SAMPLE_PROJ_PATH}/lib/$file"
  fi
done
