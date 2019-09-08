export default class InterceptorsManager{
    constructor(){
        this.handlers=[];
    }
    use(resolveHandler,rejectHandler){
        this.handlers.push({
            resolveHandler,
            rejectHandler,
        })
    }

}