# d2l-organization-hm-mixin

A LitElement mixin providing general utility functions for parsing organization siren entities.

## Usage
The mixin can be included as a superclass to any class that needs the functionality added, and supports chaining mixins.

```js
export const className = (superclass) => class extends D2LOrganizationHMBehaviorMixin(superclass)
```

## Running tests locally in Windows

To run tests, run the `npm test` command.

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.
