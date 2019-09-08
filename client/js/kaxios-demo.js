import  kaxios  from  './kaxios'

console.log(kaxios);
// kaxios.defaults.adaptor = (configs) => {
// }

kaxios.interceptors.request.use((configs)=>{
   console.log(1);
   return configs;
},() => {
    console.log("request err",1)
})
kaxios.interceptors.request.use((configs)=>{
    console.log(2);
    return configs;
 },() => {
     console.log("request err",2)
 })
 kaxios.interceptors.response.use((res)=>{
    console.log(3 , res.data);
    return res.data;
 },() => {
     console.log("responses err",3)
 })


 kaxios.get('/',{
    method:'get',
    baseURL:'http://localhost:9999',
    url:'',
    headers:{
        htf:'htf',
    }
})

.then(res => {
   console.log('kaxios-res', res);
})