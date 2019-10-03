#! /usr/bin/env bash

changed=0
total=0


tmpdir=`mktemp -d 2>/dev/null || mktemp -d -t 'tmpdir'`
git worktree add "$tmpdir" master

parts=(
    admission-legacy/01-introduction/00-welcome-and-orientation:01-welcome-and-orientation
    admission-legacy/01-introduction/01-growth-mindset:02-growth-mindset
    admission-legacy/01-introduction/02-why-learn-to-code:03-why-learn-to-code
    admission-legacy/01-introduction/03-your-first-website:04-your-first-website
    admission-legacy/01-introduction/04-quiz:05-quiz
    admission-legacy/02-variables-and-data-types/00-values-data-types-and-operators:06-values-data-types-and-operators
    admission-legacy/02-variables-and-data-types/01-variables:07-variables
    admission-legacy/02-variables-and-data-types/02-self-learning-MDN:08-self-learning-MDN
    admission-legacy/02-variables-and-data-types/03-comments:09-comments
    admission-legacy/02-variables-and-data-types/04-guided-exercises:10-guided-exercises
    admission-legacy/02-variables-and-data-types/05-quiz:11-quiz
    admission-legacy/02-variables-and-data-types/06-exercises:12-exercises
    admission-legacy/03-ux-design/00-development-team:13-development-team
    admission-legacy/03-ux-design/01-ux-design:14-ux-design
    admission-legacy/03-ux-design/02-ux-design-vs-ui-design:15-ux-design-vs-ui-design
    admission-legacy/03-ux-design/03-quiz:16-quiz
)

for part in ${parts[@]}; do
  pair=(${part//:/ })
  src="${tmpdir}/admission-es/03-prework/${pair[1]}"
  dest="${pair[0]}"
  ((total=total+1))

  changes=$( diff "${dest}/README.md" "${src}/README.md" )
  if [[ "$?" != "0" ]]; then
    ((changed=changed+1))
    echo "${src}/README.md" "->" "${dest}/README.md"
    echo "$changes"
    cp "${src}/README.md" "${dest}/README.md"
  fi
done


echo "Files changed: ${changed}"
echo "Total files compared: ${total}"

git worktree remove "$tmpdir"
