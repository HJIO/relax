const HANDLER = {
  DEFAULT:"style",
  TYPE_HANDLER: "type",
  STYLE_HANDLER: "style"
};
const remLambda = function (key) {
  return function (val) {
    if(typeof val === "string"){
      return {
        [key]: val,
      }
    }else return {
      [key]: val.toString() + 'rem',
    }
  }
};
const UXPreset = {
  "precision": {
    handler: HANDLER.TYPE_HANDLER,
    classPreset: ['use-precision'],
  },
  "strong":{
    handler: HANDLER.TYPE_HANDLER,
    classPreset: ['use-strong'],
  },
  "tall":{
    handler: HANDLER.TYPE_HANDLER,
    classPreset: ['use-tall'],
  },
  "fluid":{
    handler: HANDLER.TYPE_HANDLER,
    classPreset: ['config-fluid'],
  },
  "dark":{
    handler: HANDLER.TYPE_HANDLER,
    classPreset: [['use-color-dark-bg','use-color-font-white-trans']],
  },

  "stickyRule": {
    handler: HANDLER.STYLE_HANDLER,
    stylePreset: remLambda('top'),
    classPreset: ['use-position-sticky'],
  },
  "textAlignRule": {
    handler: val => `use-text-align-${val}`,
  },
  "themeRule": {
    handler: val => `use-theme-${val}`,
  },
  "active":{
    handler: HANDLER.TYPE_HANDLER,
    classPreset:['','use-hide']
  },
  "fixedHeightRule": {
    handler: HANDLER.STYLE_HANDLER,
    stylePreset: remLambda('height')
  },
  "fontSizeRule": {
    handler: HANDLER.STYLE_HANDLER,
    stylePreset: remLambda('font-size')
  },
  "layoutRule": {
    handler: HANDLER.TYPE_HANDLER,
    valPreset: [
      "flex", "block", "left-item", "space-center-flex"
    ],
    classPreset: [
      ["config-flex"],
      ["config-block"],
      ["config-flex", "config-flex-align-items-center", "config-flex-justify-center"],
      ["config-flex", "config-flex-align-items-center", "config-flex-justify-space-around"]
    ]
  },
  "flexBoxDirection": {
    handler: HANDLER.TYPE_HANDLER,
    valPreset: [
      "row","row-reverse","column","column-reverse"
    ],
  },
  "flexBoxJustifyRule": {
    handler: HANDLER.TYPE_HANDLER,
    valPreset: [
      "start","end","center","between","around"
    ],
    classPreset:[
      "config-justify-start",
      "config-justify-end",
      "config-justify-center",
      "config-justify-between",
      "config-justify-around"
    ]
  }
};
const BreakpointTypes = ['lg', 'md', 'sm', 'xs'];
BreakpointTypes.forEach(type => {
  UXPreset[type] = {
    handler: val => [`${type}-${val}`]
  };

  UXPreset[`${type}Only`] = {
    handler: val => {
      let arr = [];
      BreakpointTypes.forEach(item => {
        if (item === type) {
          arr.push([`${type}-${val}`])
        } else {
          arr.push(`${item}-0`)
        }
      });
      return arr;
    }
  };
});
export {UXPreset, HANDLER};
//