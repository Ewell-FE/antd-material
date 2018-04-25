#  垂直排列
## 标题和输入框一行的垂直模式 layout="horizontal"

````jsx
import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength3=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class <%=component%> extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="horizontal" form='roleForm3'
                  initialValues={{}}
                  labelWidth="15%"
                  wrapperWidth="220px"
                  Submit={(values) => this.Submit(values)} ref="form3"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength3
                  }, {
                      name: "remark",
                      label: "描述",
                      type: 'text',
                      rows: '5',
                      validate:roleLength3
                  }]}/>
                  <Button onClick={() => {this.refs.form3.submit()}}>保 存</Button>
            </div>
        )
    }
}
````