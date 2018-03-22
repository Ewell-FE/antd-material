/**
 * Created by lilei on 2017/11/29.
 */
var Mock = require('mockjs')
let template = {
    'data|1-6': [{
        'SystemPath|1-3': 'sss',
        'SystemName|1-5': '系统',
        'CreateTime': '@DATE',
        'SystemInterface|1-5': '系统',
        'Id|1-200': 1,
        'SystemNo|11-16': 1
    }
    ],
    'iTotalRecords|1-10':1,
    'iTotalDisplayRecords|1-10':1,
    'httpCode':200,
    'timestamp':1516786374843
};
let template1 = {
    'data|1-6': [{
        'AliasNo|1-4': 1,
        'CreateTime': "sss",
        'Id|1-2000': 1,
        'MenuFid|1-2000': 1,
        'MenuName': "重置密码",
        'MenuNo|1-200': 1,
        'MenuPath': "",
        'MenuSystemNo|11-16': 1,
    }
    ],
    'iTotalRecords|1-10':1,
    'iTotalDisplayRecords|1-10':1,
    'httpCode':200,
    'timestamp':1516786374843
}
module.exports = {
    "api/login": {
        type: 'POST',
        info: '登录',
        result: function (params) {
            return {
                token:'123321123123123',
                userNo:55,
                account:'admin'
                // errorCode:2,
                // msg:'error'
            }
        }
    },
    "system/getSystemListByUser": {
        type: 'POST',
        info: '系统列表',
        result:Mock.mock(template)
    },
    "data/getDatRoleByUserNoSystemNo": {
        type: 'POST',
        info: '系统列表',
        result:function(params){
            return {
                DataId:1
            }
        }
    },
    "logout": {
        type: 'POST',
        info: '退出',
        result:function(params){
            return {
                logoutStatus:1
            }
        }
    },
    "menu/getMenuListByLoginName": {
        type: 'POST',
        info: '权限',
        result:Mock.mock(template1)
    },
}