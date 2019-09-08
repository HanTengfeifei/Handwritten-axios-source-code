import defaultConfig from './InstanceConfig';
export default function ajax(configs){
    return  new Promise((resolve ,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            resolve({
               statusCode: xhr.statusCode,
               statusText: xhr.statusText,
               data: defaultConfig.transfromData(xhr.responseText)
            });
        }
        xhr.open( 'get', configs.baseURL+configs.url , true);
        xhr.send({data:'data'});

    })

}