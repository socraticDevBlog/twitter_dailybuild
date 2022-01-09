#!/bin/bash
START_DATE=$(date --date="January 9, 2022" '+%s')
TODAY=$(date '+%s')
DAYS=$(( ($TODAY - $START_DATE) / 86400 ))

QUOTELINES=$(cat $1 | wc -l)
FILELINE=$(( ($DAYS % $QUOTELINES) + 1 ))

QUOTE=$(sed "${FILELINE}q;d" $1)
MESSAGE="Computer brokie: $QUOTE"
node regular-tweet.js "$MESSAGE"
