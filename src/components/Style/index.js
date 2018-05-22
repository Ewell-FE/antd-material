import {createMuiTheme} from '@material-ui/core/styles';
import * as themes from './theme'
import _ from 'lodash'


function themeFunc() {
    this.theme = themes['theme']()
}
/**
 * @method  使用哪套皮肤
 * @param {name:皮肤名称,obj:覆盖默认皮肤对象}
 * @returns  Mui包装后的皮肤
 */
themeFunc.prototype.use = function (name = 'theme', obj = {}, override) {
    let defaultTheme = _.merge(themes[name](override), obj)
    this.theme = createMuiTheme(defaultTheme)
    return this.theme
}

export default new themeFunc()