# Bottom Sheet

Este componente é responsável pela exibição de uma caixa que vem do canto inferior. Ele permite o usuário arrastar, soltar ou fechar.

## Como utilizar

Para usá-lo, basta importar o componente `BottomSheet`, e passar o conteúdo através da propriedade `renderContent`.

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { BottomSheet } from '@freud-ds/react-native/BottomSheet';

export const App = () => {
	const renderContent = () => {
		return (
			<View style={{ flex: 1 }}>
				<Text>Content goes here...</Text>
			</View>
		);
	};

	return (
		<View style={{ flex: 1, width: '100%' }}>
			<BottomSheet
				snapPoints={[0, 500]}
				renderContent={renderContent}
				initialSnap={1}
			/>
		</View>
	);
};
```

## Propriedades

| Nome                 | Tipo                    | Obrigatório | Descrição                                                                                                                                                                                                                                              | Padrão     |
| :------------------- | :---------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| ref                  | `React.Ref`             | não         | Objeto de refêrencia para os chamar métodos internos do componente [ex: snapTo].                                                                                                                                                                       | ``         |
| snapPoints           | `number[]`              | não         | Pontos para encaixe do coomponente de bottom sheet. Eles definem a distância da parte inferior da tela. Pode ser um número ou porcentagem (como string, por exemplo, '20% ') para pontos ou porcentagens da altura da tela a partir da parte inferior. | `[0, 430]` |
| initialSnap          | `number`                | não         | Determina o ponto inicial do componente. O valor é um índice do snapPoints.                                                                                                                                                                            | `0`        |
| renderHeader         | `() => React.ReactNode` | não         | Método para renderizar o conteúdo.                                                                                                                                                                                                                     | ``         |
| renderContent        | `() => React.ReactNode` | não         | Método para renderizar o cabeçalho.                                                                                                                                                                                                                    | ``         |
| onClose              | `() => void`            | não         | Callback que é chamado quando o componente é fechado.                                                                                                                                                                                                  | ``         |
| headerSnapIconRadius | `number`                | não         | Tamanho do raio do botão de arrastar.                                                                                                                                                                                                                  | `16`       |
| headerSnapIconColor  | `string`                | não         | Cor de ícone do botão de arrastar.                                                                                                                                                                                                                     | `#ccc`     |
| backgroundColor      | `string`                | não         | Cor de fundo que será definida para o conteúdo e o cabeçalho.                                                                                                                                                                                          | `#fff`     |
