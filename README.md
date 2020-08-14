# d2l-organization-hm-behavior

A LitElement mixin providing general utility functions for parsing organization siren entities.

## Usage
The mixin can be included as a superclass to any class that needs the functionality added, and supports chaining mixins.

```js
export const className = (superclass) => class extends D2LOrganizationHMBehaviorMixin(superclass)
```
