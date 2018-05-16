#  事件
## 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。在 onmouseup 时，会触发 onAfterChange 事件，并把当前值作为参数传入。

````jsx
import Slider from '@/components/Slider'
function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

export class Demo6md extends Component {
    render() {
           return (
               <div>
                 <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
                 <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
               </div>
           );
    }
}
````