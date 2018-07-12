#  图片列表样式
## 上传文件为图片，可展示本地缩略图。IE8/9 不支持浏览器本地缩略图展示（Ref），可以写 thumbUrl 属性来代替


````jsx
import Upload from 'antd-material/core/Upload'
import Message from 'antd-material/core/Message'
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'
export class <%=component%> extends Component {
   fileList = [{
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
    aaa = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      defaultFileList: [...this.fileList],
    };
    aaa2 = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      defaultFileList: [...this.fileList],
      className: 'upload-list-inline',
    };
    render() {
        return (
            <div style={{marginBottom:'150px'}}>
                <Upload {...this.aaa}>
                  <Button>
                    <Icon type="upload" /> upload
                  </Button>
                </Upload>
                <br />
                <br />
                <Upload {...this.aaa2}>
                  <Button>
                    <Icon type="upload" /> upload
                  </Button>
                </Upload>
              </div>
        )
    }
}
````