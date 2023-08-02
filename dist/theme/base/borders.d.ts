declare const borderWidths: {
    none: any;
    sm: any;
    md: any;
    lg: any;
    xl: any;
    xxl: any;
};
export type IBorderWidth = keyof typeof borderWidths;
export default borderWidths;
