#!/usr/bin/env bash

full_path="$(realpath "$0")"
dir_path="$(dirname $full_path)"
script_path="$dir_path/test-cli.js"

# Path is made thanks to: https://code-maven.com/bash-shell-relative-path
# Combined with knowledge from: https://stackoverflow.com/questions/68111434/how-to-run-node-js-cli-with-experimental-specifier-resolution-node

/usr/bin/env node --experimental-specifier-resolution=node $script_path "$@"