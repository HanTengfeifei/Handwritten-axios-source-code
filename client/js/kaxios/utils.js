 
 export function deepCopy(object){
    let target ;
     if(Array.isArray(object)){
        target=[];
     }
     else{
        target = {};
     }
     for(const item in object){
         if( object.hasOwnProperty(item)&&object[item]!=null&& typeof object[item] === 'object' ){
            target[item] = deepCopy(object[item]);
         }
         else{
            target[item] = object[item]
         }
     }

    return target;
}
 export function mergeConfig(object1,object2){
    let target =deepCopy(object1);
    let source = deepCopy(object2);
    Object.keys(source).reduce((t,k )=> {
        if(['method','url','baseURL'].includes(k)){
            t[k]=source[k];
        }
        if(['headers'].includes(k)){
            t[k]= Object.assign (target[k],source[k])
        }
        return t;
    },target)
    return target;
}
//JSON.parse(JSON.stringify({})); 会有数据丢失 undefined 或者function