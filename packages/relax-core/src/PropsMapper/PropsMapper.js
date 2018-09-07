import propsMap from './propsMap';
const PropsMapper = {
    //get props Object from caller.
    map: function (propsSet) {
        let classArr = [];
        try {
            for (let key in propsSet) {
                classArr.push(this.getClass(key, propsSet[key]));
            }
        } catch (err) {
            throw err;
        }
        return classArr;
    },
    getClass(propsName, propsVal) {
        let propsProfile;
        //propsProfile is an object that contains all the class names.
        if (propsMap.hasOwnProperty(propsName)) {
            propsProfile = propsMap[propsName];
            //decide which handler the mapper need to use.
            let propsInnerHandler = propsProfile.propsHandler;
            if (propsInnerHandler === "TYPE") {
                // we defined TYPE as default handler.
                return this.byTypeHandler(propsProfile, propsVal);
            }else{
                return propsInnerHandler(propsVal);
            }
        }
        return [];


    },
    byTypeHandler: function (propsProfile, propsVal) {
        switch (typeof propsVal) {
            case ("boolean"): {
                return this.byTypeBooleanHandler.call(null,propsProfile, propsVal);
            }
            case("string"):{
                if(propsVal.match(/\d+/g)){
                    return this.byTypeValuedStringHandler.call(null,propsProfile, propsVal);
                }else {
                    return this.byTypeNotValuedStringHandler.call(null,propsProfile, propsVal);
                }
            }
            default: {
                throw new Error("props Handler not found.");
            }
        }
    },
    byTypeBooleanHandler(propsProfile, propsVal){
        let coll = propsProfile.collection;
        return propsVal ? coll[0] : coll[1];
    },
    byTypeValuedStringHandler:function (propsProfile, propsVal) {

    },
    byTypeNotValuedStringHandler:function (propsProfile, propsVal){
        let coll = propsProfile.collection;
        let index = propsProfile.presetValues.indexOf(propsVal);
        return coll[index];
    }
};
export default PropsMapper