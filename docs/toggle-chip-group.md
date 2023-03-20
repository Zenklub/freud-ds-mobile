# Toggle Chip Group

Este componente é responsável pela exibição de um grupo de botões de chip, em uma lista horizontal. Nele, o usuário poderá manter selecionado apenas um botão - semelhante a um radio button.

## Como utilizar

Para usá-lo, basta importar o componente `ToggleChipGroup`, e passar os itens desejados através da propriedade `items`.

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { ToggleChipGroup } from '@freud-ds/react-native/ToggleChipGroup';

export const App = () => {
	const items = [
		{ id: 1, label: 'Pipoca' },
		{ id: 2, label: 'Tapioca' },
		{ id: 3, label: 'Café' },
	];

	return (
		<View style={{ flex: 1, backgroundColor: '#337cc4' }}>
			<ToggleChipGroup
				items={items}
				chipProps={{
					containerStyles: {
						backgroundColor: 'transparent',
						borderColor: 'transparent',
					},
					containerSelectedStyles: {
						backgroundColor: 'rgba(205, 248, 255, 0.25)',
						borderColor: 'transparent',
					},
					labelStyles: {
						color: '#fff',
					},
					labelSelectedStyles: {
						color: '#fff',
					},
				}}
			/>
		</View>
	);
};
```

## Propriedades

| Nome                | Tipo             | Obrigatório | Descrição                                                                                                                                                              | Padrão |
| :------------------ | :--------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| items               | `object[]`       | sim         | Um array de objetos responsável por gerar os botões do grupo. A estrutura do objeto é: `{ id: 1, label: 'Nome' }`.                                                     | ``     |
| containerStyles     | `ViewStyle`      | não         | Estilos que serão atribuídos ao container que agrupa os botões.                                                                                                        | ``     |
| chipProps           | `object`         | não         | Propriedade opcional de estilos/comportamento que serão passados aos componentes de `Chip`. Dica: veja a documentação do `Chip` para conferir todas as possibilidades. | ``     |
| onSelect            | `(item) => void` | não         | Callback que é chamado quando selecionamos um item do grupo.                                                                                                           | ``     |
| initialSelectedItem | `object`         | não         | Esta propriedade serve para configurar um item como selecionado, no primeiro momento em que a lista é renderizada.                                                     | ``     |
