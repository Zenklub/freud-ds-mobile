# Zenklub Mobile UI

Design System dos aplicativos do Zenklub

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![node-version](https://img.shields.io/badge/node-16-brightgreen.svg)](https://nodejs.org/en/blog/release/v16.16.0/)


#### Instalando em um projeto

```bash
yarn add "@freud-ds/react-native"
```

```bash
npm i "@freud-ds/react-native"
```



#### Modo de usar

```typescript
import { Text } from '@freud-ds/react-native';
import { View } from 'react-native';

export const Component: React.FC = () => {
  return (
  	<View>
    	<Text>Component</Text>
    </View>
  )
}
```



#### Desenvolvendo Localmente

Clone este repositório:

```bash
git clone git@github.com:Zenklub/freud-ds-mobile.git
cd freud-ds-mobile
```



Gere um build do playground para que você possa acompanhar as alterações em tempo real:

```bash
yarn build:playground:ios
```

```bash
yarn build:playground:android
```



Rode o builder em modo de desenvolvimento:

```bash
yarn dev
```



#### Criando componentes e visualizando no Playground

O playground juntamente com o builder em dev vai cuidar de todos os detalhes para manter o código sincronizado. O playground funciona com storybook para renderizar os componentes.

Primeiro criei seu componente com o mínimo para exibir algo na tela, exemplo:

```typescript
// src/components/my-fist-component/index.ts
import React from 'react';
import { Text } from 'react';

export MyFirstComponent: React.FC = () => <Text>MyFirstComponent</Text>
```

Em seguida, vamos criar a instância do `storybook` para exibirmos no playground:

```typescript
// src/components/my-fist-component/my-fist-component.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MyFirstComponent } from '.';

storiesOf('MyFirstComponent', module).add('Simple Usage', () => <MyFirstComponent />);
```

Por último, vamos importar o nosso storybook na aplicação, abra o arquivo `src/stories.ts` e adicione o import do nosso componente:

``` diff
// src/stories.ts
...
+ import { MyFirstComponent } from '@components/my-fist-component/my-fist-component.stories';

```

Agora o nosso componente já está sendo  exibido no playground.



## Boas Práticas

TODO



## Gerando uma versão

TODO
