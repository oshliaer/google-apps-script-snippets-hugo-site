#!/usr/bin/env bash

source="/raid/user/github.com/contributorpw/google-apps-script-snippets/snippets"

watchman watch-del-all
watchman watch $source
watchman -- trigger $source sync '**/*' -- $PWD/scripts/sync.sh
rm -rf ./docs && hugo serve --renderToDisk --disableFastRender