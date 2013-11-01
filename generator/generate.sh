#!/bin/sh
cd `dirname $0`
js dumpmap.js > truthmap.json
python generate.py
