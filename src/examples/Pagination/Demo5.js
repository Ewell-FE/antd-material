//name：总数
//desc：通过设置 showTotal 展示总共有多少数据

import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <div>
                <Pagination
                    defaultCurrent={1}
                    total={50}
                    onChange={(page)=>{console.log('当前页:'+page)}}
                    showQuickJumper
                    showTotal={(total)=>(`总共 ${total} 条`)}/>
                <Pagination
                    defaultCurrent={1}
                    total={50}
                    onChange={(page)=>{console.log('当前页:'+page)}}
                    showQuickJumper
                    showTotal={(total,range)=>(`${range[0]}-${range[1]} / ${total} 条`)}/>
            </div>
        )
    }
}