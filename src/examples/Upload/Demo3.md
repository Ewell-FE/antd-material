#  已上传的文件列表
## 使用 defaultFileList 设置已上传的内容。


````jsx
import Upload from 'antd-material/core/Upload'
import Message from 'antd-material/core/Message'
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'
export class <%=component%> extends Component {
   aaa = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
      defaultFileList: [{
        uid: 1,
        name: 'xxx.png',
        status: 'done',
        reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      }, {
        uid: 2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      }, {
        uid: 3,
        name: 'zzz.png',
        status: 'error',
        reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      }],
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