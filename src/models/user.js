import axios from 'axios';
export default{
    namespace:"user",
    state:{
        isloading:false,
        error:null,
        user:null
    },
    subscriptions:{
        setup({dispatch,history}){}
    },
    reducers:{
       
                "error"(state,action){
                    return {
                    isloading:false,
                    error:action.error,
                    user:null
                }
            },
            "success"(state,action){
                return {
                isloading:false,
                error:null,
                user:action.data
            }
        }
       
    },
    effects:{
        *fetchUser({payload},{put,call}){
            yield put({type:"loading"})
            try{
                const data=yield call(axios.get,"https://jsonplaceholder.typicode.com/users");
            yield put({type:"success",data:data.data[0].email})
            }catch(e){
                yield put({type:"error",error:e.message})
            }
        }
    }
}