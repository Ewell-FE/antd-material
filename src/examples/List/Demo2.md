#  简单列表
## 列表拥有大、中、小三种尺寸。
## 通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
## 可通过设置 header 和 footer，来自定义列表头部和尾部。

````jsx
import List from '@/components/List'
import ListItemMeta from '@/components/List/ListItemMeta'

export class <%=component%> extends Component {
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
````