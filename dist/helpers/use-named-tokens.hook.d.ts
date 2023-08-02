export declare const useNamedTokens: <T extends Record<string, string>>(property: string, tokens: T, fallback?: Record<keyof T, any> | undefined) => Record<keyof T, any>;
