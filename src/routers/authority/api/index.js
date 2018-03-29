//查看权限
const menuList = require('@/lib/menu.json')
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, {data: menuList});
    });
}
const getData = {
    "development": function () {
        return axios.post('/getComponents')
    },
    "production": ()=> {
        return timeout(500)
    }
}
export function getComponents(opts) {
    return getData[process.env.NODE_ENV]()
        .then(function (result) {
            return result.data
        })
}

