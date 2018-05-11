#  事件
## 垂直方向的 Slider。

````jsx
import Slider from '@/components/Slider'

let marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

let style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};
function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

export class Demo7md extends Component {
        constructor(props) {
            super(props);
            this.state = {
              
            };
        }
 

    render() {
                   return (
                     <div style={{ height: 300 }}>
                         <div style={style}>
                           <Slider vertical defaultValue={30} />
                         </div>
                         <div style={style}>
                           <Slider vertical range step={10} defaultValue={[20, 50]} />
                         </div>
                         <div style={style}>
                           <Slider vertical range marks={marks} defaultValue={[26, 37]} />
                         </div>
                       </div>
                   );
                 }
}
````