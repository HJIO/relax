import {UXPreset, HANDLER} from './UXPreset';
import * as util from "../util";
import '../style/style.scss'
import '../assets/lib/showdown.min'
import '../assets/lib/jquery.min'
class UXBuilder {
  constructor() {
    this.preset = UXPreset;
    this.build = this.build.bind(this);
    this.handle = this.handle.bind(this);
    this.styleHandler = this.styleHandler.bind(this);
    this.simpleBoolHandler = this.simpleBoolHandler.bind(this);
  }

  build(comp) {
    this.properties = comp.props;
    let classNameArray = [];
    for (let propsKey in this.properties) {
      if (this.preset[propsKey]) {
        classNameArray.push(this.handle(propsKey, this.properties[propsKey])) ;
      }
    }
    return classNameArray;
  }
  load(path){
    let worker =new Worker('../UXWorkers/AsyncWorker.js');
    worker.postMessage();
  }
  handle(propsKey, propsVal) {
    let propsPreset = this.preset[propsKey];
    let handler = propsPreset.handler;
    let typ = (typeof propsVal);
    switch (handler) {
      case(HANDLER.TYPE_HANDLER): {
        if (typ === 'boolean') {
          return this.simpleBoolHandler(propsKey, propsVal);
        } else if (typ === 'string') {
          let coll = propsPreset.classPreset;
          let index = propsPreset.valPreset.indexOf(propsVal);
          return coll[index];
        }
        break;
      }
      case(HANDLER.STYLE_HANDLER): {
        return this.styleHandler(propsKey, propsVal);
      }
      default: {
        return handler(propsVal);
      }
    }
  }

  simpleBoolHandler(propsName, propsVal) {
    let classPreset = this.preset[propsName].classPreset;
    return propsVal ? classPreset[0] : classPreset[1];
  }

  styleHandler(propsName, propsVal) {
    let propsPreset = this.preset[propsName];
    let specStyle = propsPreset.stylePreset;
    let timeStamp = util.getRandomString();
    util.addStyle(`.${timeStamp}`, specStyle(propsVal));
    return [propsPreset['classPreset'],timeStamp];
  }
}

const UX = new UXBuilder();
export default UX;
