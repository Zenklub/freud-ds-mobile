import { IconName } from '../components/icon/icon.types';
import { ButtonVariants } from '../components/button/button.types';
export interface UseIconColorProps {
    icon?: IconName;
    variant?: ButtonVariants;
    inverted?: boolean;
}
export declare const useIconColor: (themeVariants: Record<ButtonVariants, (props: any) => any>, { icon, variant, inverted }: UseIconColorProps & Record<string, any>) => any[];
