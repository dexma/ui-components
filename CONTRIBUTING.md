# Contributing to dexma/ui-components

* [Commit](#commit)
* [Branches](#branches)
* [Release](#release)

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

## Release

Release rules are used when deciding if the commits since the last release warrant a new release. If you define custom release rules the [default rules](lib/default-release-rules.js) will be used if nothing matched. Those rules will be matched against the commit objects resulting of [conventional-commits-parser](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser) parsing.

##### Rules matching

Each commit will be compared with each rule and when it matches, the commit will be associated with the release type in the rule's `release` property. If a commit match multiple rules, the highest release type (`major` > `minor` > `patch`) is associated with the commit.

See [release types](lib/default-release-types.js) for the release types hierarchy.

With the previous example:
- Commits with `type` 'docs' and `scope` 'README' will be associated with a `patch` release.
- Commits with `type` 'refactor' and `scope` starting with 'core-' (i.e. 'core-ui', 'core-rules', ...) will be associated with a `minor` release.
- Other commits with `type` 'refactor' (without `scope` or with a `scope` not matching the regexp `/core-.*/`) will be associated with a `patch` release.
- Commits with scope `no-release` will not be associated with a release type.

##### Default rules matching

If a commit doesn't match any rule in `releaseRules` it will be evaluated against the [default release rules](lib/default-release-rules.js).

With the previous example:
- Commits with a breaking change will be associated with a `major` release.
- Commits with `type` 'feat' will be associated with a `minor` release.
- Commits with `type` 'fix' will be associated with a `patch` release.
- Commits with `type` 'perf' will be associated with a `patch` release.
- Commits with scope `no-release` will not be associated with a release type even if they have a breaking change or the `type` 'feat', 'fix' or 'perf'.

##### No rules matching

If a commit doesn't match any rules in `releaseRules` or in [default release rules](lib/default-release-rules.js) then no release type will be associated with the commit.

With the previous example:
- Commits with `type` 'style' will not be associated with a release type.
- Commits with `type` 'test' will not be associated with a release type.
- Commits with `type` 'chore' will not be associated with a release type.

##### Multiple commits

If there is multiple commits that match one or more rules, the one with the highest release type will determine the global release type.

Considering the following commits:
- `docs(README): Add more details to the API docs`
- `feat(API): Add a new method to the public API`

With the previous example the release type determined by the plugin will be `minor`.

##### Specific commit properties

The properties to set in the rules will depends on the commit style chosen. For example [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular) use the commit properties `type`, `scope` and `subject` but [conventional-changelog-eslint](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-eslint) uses `tag` and `message`.

For example with `eslint` preset:
```json
{
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "eslint",
      "releaseRules": [
        {"tag": "Docs", "message":"/README/", "release": "patch"},
        {"tag": "New", "release": "patch"}
      ]
    }],
    "@semantic-release/release-notes-generator"
  ]
}
```
With this configuration:
- Commits with `tag` 'Docs', that contains 'README' in their header message will be associated with a `patch` release.
- Commits with `tag` 'New' will be associated with a `patch` release.
- Commits with `tag` 'Breaking' will be associated with a `major` release (per [default release rules](lib/default-release-rules.js)).
- Commits with `tag` 'Fix' will be associated with a `patch` release (per [default release rules](lib/default-release-rules.js)).
- Commits with `tag` 'Update' will be associated with a `minor` release (per [default release rules](lib/default-release-rules.js)).
- All other commits will not be associated with a release type.

##### External package / file

`releaseRules` can also reference a module, either by it's `npm` name or path:
```json
{
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": "./config/release-rules.js"
    }],
    "@semantic-release/release-notes-generator"
  ]
}
```
```js
// File: config/release-rules.js
module.exports = [
  {type: 'docs', scope: 'README', release: 'patch'},
  {type: 'refactor', scope: /core-.*/, release: 'minor'},
  {type: 'refactor', release: 'patch'},
];
```






