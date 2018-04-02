//name：改变
//desc：改变每页显示条目数

import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination showSizeChanger defaultCurrent={3} total={500}/>
        )
    }
}