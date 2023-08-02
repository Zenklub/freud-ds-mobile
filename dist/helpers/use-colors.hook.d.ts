export interface UseColorsTokensArg<T extends Record<string, string>> {
    inverted: T;
    normal: T;
}
export declare const useColors: <T extends Record<string, string>>(tokens: UseColorsTokensArg<T>, inverted: boolean) => T;
