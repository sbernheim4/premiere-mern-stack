#!/bin/sh

npm rebuild node-sass # relies on native modules so requires rebuilding in the container

concurrently "npm run es" "npm run watch"
