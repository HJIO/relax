// boolean: precision = {true}
// string:  popOverDirection = "left"
// Object:

const TYPE_HND = "TYPE";
let propsMap = {

    "precision": {
        propsHandler: TYPE_HND,
        collection: [
            //if true
            ["config-precision"]
            //if false
        ]
    },
    "stickyRule": {
        propsHandler: TYPE_HND,
        collection: [
            //if true
            ["use-position-sticky"]
            //if false
        ],
    },
    "layout": {
        propsHandler: TYPE_HND,
        presetValues: [
            "flex", "block", "left-item", "space-center-flex"
        ],
        collection: [
            ["config-flex"],
            ["config-block"],
            ["config-flex", "config-flex-align-items-center", "config-flex-justify-center"],
            ["config-flex", "config-flex-align-items-center", "config-flex-justify-space-around"]
        ]
    },
    "fixedHeight": {
        propsHandler: val => `fixed-height-${val}`,
    },
    "fontLevel": {
        propsHandler: val => `hero-${val}`,
    },
    "textAlign": {
        propsHandler: val => `use-text-align-${val}`,
    },

    "backGround": {
        propsHandler: val => `use-background-${val}`,
    }
};
const BreakpointTypes = ['lg', 'md', 'sm', 'xs'];
BreakpointTypes.forEach(type => {
    propsMap[type] = {
        propsHandler: val => [`${type}-${val}`, "ux-col"]
    };

    propsMap[`${type}Only`] = {
        propsHandler: val => {
            let arr = [];
            BreakpointTypes.forEach(item => {
                if (item === type) {
                    arr.push([`${type}-${val}`, "ux-col"])
                } else {
                    arr.push(`${item}-0`)
                }
            });
            return arr;
        }
    };
});


export default propsMap;