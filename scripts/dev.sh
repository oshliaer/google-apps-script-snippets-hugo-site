#!/bin/bash

source="/raid/user/github.com/contributorpw/google-apps-script-snippets/snippets"

watchman watch-del-all
watchman watch $source
$PWD/scripts/sync.sh && watchman -- trigger $source sync '**/*' -- $PWD/scripts/sync.sh
# rm -rf ./docs && hugo serve --renderToDisk --disableFastRender --minify
 rm -rf ./docs && hugo serve --theme hugo-book --themesDir /raid/user/github.com/contributorpw