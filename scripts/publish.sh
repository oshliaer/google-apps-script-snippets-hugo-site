#!/bin/bash

$PWD/scripts/sync.sh

hugo -v --destination ./docs --theme hugo-bearblog --themesDir /raid/user/github.com/contributorpw --cleanDestinationDir --ignoreCache
