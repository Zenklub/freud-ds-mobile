#!/bin/bash

SAMPLE_PROJ_PATH=./sample/node_modules/@freud-ds/react-native

clean_up_watchers() {
    (rm -rf $TMPDIR/react-*; rm -rf $TMPDIR/haste-*; rm -rf $TMPDIR/metro-*; watchman watch-del-all) >/dev/null
    watchman watch-del ./ && watchman trigger-del ./ sync-changes
}

add_watchers() {
    (watchman watch-del ./ && watchman trigger-del ./ sync-changes) >/dev/null
    watchman watch ./dist && watchman -- trigger ./dist sync-changes '**/*' -- ../scripts/sync-changes.sh
}

"$@"
