import React from 'react';
import {Card,Button } from 'antd';
import { connect } from 'dva';
 class Counter extends React.Component{
    render(){
        let {counter,dispatch}=this.props;
        return (
            <div>
                <Card title="counter组件">
                <p>{counter.count}</p>
                <Button type="primary" onClick={()=>dispatch({type:"counter/add"})}>+</Button>
               <Button type="" onClick={()=>dispatch({type:"counter/sub"})}>-</Button>
               <hr/>
               <Button type="" onClick={()=>dispatch({type:"counter/fetch"})}>异步加</Button>
               <Button type="" onClick={()=>dispatch({type:"counter/fetchSub"})}>异步减</Button>
                </Card> 
               
            </div>
        )
    }
}
const mapStateToProps=state=>({
    counter:state.counter
})
export default connect(mapStateToProps)(Counter);