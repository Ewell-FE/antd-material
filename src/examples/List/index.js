import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import List from '@/components/List'
import {ListItemMeta} from '@/components/List'
import Avatar from 'material-ui/Avatar';
import Button from '@/components/Button'
import { CircularProgress } from 'material-ui/Progress';
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';



export class Demo2md extends Component {
    dataText=[
            'Ewell Design TitleOnly 1',
            'Ewell Design TitleOnly 2',
            'Ewell Design TitleOnly 3',
            'Ewell Design TitleOnly 4'

        ];
    render() {
        return (
            <div style={{width: '100%'}}>
                <h3 style={{marginBottom: '16px'}}>Small Size</h3>
                <List
                      dataSource={this.dataText}
                      bordered
                      header={<div>header</div>}
                      footer={<div>footer</div>}
                      renderItem={(item,index) => (
                          <ListItemMeta
                              key={index}
                              title={item}
                              size="small" 

                          />
                      )}
                  >
                </List>
                <h3 style={{marginBottom: '16px'}}>Default Size</h3>
                <List
                      dataSource={this.dataText}
                      bordered
                      header={<div>header</div>}
                      footer={<div>footer</div>}
                      renderItem={(item,index) => (
                          <ListItemMeta
                              key={index}
                              title={item}
                          />
                      )}
                  >
                </List>
                <h3 style={{marginBottom: '16px'}}>Large Size</h3>
                <List
                      dataSource={this.dataText}
                      bordered
                      header={<div>header</div>}
                      footer={<div>footer</div>}
                      renderItem={(item,index) => (
                          <ListItemMeta
                              key={index} 
                              title={item}
                              size="large" 
                          />
                      )}
                  >
                </List>
            </div>

        )
    }
}


export class Demo3md extends Component {
    data=[
            {
                title: 'Ewell Design Title 1',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容11111',
                content:'我是内容我是内容我是内容'
            },
            {
                title: 'Ewell Design Title 2',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容22222',
                content:'我是内容我是内容我是内容'

            },
            {
                title: 'Ewell Design Title 3',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容33333',
                content:'我是内容我是内容我是内容'
            },
            {
                title: 'Ewell Design Title 4',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容44444',
                content:'我是内容我是内容我是内容'
            }
        ];
    render() {
        return (
             <List
                  dataSource={this.data}
                  renderItem={(item,index) => (
                      <ListItemMeta
                          key={index}
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.title}
                          description={item.description}
                      />
                  )}
              >
              </List>


        )
    }
}


