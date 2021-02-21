#!/bin/bash

$PWD/scripts/sync.sh
rm -rf ./docs
# rm -rf ./public
hugo --destination ./docs --theme hugo-bearblog --themesDir /raid/user/github.com/contributorpw --cleanDestinationDir
# mv ./public ./docs
