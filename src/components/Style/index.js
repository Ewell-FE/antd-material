import {createMuiTheme} from 'material-ui/styles';
import * as themes from './theme'
import _ from 'lodash'
let useTheme = themes['theme']
export default {
    /**
     * @method  使用哪套皮肤
     * @param {name:皮肤名称,obj:覆盖默认皮肤对象}
     * @returns  Mui包装后的皮肤
     */
    use: function (name = 'theme', obj = {}) {
        let defaultTheme = _.merge(themes[name], obj)
        useTheme = defaultTheme
        return createMuiTheme(defaultTheme)
    },
    theme: useTheme
}