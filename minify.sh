#!/bin/sh

if command -v node >/dev/null 2>&1; then
    if node minify.js; then
        paste -s -d '' InupiaqBookmarklet.min.js >noNewLines.js
        mv noNewLines.js InupiaqBookmarklet.min.js
        exit 0
    else
        echo "Error while minifying script."
        echo
        exit 2
    fi
else
    echo "You must install node to run this script."
    echo
    exit 1
fi
