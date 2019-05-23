import React from 'react';
import Counter from './../components/Counter';
import User from './../components/User';
export default class CounterPage extends React.Component{
    render(){
        return (
            <div>
                CounterPage页面
                <Counter/>
                <hr/>
                <User/> 
            </div>
        )
    }
}