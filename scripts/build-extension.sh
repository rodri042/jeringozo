#!/bin/bash

. ./scripts/try.sh

./node_modules/.bin/webpack --output-library-target window \
                            --output-library JeringozaTranslator \
                            src/JeringozaTranslator.js \
                            -o extension/bundle.js
