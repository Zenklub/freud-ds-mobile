# Freud DS - Mobile

This is the implementation of Freud Design System for mobile apps

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![node-version](https://img.shields.io/badge/node-16-brightgreen.svg)](https://nodejs.org/en/blog/release/v16.16.0/)


### Installing

```bash
yarn add "@freud-ds/react-native"
```

```bash
npm i "@freud-ds/react-native"
```



### How to use it

```typescript
import { Text, FreudDSProvider } from '@freud-ds/react-native';
import { View } from 'react-native';

export const Component: React.FC = () => {
  return (
    <FreudDSProvider>
      <View>
        <Text>Component</Text>
      </View>
    </FreudDSProvider
  )
}
```



### Documentation (components list)

- [Text](docs/components/text.md)
- [Heading](docs/components/heading.md)
- [Button](docs/components/button.md)

<hr />

### Working Locally

```bash
# Clone this repository:
git clone git@github.com:Zenklub/freud-ds-mobile.git
cd freud-ds-mobile

# Install dependencies
yarn install

# Bootstrap project (it will install everything you need)
yarn bootstrap
```

To overcome the problem metro bundler has with symlinks, we  use `watchman` to detect changes in development mode and update directly into the playground app. To make work properly, please install it locally

```bash
# Mac OS
brew update
brew install watchman
```

*If you are not on a mac please refer to the [watchman's documentation](https://facebook.github.io/watchman/docs/install.html)*

#### Building the playground app 

```bash
# iOS
yarn build:playground:ios
# Android
yarn build:playground:android
```

Run the build script on development mode

```bash
yarn dev
```



#### Creating components and adding it to the Playground

The playground along with the dev builder will take care of all the details to keep the code in sync. The playground works with storybook to render the components.

First create your component with minimal to display something on the screen, example:

```typescript
// src/components/my-fist-component/index.ts
import React from 'react';
import { Text } from 'react';

export MyFirstComponent: React.FC = () => <Text>MyFirstComponent</Text>
```

Next, let's create the `storybook` instance so we can see it in the playground:

```typescript
// src/components/my-fist-component/my-fist-component.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MyFirstComponent } from '.';

storiesOf('MyFirstComponent', module).add('Simple Usage', () => <MyFirstComponent />);
```

Finally, let's import our story into the application, open the `src/stories.ts` file and add the import statement of our component's story:

``` diff
// src/stories.ts
...
+ import { MyFirstComponent } from '@components/my-fist-component/my-fist-component.stories';

```

Now our component is already being displayed in the playground.



## Good Practice

TODO



## Generating a version

TODO
