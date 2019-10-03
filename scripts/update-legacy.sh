#! /usr/bin/env bash

changed=0
total=0


tmpdir=`mktemp -d 2>/dev/null || mktemp -d -t 'tmpdir'`
git worktree add "$tmpdir" master

parts=(
    intro/01-introduction/00-welcome-and-orientation:01-welcome-and-orientation
    intro/01-introduction/01-growth-mindset:02-growth-mindset
    intro/01-introduction/02-why-learn-to-code:03-why-learn-to-code
    intro/01-introduction/03-your-first-website:04-your-first-website
    intro/01-introduction/04-quiz:05-quiz
    intro/02-variables-and-data-types/00-values-data-types-and-operators:06-values-data-types-and-operators
    intro/02-variables-and-data-types/01-variables:07-variables
    intro/02-variables-and-data-types/02-self-learning-MDN:08-self-learning-MDN
    intro/02-variables-and-data-types/03-comments:09-comments
    intro/02-variables-and-data-types/04-guided-exercises:10-guided-exercises
    intro/02-variables-and-data-types/05-quiz:11-quiz
    intro/02-variables-and-data-types/06-exercises:12-exercises
    intro/03-ux-design/00-development-team:13-development-team
    intro/03-ux-design/01-ux-design:14-ux-design
    intro/03-ux-design/02-ux-design-vs-ui-design:15-ux-design-vs-ui-design
    intro/03-ux-design/03-quiz:16-quiz
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
  fi
done

changedExercises=0
exercises=(
  01-coin-convert/boilerplate/coinConvert.js
  01-coin-convert/solution/coinConvert.js
  01-coin-convert/test/coinConvert.spec.js
  02-restaurant-bill/boilerplate/restaurantBill.js
  02-restaurant-bill/solution/restaurantBill.js
  02-restaurant-bill/test/restaurantBill.spec.js
)

for exercise in ${exercises[@]}; do
  src="${tmpdir}/admission-es/03-prework/12-exercises/${exercise}"
  dest="intro/02-variables-and-data-types/06-exercises/${exercise}"
  changes=$( diff "$dest" "$src" )

  if [[ "$?" != "0" ]]; then
    ((changed=changed+1))
    echo "$src" "->" "$dest"
    echo "$changes"
  fi
done

echo "Files changed: ${changed}"
echo "Total files compared: ${total}"

git worktree remove "$tmpdir"
