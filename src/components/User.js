import React,{Component} from 'react';
import { connect} from 'dva';
 class User extends Component{
    render(){
        let {user,dispatch,loading}=this.props;
        console.log("111",loading.effects['user/fetchUser']);
        let data=null;
        if(loading.effects['user/fetchUser']){
            data="loading..."
        }else if(user.error){
            data=user.error;
        }else if(user.user){
            data=user.user;
        }else{
            data="暂无数据";
        }
        return (
            <div>
                User组件<hr/>
                <p>{data}</p>
                <button onClick={()=>dispatch({type:"user/fetchUser"})}>点击获取资源</button>
            </div>
        )
    }
}
const mapStateToProps=state=>({
  user:state.user,
  loading:state.loading
})
export default connect(mapStateToProps)(User);