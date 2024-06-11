
# Toast dialog

O Toast Dialog é usado com o hook `useToastDialog`, definido em `mobile-ui/toast/provider.tsx`.

Ele retorna um objeto contendo duas funções, `present` e `dismiss`.

### Como usar:

```typescript
import React, { useState } from 'react';
import { useToastDialog } from '@freud-ds/react';
import { Button, View } from 'react-native';

export const Example: React.FC = () => {
	const { present } = useToastDialog();

	const presentToast = useCallback(() => {
		present({
			status: 'warning',
			title: 'Tost Example',
			body: 'The quick brown fox jumps over the lazy dog',
			dismissible: true,
			onDismiss: () => {},
			style: {},
		});
	}, [present]);

	return (
		<View>
			<Button title="Present Toast" onPress={displayToastPrimary('info')} />
		</View>
	);
};
```

### Função `present`

Esta é a função usada para exibir um toast, tem com retorno a ID do gerada dinamicamente;

Return Type: `string` (Toast ID)

Arguments:

- config: `ToastDialogConfig` - Interface declarada em `mobile-ui/toast/types.d.ts`

**Propriedade do `ToastDialogConfig`**

| Property      | Type         | Description                                                                                                                                                                                                | Required                                                                                                    | Default   |
| ------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------ |
| `title`       | `string`     | Texto do título do toast.                                                                                                                                                                                  | ✓ (obrigatório apenas se não existir `body`)                                                                |           |
| `body`        | `string`     | Texto do corpo do toast.                                                                                                                                                                                   | ✓ (obrigatório apenas se não existir `title`)                                                               |           |
| `status`      | `'success'   | 'info'                                                                                                                                                                                                     | 'warning'                                                                                                   | 'danger'` | Status do toast. <br />Para cada status, temos cores e ícones diferentes.                                                                                           |     | `info` |
| `dismissible` | `boolean`    | Determina se o toast é dispensável. <br />Quando `true`:<br />- apresenta um botão de para fechar;<br />- roda o timeout para fechar automaticamente, com exceção nos casos em que `duration="permanent"`. |                                                                                                             | `true`    |
| `duration`    | `number      | 'permanent'`                                                                                                                                                                                               | Tempo em milisegundos para dispensar o toast. Aceita o valor`permanent` para não dispensar automaticamente. |           | `5000`<br /><br />_<small>5000 milissegundos, este valor está declarado na constante `TOAST_DEFAULT_DURATION` localizado em `mobile-ui/toast/constants.ts`</small>_ |
| `onDismiss`   | `() => void` | Callback que será disparado sempre que o toast for dispensado                                                                                                                                              |                                                                                                             |           |
| `style`       | `ViewStyle   | AnimatedViewStyle`                                                                                                                                                                                         | Objeto `style` que será passado para o Toast                                                                |           |                                                                                                                                                                     |

### Função `dismiss`

Esta é a função usada para dispensar um toast em exibição

Return Type: `void`

Arguments:

- toastID: `string` - ID gerada dinamicamente para o toast em exibição, retornado pela função `present`.

### Toast Dialog nos seus temas

<img src="./assets/toasts-dialog.png" alt="radio" align=left />
