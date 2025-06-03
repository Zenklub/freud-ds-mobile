# Select

### Como usar:

```typescript
import React, { useState } from 'react';
import { Select } from '@freud-ds/react-native';

export const Example: React.FC = () => {
	return (
		<View>
			<Select
				label="With error disabled"
				helperText="Helper text"
				placeholder="Placeholder"
				nativeID="select-error-disabled-inverted"
				error="Some error"
				selected={state}
				onSelectedValueChange={(value) => onSelect(value)}
				options={options}
				inputContainerStyle={{ flex: 0, flexDirection: 'row' }}
			/>
		</View>
	);
};
```
