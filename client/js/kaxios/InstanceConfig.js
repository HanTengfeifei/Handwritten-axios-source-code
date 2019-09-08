import ajax from './ajax';
export default {
        baseURL:'',
        method:'get',
        url:'',
        headers :{
            htf:'feifei'
        },
    adaptor(configs){
        console.log(typeof window)
        if( typeof window === 'object'){
            return ajax(configs);
        }
        else{
            console.log("nodeHttp");
        }
    },
    transfromData(res){
        return res;
    }
}