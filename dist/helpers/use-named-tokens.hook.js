import { useToken } from 'native-base';
import { useMemo } from 'react';
export var useNamedTokens = function (property, tokens, fallback) {
    var keys = useMemo(function () {
        return Object.keys(tokens);
    }, [tokens]);
    var values = useToken(property, keys.map(function (key) { return tokens[key]; }));
    return useMemo(function () {
        return keys.reduce(function (acc, key, index) {
            acc[key] = values[index] || (fallback === null || fallback === void 0 ? void 0 : fallback[key]) || undefined;
            return acc;
        }, {});
    }, [keys, values]);
};
