#  照片墙
## 用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。


````jsx
import Upload from '@/components/Upload'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
export class <%=component%> extends Component {
   state = {
       previewVisible: false,
       previewImage: '',
       fileList: [{
         uid: -1,
         name: 'xxx.png',
         status: 'done',
         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
       }],
     };

     handleCancel = () => this.setState({ previewVisible: false })

     handlePreview = (file) => {
       this.setState({
         previewImage: file.url || file.thumbUrl,
         previewVisible: true,
       });
     }

     handleChange = ({ fileList }) => this.setState({ fileList })

     render() {
       const { previewVisible, previewImage, fileList } = this.state;
       const uploadButton = (
         <div>
           <Icon type="plus" />
           <div className="ant-upload-text">Upload</div>
         </div>
       );
       return (
         <div className="clearfix">
           <Upload
             action="//jsonplaceholder.typicode.com/posts/"
             listType="picture-card"
             fileList={fileList}
             onPreview={this.handlePreview}
             onChange={this.handleChange}
           >
             {fileList.length >= 3 ? null : uploadButton}
           </Upload>
           <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
             <img alt="example" style={{ width: '100%' }} src={previewImage} />
           </Modal>
         </div>
       );
     }
}
````