#  点击上传
## 经典款式，用户点击按钮弹出文件选择框。


````jsx
import Upload from 'antd-material/core/Upload'
import Message from 'antd-material/core/Message'
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'
export class <%=component%> extends Component {
   aaa = {
     name: 'file',
     action: '//jsonplaceholder.typicode.com/posts/',
     headers: {
       authorization: 'authorization-text',
     },
     onChange(info) {
       if (info.file.status !== 'uploading') {
         console.log(info.file, info.fileList);
       }
       if (info.file.status === 'done') {
         Message.success(info.file.name+' file uploaded successfully');
       } else if (info.file.status === 'error') {
         Message.error(info.file.name+' file upload failed.');
       }
     },
     multiple:true
   };

    render() {
        return (
            <Upload {...this.aaa}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
        )
    }
}
````