#!/bin/bash

$PWD/scripts/sync.sh

echo "asdfsdf"
# rm -rf ./docs &&
# rm -rf ./public
hugo --destination ./docs --theme hugo-bearblog --themesDir /raid/user/github.com/contributorpw --cleanDestinationDir --ignoreCache
# mv ./public ./docs
