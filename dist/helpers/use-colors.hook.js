import { useMemo } from 'react';
import { useNamedTokens } from './use-named-tokens.hook';
export var useColors = function (tokens, inverted) {
    var selectedTokens = useMemo(function () {
        return tokens[inverted ? 'inverted' : 'normal'];
    }, [tokens, inverted]);
    var keys = useNamedTokens('colors', selectedTokens);
    return keys;
};
