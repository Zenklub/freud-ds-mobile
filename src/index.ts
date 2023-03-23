// main index.ts

import { NativeModules } from 'react-native';

// Exports all Native Components
export const RNFreudDS = NativeModules;

// Theme Provider
export { FreudDSProvider } from '@providers';

// Components
export { Heading } from '@components/typography/heading';
export { Text } from '@components/typography/text';
