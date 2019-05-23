import {delay} from 'dva/saga';
export default {
    namespace:"counter",
    state:{count:1},
    subscriptions:{
        sutup({dispatch,history}){

        }
    },
    reducers:{
        add(state,action){
            return {count:state.count+1}
        },
        sub(state,action){
            return {count:state.count-1}
        }
    },
    effects:{
        *fetch({payload},{call,put}){
            yield call(delay,1000);
            yield put({type:"add"})
        },
        *fetchSub({payload},{call,put}){
            yield call(delay,2000);
            yield put({type:"sub"});
        }
    }
}