#!/bin/bash

source="/raid/user/github.com/contributorpw/google-apps-script-snippets/snippets"

watchman watch-del-all
watchman watch $source
$PWD/scripts/sync.sh
rm -rf ./public
hugo --theme hugo-bearblog --themesDir /raid/user/github.com/contributorpw
mv ./public ./docs
