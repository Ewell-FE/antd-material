#  水平排列 默认排列方式
## 水平登录栏，常用在顶部导航栏中。layout="inline"

````jsx
import Form from 'antd-material/core/Form'
import Button from 'antd-material/core/Button'

const roleLength=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class <%=component%> extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form form='roleForm1'
                      className='addclassname'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form1"
                  fields={[{
                      name: "roleName",
                      label: "用户名",
                      required: true,
                      validate:roleLength
                  }, {
                      name: "remark",
                      label: "密码",
                      rows: '5',
                      validate:roleLength
                  }]}>
                    <Button style={{verticalAlign:'top'}} onClick={() => {this.refs.form1.submit()}}>保 存</Button>
                  </Form>

            </div>
        )
    }
}
````