# Rating Scale

Este componente é responsável pela exibição de um régua de avaliação que vai de 0 a 10.

## Como utilizar

Para usá-lo, basta importar o componente `RatingScale`, e utilizar dentro de uma View (container), com altura ideal de 170dp.
A única propriedade obrigatória para este componente é a `buttonBorderColor`. Nesta propriedade, você deverá passar a cor de fundo do container que está renderizado por trás do `RatingScale`, criando um efeito de entalhe nos botões.

```javascript
import React from 'react';
import { View } from 'react-native';
import { RatingScale } from '@freud-ds/react-native/RatingScale';

export const App = () => (
	<View style={{ height: 170, backgroundColor: '#7655E9' }}>
		<RatingScale />
	</View>
);
```

## Utilizando as suas propriedades mais importantes

```javascript
import React from 'react';
import { View } from 'react-native';
import { RatingScale } from '@freud-ds/react-native/RatingScale';

export const App = () => {
	return (
		<View style={{ height: 170, backgroundColor: '#7655E9' }}>
			<RatingScale
				buttonBorderColor="#7655E9"
				initialRate={3}
				leftLabel="Pouco"
				rightLabel="Muito"
				onChange={(value) => console.log(value)}
				readOnly={false}
			/>
		</View>
	);
};
```

## Propriedades

| Nome              | Tipo       | Descrição                                                                                                       | Padrão  |
| :---------------- | :--------- | :-------------------------------------------------------------------------------------------------------------- | :------ |
| buttonBorderColor | `string`   | Cor da borda do botão [você pode utilizar a cor de fundo do seu container aqui] (obrigatório)                   | -       |
| initialRate       | `number`   | Nota inicial que será atribuída assim que o componente for inicializado                                         | `0`     |
| leftLabel         | `string`   | A legenda que será mostrada no canto inferior esquerdo, para indicar as notas mais baixas                       | -       |
| rightLabel        | `string`   | A legenda que será mostrada no canto inferior direito, para indicar as notas mais altas                         | -       |
| readOnly          | `boolean`  | Modo de somente leitura (dica: combine isto com a propriedade `initialRate`)                                    | `false` |
| onChange          | `function` | Callback que será chamado quando um botão for pressionado `function (rate: number)`                             | -       |
| onPressIn         | `function` | Callback que será chamado quando um botão estiver sendo pressionado `function (rate: number)`                   | -       |
| onPressOut        | `function` | Callback que será chamado quando um botão acabar de ser pressionado `function (rate: number)`                   | -       |
| onLayout          | `function` | Callback que será chamado quando o layout da view container for mensurada `function (event: LayoutChangeEvent)` | -       |
