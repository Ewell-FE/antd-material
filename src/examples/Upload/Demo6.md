#  拖拽上传
## 把文件拖入指定区域，完成上传，同样支持点击上传。设置 multiple 后，在 IE10+ 可以一次上传多个文件。


````jsx
import Upload from 'antd-material/core/Upload'
import Message from 'antd-material/core/Message'
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'
const Dragger = Upload.Dragger;

export class <%=component%> extends Component {
   aaa = {
       name: 'file',
       multiple: true,
       action: '//jsonplaceholder.typicode.com/posts/',
       onChange(info) {
         const status = info.file.status;
         if (status !== 'uploading') {
           console.log(info.file, info.fileList);
         }
         if (status === 'done') {
           Message.success(info.file.name+' file uploaded successfully.');
         } else if (status === 'error') {
           Message.error(info.file.name+' file upload failed.');
         }
       },
   };

    render() {
        return (
             <Dragger {...this.aaa}>
                <p className="yh-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="yh-upload-text">Click or drag file to this area to upload</p>
                <p className="yh-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
              </Dragger>
        )
    }
}
````