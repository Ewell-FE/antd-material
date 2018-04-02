//name：跳转
//desc：快速跳转到某一页

import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination showQuickJumper defaultCurrent={3} total={500}/>
        )
    }
}