 import {deepCopy,mergeConfig} from './utils';
 import InterceptorsManager from './interceptorManager';
//  import defaultConfig from './InstanceConfig';
class Kaxios {
    constructor(config){
        this.defaults = deepCopy(config);
        this.interceptors = {
            request: new InterceptorsManager(),
            response: new InterceptorsManager(),
        }

    }

    get(url,config){
        let configs = mergeConfig(this.defaults, config);
        configs.url = url;
        let promise = Promise.resolve(configs);
          this.interceptors.request.handlers.forEach((handler) => { 
                promise = promise.then(
                    handler.resolveHandler,
                    handler.rejectHandler
                ) 
          })
          promise = promise.then(this.dispatch,null);
          this.interceptors.response.handlers.forEach((handler) => { 
            promise = promise.then(
                handler.resolveHandler,
                handler.rejectHandler
            ) 
      })

        return promise;
    }
    dispatch(configs){
        let adaptor = configs.adaptor(configs);
       return  adaptor;
    }

}

export default Kaxios;