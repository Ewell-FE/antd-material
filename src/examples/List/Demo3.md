#  基础列表
## 基础列表。


````jsx
import Avatar from '@material-ui/core/Avatar';
import List from '@/components/List'

export class <%=component%> extends Component {
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
                      <List.ItemMeta
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
````