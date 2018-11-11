#!/bin/sh
cd /usr/workdir

npm rebuild node-sass # relies on native modules so requires rebuilding in the container

npm start
