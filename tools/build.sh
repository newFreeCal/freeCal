#!/bin/bash

cd ../
NODE_OPTIONS="--max-old-space-size=16384" yarn build
