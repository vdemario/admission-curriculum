#!/usr/bin/env bash

clean_up_repo_dir="no"
changed=0
total=0


if [[ -n "$1" ]]; then
  bootcamp_repo_dir=$( realpath "$1" )
else
  bootcamp_repo_dir=`mktemp -d 2>/dev/null || mktemp -d -t 'bootcamp_repo_dir'`
  git clone -b master --single-branch --depth=1 https://github.com/Laboratoria/bootcamp.git "$bootcamp_repo_dir"
  clean_up_repo_dir="yes"
fi


parts=(
  04-your-first-website:html/01-intro/01-your-first-website
  06-values-data-types-and-operators:javascript/01-basics/01-values-variables-and-types
  07-variables:javascript/01-basics/02-variables
  09-comments:javascript/01-basics/03-comments
  10-guided-exercises:javascript/01-basics/04-guided-exercises
  11-quiz:javascript/01-basics/05-quiz
  12-exercises:javascript/01-basics/06-exercises
)


for part in ${parts[@]}; do
  pair=(${part//:/ })
  src="${bootcamp_repo_dir}/topics/${pair[1]}"
  dest="03-prework/${pair[0]}"

  ((total=total+1))
  changes=$( diff "admission-es/${dest}/README.md" "${src}/README.md" )
  if [[ "$?" != "0" ]]; then
    ((changed=changed+1))
    echo "${src}/README.md" "->" "admission-es/${dest}/README.md"
    echo "$changes"
  fi

  if [[ -f "${src}/README.pt-BR.md" ]]; then
    ((total=total+1))
    changes=$( diff "admission-pt/${dest}/README.pt-BR.md" "${src}/README.pt-BR.md" )
    if [[ "$?" != "0" ]]; then
      ((changed=changed+1))
      echo "${src}/README.pt-BR.md" "->" "admission-pt/${dest}/README.pt-BR.md"
      echo "$changes"
    fi
  fi
done


echo "Files changed: ${changed}"
echo "Total files compared: ${total}"


if [[ "$clean_up_repo_dir" == "yes" ]]; then
  echo rm -rf "$bootcamp_repo_dir"
fi
