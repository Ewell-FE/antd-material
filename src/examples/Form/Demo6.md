#  Grid模式
## Grid栅格的方式来进行表单布局 layout="grid"

````jsx
import Form from '@/components/Form'
import Button from '@/components/Button'

import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'vertical',
          }
    }
    Submit(values){
        console.log(values)
    }
    onChange(e){
        this.setState({value:e.target.value});
        console.log(e.target.value)
    }


    render() {
        const plainOptions = ['Apple', 'Pear', 'Orange'];
        const plainOptions2=[
                      { label: 'Apple', value: 'Apple' },
                      { label: 'Pear', value: 'Pear' },
                      { label: 'Orange', value: 'Orange', disabled: true },
                    ];
        const csOptions = [{
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [{
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [{
                      value: 'xihu',
                      label: 'West Lake',
                    }],
                  }],
                }, {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  disabled: true,
                  children: [{
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [{
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    }],
                  }],
                }, {
                   value: 'fujian',
                   label: 'fujian',
                   children: [{
                     value: 'xiamen',
                     label: 'xiamen',
                     children: [{
                       value: 'gulanyu',
                       label: 'Gu Lan Yu',
                     }],
                   }],
                 }];
        let marksT = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            45:'45°C',
            100: {
                style: {
                    color: '#f50',
                },
                label: <strong>100°C</strong>,
            },
        }
        return (
            <div>
                    <RadioGroup onChange={(e)=>this.onChange(e)}  defaultValue="vertical">
                         <RadioButton  value="vertical">vertical</RadioButton>
                         <RadioButton  value="horizontal">horizontal</RadioButton>
                         <RadioButton  value="inline">inline</RadioButton>
                         <RadioButton  value="grid">grid</RadioButton>
                    </RadioGroup>
                    <br/>
                    <br/>
                    <Form layout={this.state.value} form='roleForm6'
                       initialValues={{
                       remark2:true,
                       remark3:["Apple"],
                       remark4:["Pear"],
                       radio2:"Pear",
                       radio3:"Apple",
                       rate:2.5,
                       slider:30,
                       slider2:[20,50],
                       slider3:37
                       }}
                       labelWidth="25%"
                       wrapperWidth="75%"
                       Submit={(values) => {this.Submit(values)}} ref="form6"
                       fields={[{
                           span:6,
                           name: "roleName",
                           label: "角色名",
                           required: true,
                       },{
                          span:6,
                          name: "cascader",
                          label: "级联下拉",
                          type: 'cascader',
                          options:csOptions,
                          changeOnSelect:true,
                          required: true,
                          showSearch:true
                     },{
                           span:6,
                           name: "remark2",
                           label: "复选",
                           type: 'check',

                       },{
                           span:6,
                           name: "switch",
                           label: "开关",
                           type: 'switch',
                           size:"small"

                       },{
                           span:6,
                           name: "remark3",
                           label: "复选组",
                           type: 'checkgroup',
                           options:plainOptions,
                           required: true,
                       }, {
                            span:6,
                            name: "remark4",
                            label: "复选组2",
                            type: 'checkgroup',
                            options:plainOptions2,
                            required: true,
                       }, {
                             span:6,
                             name: "radio",
                             label: "单选",
                             type: 'radio',
                             value:'aaa',
                             required: true,
                         },{
                              span:6,
                              name: "radio2",
                              label: "单选组",
                              type: 'radiogroup',
                              options:plainOptions2,
                              required: true,
                         },{
                                span:6,
                                name: "radio3",
                                label: "单选组2",
                                type: 'radiobutton',
                                options:plainOptions2,
                                required: true,
                           },{
                                span:6,
                                name: "rate",
                                label: "评分",
                                type: 'rate',
                                allowHalf:true,
                                count:7,
                                style:{fontSize:'22px'},
                                required: true,
                           },{
                               span:6,
                               name: "slider",
                               label: "滑动",
                               type: 'slider',
                               required: true,

                           },{
                               span:6,
                               name: "slider2",
                               label: "滑动2",
                               type: 'slider',
                               range:true,
                               required: true,

                           },{
                               span:6,
                               name: "slider3",
                               label: "滑动3",
                               type: 'slider',
                               marks:marksT,
                               step:10,
                               required: true,
                           }]}>

                       </Form>

                    <Button onClick={() => {this.refs.form6.submit() }}>保 存</Button>
            </div>
        )
    }
}
````