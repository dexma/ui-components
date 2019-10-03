# Contributing to dexma/ui-components

* [Commit](#commit)
* [Branches](#branches)

## Commit

A good commit message should describe what changed and why. We use semantic commit messages to streamline the release process.

A conventional commit contains the following format.

type(scope): short description
body
footer

Type:

- fix: A bug fix
- feat: A new feature
- docs: Documentation changes
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system
- ci: Changes to our CI configuration files and scripts
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (linting)

Scope:

A scope is phrase describing parts of the code affected by the changes. For example "feat(order)" or "fix(button)" in this case order and button are the scope


Examples of commit messages with semantic prefixes:

- fix(datepicker): pass correct date prop to the DatePicker
- feat(button): add isLoading state to the Button
- docs(input): add Input props
- test(carousel): add Carousel unit test
- build(webpack): update webpack export type
- ci(node): update the version of the node image
- perf(cache): cache the props with the memo hoc
- refactor(camelcase): update to camelcase the state of User views
- style(button): update the sizes of the Button component

## Branches

The different types of branches we may use are:

- Feature branches: feature/feature-name
- Release branches: release/0.3
- Fix branches: fix/button







