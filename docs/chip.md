# Chip

Este componente é responsável pela exibição de um chip, que é um elemento compacto, que possibilita ao usuário uma entrada ou ação. Com ele podemos prover as funcionalidades como `selecionar` ou `remover`.

## Como utilizar

Para usá-lo, basta importar o componente `Chip`, e passar um texto através da propriedade `label`.

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { Chip } from '@freud-ds/react-native/Chip';

export const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#337cc4' }}>
			<Chip
				label="Coffee"
				onSelect={() => {}}
				containerStyles={{
					backgroundColor: 'transparent',
					borderColor: '#fff',
				}}
				containerSelectedStyles={{
					backgroundColor: '#fff',
					borderColor: '#fff',
				}}
				labelStyles={{ color: '#fff' }}
				labelSelectedStyles={{ color: '#337cc4' }}
			/>
		</View>
	);
};
```

## Propriedades

| Nome                    | Tipo         | Obrigatório | Descrição                                                                                               | Padrão      |
| :---------------------- | :----------- | :---------- | :------------------------------------------------------------------------------------------------------ | :---------- |
| label                   | `string`     | sim         | O texto principal que aparecerá sobre o componente.                                                     | ``          |
| containerStyles         | `ViewStyle`  | não         | Estilos que serão atribuídos ao container.                                                              | ``          |
| containerSelectedStyles | `ViewStyle`  | não         | Estilos que serão atribuídos ao container, mas somente quando estiver selecionado (`isSelected: true`). | ``          |
| labelStyles             | `TextStyle`  | não         | Estilos que serão atribuídos ao texto.                                                                  | ``          |
| labelSelectedStyles     | `TextStyle`  | não         | Estilos que serão atribuídos ao texto, mas somente quando estiver selecionado (`isSelected: true`).     | ``          |
| showRemoveIcon          | `boolean`    | não         | Ativa um botão de remover.                                                                              | `false`     |
| testID                  | `string`     | não         | Utilizado para localizar o componente nos testes (unit e end-to-end).                                   | `chip-test` |
| isDisabled              | `boolean`    | não         | Indica se o componente está desabilitado para interações (ex: pressionar).                              | `false`     |
| isSelected              | `boolean`    | não         | Configura o componente como selecionado ou não selecionado (padrão).                                    | `false`     |
| onSelect                | `() => void` | não         | Callback que é chamado quando selecionamos o componente.                                                | ``          |
| onRemove                | `() => void` | não         | Callback que é chamado quando o pressionamos o botão de fechar.                                         | ``          |
