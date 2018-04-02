//name：更多分页
//desc：页码比较多的更多分页

import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination defaultCurrent={3} total={500}/>
        )
    }
}