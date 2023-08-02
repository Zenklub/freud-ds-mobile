var baseStyle = function (props) {
    var centerContent = props.centerContent;
    return {
        maxWidth: '80%',
        alignItems: centerContent ? 'center' : 'flex-start',
        _text: { textAlign: centerContent ? 'center' : 'left' },
    };
};
export default {
    baseStyle: baseStyle,
};
