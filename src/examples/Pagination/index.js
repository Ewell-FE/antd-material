import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Pagination from '@/components/Pagination'




export class Demo1md extends Component {
    render() {
        return (
            <Pagination defaultCurrent={3} total={50} />
        )
    }
}


export class Demo2md extends Component {
    render() {
        return (
            <Pagination defaultCurrent={10} total={500} />
        )
    }
}


export class Demo3md extends Component {
    render() {
        return (
            <Pagination
                showSizeChanger
                onShowSizeChange={(current,pageSize)=>{console.log(current,pageSize)}}
                defaultCurrent={10}
                total={500} />
        )
    }
}


export class Demo4md extends Component {
    render() {
        return (
            <Pagination
                showQuickJumper
                onChange={(page)=>{console.log('page:'+page)}}
                defaultCurrent={10}
                total={500}
            />
        )
    }
}


export class Demo5md extends Component {
    render() {
        return (
            <div>
                <Pagination
                    total={85}
                    showTotal={total => ('总共'+total+'条')}
                    pageSize={20}
                    defaultCurrent={1}
                />
                <Pagination
                    total={85}
                    showTotal={(total, range) => (range[0]+' - '+range[1]+' / '+total +' 条')}
                    pageSize={20}
                    defaultCurrent={1}
                />
            </div>

        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      基本
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     页码比较少的情况的分页。
                                </p>
                    <Templete code={`import Pagination from '@/components/Pagination'

export class Demo1md extends Component {
    render() {
        return (
            <Pagination defaultCurrent={3} total={50} />
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      更多
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     页码比较多的情况的分页。
                                </p>
                    <Templete code={`import Pagination from '@/components/Pagination'

export class Demo2md extends Component {
    render() {
        return (
            <Pagination defaultCurrent={10} total={500} />
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      改变
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     改变每页显示条目数。
                                </p>
                    <Templete code={`import Pagination from '@/components/Pagination'

export class Demo3md extends Component {
    render() {
        return (
            <Pagination
                showSizeChanger
                onShowSizeChange={(current,pageSize)=>{console.log(current,pageSize)}}
                defaultCurrent={10}
                total={500} />
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      跳转
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     快速跳转到某一页。
                                </p>
                    <Templete code={`import Pagination from '@/components/Pagination'

export class Demo4md extends Component {
    render() {
        return (
            <Pagination
                showQuickJumper
                onChange={(page)=>{console.log('page:'+page)}}
                defaultCurrent={10}
                total={500}
            />
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      总数
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     通过设置 showTotal 展示总共有多少数据。
                                </p>
                    <Templete code={`import Pagination from '@/components/Pagination'

export class Demo5md extends Component {
    render() {
        return (
            <div>
                <Pagination
                    total={85}
                    showTotal={total => ('总共'+total+'条')}
                    pageSize={20}
                    defaultCurrent={1}
                />
                <Pagination
                    total={85}
                    showTotal={(total, range) => (range[0]+' - '+range[1]+' / '+total +' 条')}
                    pageSize={20}
                    defaultCurrent={1}
                />
            </div>

        )
    }
}`}>
                        <Demo5md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}