#!/bin/bash

## The target and source can contain spaces as
## long as they are quoted.
target="/raid/user/github.com/contributorpw/google-apps-script-snippets-hugo-site/content/snippets"
source="/raid/user/github.com/contributorpw/google-apps-script-snippets/snippets"

rsync -ar --progress --exclude "*.mp4" --exclude ".clasp.json" "$source/" "$target/" --delete

brename -p "readme.md" -r "index.md" -R $target
# while true; do

## Watch for new files, the grep will return true if a file has
## been copied, modified or created.
#  watchman-wait path "$source"/ -p "*" 2>/dev/null |
#  grep total

## The -u option to cp causes it to only copy files
## that are newer in $source than in $target. Any files
## not present in $target will be copied.
# rsync -rc "$source/" "$target/" --delete
# done

# asdfsdafsadf
