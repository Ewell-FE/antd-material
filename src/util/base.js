/**
 * Created by lilei on 2017/2/9.
 */

var base = module.exports = {
    user: {},
    Crypto:{},
    moxtra:{},
    NIM: null,
    sources: [],
    resizeFunc: [],
    clearResize: function () {
        while (this.resizeFunc.length > 0) {
            this.resizeFunc.pop()
        }
        while (this.sources.length > 0) {
            this.sources.pop()("中断请求！")
        }
    }
}
window.onload = function () {
    for (let i = 0; i < base.resizeFunc.length; i++) {
        base.resizeFunc[i]()
    }
}
