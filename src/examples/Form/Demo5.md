#  支持的表单元素
## 设计过多元素排版默认使用垂直排列方式，或者自己自定义排版

````jsx
import Form from '@/components/Form'
import Button from '@/components/Button'


export class <%=component%> extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:  null
        }
    }

    Submit(values){
        console.log(values)
    }

    handleChange = (selectedOption) => {
         this.setState({
            value:selectedOption.value
         })
    }

    render() {
        return (
            <div>
               <Form layout="horizontal" form='roleForm5'
                         initialValues={{}}
                         labelWidth="15%"
                         wrapperWidth="85%"
                         Submit={(values) => this.Submit(values)} ref="form5"
                         fields={[{
                                name:'one',
                                label: "输入框",
                            },{
                                type:'select',
                                name:'two',
                                label: "下拉框",
                                placeholder:'请选择',
                                options:[
                                      { value: 'bj', label: '北京' },
                                      { value: 'sh', label: '上海' },
                                      { value: 'hz', label: '杭州' },
                                      { value: 'zz', label: '郑州' },
                                ]
                            },{
                                 type:'select',
                                 name:'three',
                                 label: "多选下拉框",
                                 placeholder:'请选择',
                                 multi:true,
                                 options:[
                                       { value: 'bj', label: '北京' },
                                       { value: 'sh', label: '上海' },
                                       { value: 'hz', label: '杭州' },
                                       { value: 'zz', label: '郑州' },
                                 ]
                             },{
                                     type:'inputnumber',
                                     name:'four',
                                     label: "数字输入框",
                             },{
                                 type:'datepicker',
                                 name:'fire',
                                 label: "日期",
                             }
                         ]}
               >
                    <Button style={{verticalAlign:'top'}} onClick={() => {this.refs.form5.submit()}}>保 存</Button>
               </Form>

            </div>
        )
    }
}
````