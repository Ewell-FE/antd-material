#  手动上传
## beforeUpload 返回 false 后，手动上传文件。


````jsx
import Upload from '@/components/Upload'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import reqwest from 'reqwest';
import Message from '@/components/Message'

export class <%=component%> extends Component {
    state = {
       fileList: [],
       uploading: false,
     }

     handleUpload = () => {
       const { fileList } = this.state;
       const formData = new FormData();
       fileList.forEach((file) => {
         formData.append('files[]', file);
       });

       this.setState({
         uploading: true,
       });

       // You can use any AJAX library you like
       reqwest({
         url: '//jsonplaceholder.typicode.com/posts/',
         method: 'post',
         processData: false,
         data: formData,
         success: () => {
           this.setState({
             fileList: [],
             uploading: false,
           });
           Message.success('upload successfully.');
         },
         error: () => {
           this.setState({
             uploading: false,
           });
           Message.error('upload failed.');
         },
       });
     }

     render() {
       const { uploading } = this.state;
       const props = {
         action: '//jsonplaceholder.typicode.com/posts/',
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
         fileList: this.state.fileList,
       };

       return (
         <div>
           <Upload {...props}>
             <Button>
               <Icon type="upload" /> Select File
             </Button>
           </Upload>
           <Button
             className="upload-demo-start"
             type="Primary"
             onClick={this.handleUpload}
             disabled={this.state.fileList.length === 0}
             loading={uploading}
           >
             {uploading ? 'Uploading' : 'Start Upload' }
           </Button>
         </div>
       );
     }
}
````