export class Demo4md extends Component {
        state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
        }
       componentDidMount() {
          this.getData((res) => {
            this.setState({
              loading: false,
              data: res.results,
            });
          });
        }
        getData = (callback) => {
            reqwest({
              url: fakeDataUrl,
              type: 'json',
              method: 'get',
              contentType: 'application/json',
              success: (res) => {
                callback(res);
              },
            });
          }
        onLoadMore = () => {
          this.setState({
            loadingMore: true,
          });
          this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
              data,
              loadingMore: false,
            }, () => {
              window.dispatchEvent(new Event('resize'));
            });
          });
        }
    render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
              <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <CircularProgress />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
              </div>
            ) : null;
        return (
             <List
                  loading={loading}
                  loadMore={loadMore}
                  dataSource={data}
                  renderItem={(item,index) => (
                      <ListItemMeta
                          key={index}
                          actions={[<a>edit</a>, <a>more</a>]}
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          itemLayout="horizontal"
                          title={item.name.last}
                          description="yh Design, a design language for background applications"
                          content={<div>content</div>}
                      />
                  )}
              >
              </List>


        )
    }
}


    export class Demo5md extends Component {  
        render() { 
        const listData = [
            { 
                href: 'http://ant.design',
                 title: 'ant design part 1',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language', 
                content: 'We supply a series of design principles,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 
            },
            { 
                href: 'http://ant.design',
                 title: 'ant design part 2',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language', 
                content: 'We supply a series of design principles,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 
            },
            { 
                href: 'http://ant.design',
                 title: 'ant design part 3',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language', 
                content: 'We supply a series of design principles,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 
            }
        ];
         const pagination = {
           pageSize: 1,
           current: 1,
           total: listData.length,
           onChange: (() => {}),
         };
               return (
                   <List
                        dataSource={listData} 
                        pagination={pagination}
                        renderItem={(item,index) => ( 
                            <ListItemMeta
                                    key={index} 
                                    actions={[<span>156</span>,<span>156</span>,<span>2</span>]} 
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    size="large" 
                                    itemLayout="vertical" 
                                    title={item.title}
                                    description={item.description} 
                                    content={<div>{item.content}</div>} 
                                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}

                                    /> 
                        )} 
                 >
                 </List>
                ) 
            } }


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      简单列表
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     列表拥有大、中、小三种尺寸。
                                </p>
                    <Templete code={`import List from '@/components/List'
import {ListItemMeta} from '@/components/List'

export class Demo2md extends Component {
    dataText=[
            'Ewell Design TitleOnly 1',
            'Ewell Design TitleOnly 2',
            'Ewell Design TitleOnly 3',
            'Ewell Design TitleOnly 4'

        ];
    render() {
        return (
            <div style={{width: '100%'}}>
                <h3 style={{marginBottom: '16px'}}>Small Size</h3>
                <List
                      dataSource={this.dataText}
                      bordered
                      header={<div>header</div>}
                      footer={<div>footer</div>}
                      renderItem={(item,index) => (
                          <ListItemMeta
                              key={index}
                              title={item}
                              size="small" 

                          />
                      )}
                  >
                </List>
                <h3 style={{marginBottom: '16px'}}>Default Size</h3>
                <List
                      dataSource={this.dataText}
                      bordered
                      header={<div>header</div>}
                      footer={<div>footer</div>}
                      renderItem={(item,index) => (
                          <ListItemMeta
                              key={index}
                              title={item}
                          />
                      )}
                  >
                </List>
                <h3 style={{marginBottom: '16px'}}>Large Size</h3>
                <List
                      dataSource={this.dataText}
                      bordered
                      header={<div>header</div>}
                      footer={<div>footer</div>}
                      renderItem={(item,index) => (
                          <ListItemMeta
                              key={index} 
                              title={item}
                              size="large" 
                          />
                      )}
                  >
                </List>
            </div>

        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      基础列表
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     基础列表。
                                </p>
                    <Templete code={`import Avatar from 'material-ui/Avatar';
import List from '@/components/List'
import {ListItemMeta} from '@/components/List'

export class Demo3md extends Component {
    data=[
            {
                title: 'Ewell Design Title 1',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容11111',
                content:'我是内容我是内容我是内容'
            },
            {
                title: 'Ewell Design Title 2',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容22222',
                content:'我是内容我是内容我是内容'

            },
            {
                title: 'Ewell Design Title 3',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容33333',
                content:'我是内容我是内容我是内容'
            },
            {
                title: 'Ewell Design Title 4',
                description:'补充内容补充内容补充内容补充内容补充内容补充内容44444',
                content:'我是内容我是内容我是内容'
            }
        ];
    render() {
        return (
             <List
                  dataSource={this.data}
                  renderItem={(item,index) => (
                      <ListItemMeta
                          key={index}
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.title}
                          description={item.description}
                      />
                  )}
              >
              </List>


        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      加载更多
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     可通过 loadMore 属性实现加载更多功能。
                                </p>
                    <Templete code={`import Avatar from 'material-ui/Avatar';
import List from '@/components/List'
import Button from '@/components/Button'
import { CircularProgress } from 'material-ui/Progress';
import {ListItemMeta} from '@/components/List'
import reqwest from 'reqwest';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export class Demo4md extends Component {
        state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
        }
       componentDidMount() {
          this.getData((res) => {
            this.setState({
              loading: false,
              data: res.results,
            });
          });
        }
        getData = (callback) => {
            reqwest({
              url: fakeDataUrl,
              type: 'json',
              method: 'get',
              contentType: 'application/json',
              success: (res) => {
                callback(res);
              },
            });
          }
        onLoadMore = () => {
          this.setState({
            loadingMore: true,
          });
          this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
              data,
              loadingMore: false,
            }, () => {
              window.dispatchEvent(new Event('resize'));
            });
          });
        }
    render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
              <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <CircularProgress />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
              </div>
            ) : null;
        return (
             <List
                  loading={loading}
                  loadMore={loadMore}
                  dataSource={data}
                  renderItem={(item,index) => (
                      <ListItemMeta
                          key={index}
                          actions={[<a>edit</a>, <a>more</a>]}
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          itemLayout="horizontal"
                          title={item.name.last}
                          description="yh Design, a design language for background applications"
                          content={<div>content</div>}
                      />
                  )}
              >
              </List>


        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      竖排列表样式
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     通过设置 itemLayout 属性为 vertical 可实现竖排列表样式。
                                </p>
                    <Templete code={`import Avatar from 'material-ui/Avatar';
import List from '@/components/List' ;
import {ListItemMeta} from '@/components/List';

    export class Demo5md extends Component {  
        render() { 
        const listData = [
            { 
                href: 'http://ant.design',
                 title: 'ant design part 1',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language', 
                content: 'We supply a series of design principles,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 
            },
            { 
                href: 'http://ant.design',
                 title: 'ant design part 2',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language', 
                content: 'We supply a series of design principles,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 
            },
            { 
                href: 'http://ant.design',
                 title: 'ant design part 3',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language', 
                content: 'We supply a series of design principles,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 
            }
        ];
         const pagination = {
           pageSize: 1,
           current: 1,
           total: listData.length,
           onChange: (() => {}),
         };
               return (
                   <List
                        dataSource={listData} 
                        pagination={pagination}
                        renderItem={(item,index) => ( 
                            <ListItemMeta
                                    key={index} 
                                    actions={[<span>156</span>,<span>156</span>,<span>2</span>]} 
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    size="large" 
                                    itemLayout="vertical" 
                                    title={item.title}
                                    description={item.description} 
                                    content={<div>{item.content}</div>} 
                                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}

                                    /> 
                        )} 
                 >
                 </List>
                ) 
            } }`}>
                        <Demo5md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}