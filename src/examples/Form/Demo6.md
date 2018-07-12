#  Grid模式
## Grid栅格的方式来进行表单布局 layout="grid"

````jsx
import Form from 'antd-material/core/Form'
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'
import Modal from 'antd-material/core/Modal'
import Radio from 'antd-material/core/Radio'
import Message from 'antd-material/core/Message'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'vertical',
            fileList: [],
            previewVisible: false,
            previewImage: '',
            fileList2: [],
          }
    }
    Submit(values){
        console.log(values)
    }
    onChange(e){
        this.setState({value:e.target.value});
        console.log(e.target.value)
    }
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
       this.setState({
         previewImage: file.url || file.thumbUrl,
         previewVisible: true,
       });
    }

    handleChange = ({ fileList }) =>{this.setState({ fileList2:fileList })}

    render() {
        const {previewVisible, previewImage, fileList2}=this.state;
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
        const uploadButton = (
                 <div>
                   <Icon type="plus" />
                   <div className="ant-upload-text">Upload</div>
                 </div>
               );
        const uploadButton2=(
                <Button>
                    <Icon type="upload" /> Click to Upload
                </Button>
        );
       const fileArr = [{
             uid: -1,
             name: 'xxx.png',
             status: 'done',
             url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
             thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
           }, {
             uid: -2,
             name: 'yyy.png',
             status: 'done',
             url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
             thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
           }];
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
                       slider3:37,
                       dragger:fileArr,
                       upload:fileArr,
                       upload3:fileArr
                       }}
                       labelWidth="90px"
                       wrapperWidth="calc(100% - 90px)"
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
                           },{
                               span:12,
                               name: "dragger",
                               label: "拖曳上传",
                               type: 'dragger',
                               multiple: true,
                               action: '//jsonplaceholder.typicode.com/posts/',
                               required: true,
                               onRemove: (file) => {
                                  this.setState(({ fileList }) => {
                                    const index = fileList.indexOf(file);
                                    const newFileList = fileList.slice();
                                    newFileList.splice(index, 1);
                                    return {
                                      fileList: newFileList,
                                    };
                                  });
                                },
                                beforeUpload: (file) => {
                                  this.setState(({ fileList }) => ({
                                    fileList: [...fileList, file],
                                  }));
                                  return false;
                                },
                           },{
                                span:12,
                                name: "upload",
                                label: "上传",
                                type: 'upload',
                                multiple: true,
                                action: '//jsonplaceholder.typicode.com/posts/',
                                listType:"picture-card",
                                fileList:fileList2,
                                onPreview:this.handlePreview,
                                formChange:this.handleChange,
                                button: uploadButton,
                                childNum:3,
                                required: true,
                            },{
                                 span:12,
                                 name: "upload2",
                                 label: "上传2",
                                 type: 'upload',
                                 multiple: true,
                                 action: '//jsonplaceholder.typicode.com/posts/',
                                 headers: {
                                        authorization: 'authorization-text',
                                      },
                                 button: uploadButton2,
                                 formChange(info) {
                                        if (info.file.status !== 'uploading') {
                                          console.log(info.file, info.fileList);
                                        }
                                        if (info.file.status === 'done') {
                                          Message.success(info.file.name+' file uploaded successfully');
                                        } else if (info.file.status === 'error') {
                                          Message.error(info.file.name+' file upload failed.');
                                        }
                                      },
                                 required: true,
                             },{
                                   span:12,
                                   name: "upload3",
                                   label: "上传3",
                                   type: 'upload',
                                   multiple: true,
                                   action: '//jsonplaceholder.typicode.com/posts/',
                                   listType: 'picture',
                                   button: uploadButton2,
                                   required: true,
                               }]}>

                       </Form>

                    <Button onClick={() => {this.refs.form6.submit() }}>保 存</Button>
                    <Modal visible={previewVisible} header={null} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
            </div>
        )
    }
}
````