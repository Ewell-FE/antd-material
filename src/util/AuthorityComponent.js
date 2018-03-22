/**
 * Created by lilei on 2017/4/12.
 */
import React from 'react'
import _ from 'lodash'

const AuthorityComponent = (AuthComponent, key) => {
    //操作权限抽取出来
    var operats = []
    var makeData = function (data) {
        for (var i = 0; i < data.length; i++) {
            operats.push(data[i])
            if (data[i].operations) {
                if (data[i].operations.length > 0) {
                    makeData(data[i].operations)
                }
            }
        }
    }
    makeData(USERAUTH)
    //权限匹配
    var index = _.findIndex(operats, function (o) {
        return o.permission === key
    });
    //匹配成功
    if (index > -1) {
        if(AuthComponent){
            return (<AuthComponent/>)
        }
        return true
    }
    return false;
}
export default AuthorityComponent
