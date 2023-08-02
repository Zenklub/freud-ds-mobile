import { iconCharMap } from '../icon/constants';
export type IconName = keyof typeof iconCharMap;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg';
export interface IconProps {
    name: IconName;
    size?: IconSize;
    color?: string;
    testID?: string;
}
