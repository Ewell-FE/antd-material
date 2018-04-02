//name：基础分页
//desc：页码比较少的基础分页

import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination defaultCurrent={3} total={50}/>
        )
    }
}