"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleComponent = void 0;
const react_1 = require("react");
const styleComponent = (sprinklesFn, componentType, children, props, defaultStyle, defaultSprinkles, variantFn) => {
    const { as } = props, rest = __rest(props, ["as"]);
    const { sprinklesProps, elementProps, variantProps } = extractParams(sprinklesFn, Object.assign(Object.assign({}, rest), defaultSprinkles));
    const { className } = elementProps, restProps = __rest(elementProps, ["className"]);
    return (0, react_1.createElement)(as ? as : componentType, Object.assign({ className: [
            className,
            sprinklesFn(sprinklesProps),
            variantFn ? variantFn(variantProps) : '',
            defaultStyle
        ]
            .filter((value) => typeof value !== 'undefined' && value !== '')
            .join(', ') }, restProps), children);
};
exports.styleComponent = styleComponent;
const getSprinklesParams = (sprinkles) => {
    const sprinklesParams = [];
    sprinkles['properties'].forEach((value) => {
        sprinklesParams.push(value);
    });
    return sprinklesParams;
};
const extractParams = (sprinkles, props) => {
    const Props = props;
    const sprinklesParams = getSprinklesParams(sprinkles);
    const sprinklesProps = {};
    const elementProps = {};
    let variantProps = {};
    Object.keys(props).forEach((key) => {
        if (sprinklesParams.includes(key)) {
            sprinklesProps[key] = Props[key];
        }
        else if (key === 'variant') {
            variantProps = Props[key];
        }
        else {
            elementProps[key] = Props[key];
        }
    });
    return { sprinklesProps, elementProps, variantProps };
};
//# sourceMappingURL=styleComponent.js.map