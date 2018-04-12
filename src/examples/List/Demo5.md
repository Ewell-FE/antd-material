#  竖排列表样式
## 通过设置 itemLayout 属性为 vertical 可实现竖排列表样式。


````jsx
import Avatar from 'material-ui/Avatar';
import List from '@/components/List' ;
import {ListItemMeta} from '@/components/List';

    export class <%=component%> extends Component {  
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
````