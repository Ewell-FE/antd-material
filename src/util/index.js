import _ from 'lodash'
//生成唯一 uuid
export function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
//格式化后台数据
export function formateTreeData(menuBeans, options) {
    let array = [];
    let defaultOptions = {
        checked: true
    }
    Object.assign(defaultOptions, options)

    function _getChilds(data) {
        let items = {
            id: data.id,
            pId: data.parentId,
            name: data.menuName,
            open: true,
            checked: defaultOptions.checked
        }

        if(_.findIndex(menuBeans, function(item) { return item.id === data.id }) >= 0){
            array.push({...items,font:{'color':'#333'}});
        }else{
            array.push({...items});
        }
        if (data.operations && data.operations.length !== 0) {
            let parentId = data.id + 'o'
            array.push({
                id: parentId,
                pId: data.id,
                name: '操作权限',
                flag: 'fakeParent',
                open: true,
                checked: defaultOptions.checked,
            })
            data.operations.forEach((item) => {
                array.push({
                    id: item.id,
                    pId: parentId,
                    truePid: item.menuId,
                    name: item.operationCodeText,
                    code: item.operationCode,
                    open: true,
                    checked: defaultOptions.checked,
                    font:{'color':"rgba(0,0,0,0.50)"}
                });
            })
        }
        if (data.dataRolesUrl && data.dataRolesUrl.length !== 0) {
            let parentRoleId = data.id + 'r'
            array.push({
                id: parentRoleId,
                pId: data.id,
                name: '数据权限',
                flag: 'fakeParent',
                open: true,
                checked: defaultOptions.checked
            })
            data.dataRolesUrl.forEach((item, i) => {
                array.push({
                    id: item.paramId,
                    paramKey: item.key,
                    pId: parentRoleId,
                    truePid: data.id,
                    name: item.name + '(' + item.key + ')',
                    trueName: item.name,
                    open: true,
                    checked: defaultOptions.checked,
                    font:{'color':"rgba(0,0,0,0.50)"}
                });
            })
        }
        if (data.menuBeans.length !== 0) {
            getChilds(data.menuBeans)
        }
    }

    function getChilds(items) {
        for (var i = 0; i < items.length; i++) {
            _getChilds(items[i])
        }
        return array;
    }


    let keys = []
    let arr = []
    menuBeans.forEach((item) => {
        array = []
        keys.push(item.menuName)
        arr.push([...getChilds([item])])
    });
    return {
        keys,
        arr
    };
}

//根据索引，修改菜单选中后的数据
export function updateMenuChecked(oldData, index, changedData) {
    changedData.forEach((item, i) => {
        let Num = _.findIndex(oldData.arr[index], function (t) {
            return t.id === item.id
        })
        if (Num >= 0) {
            oldData.arr[index][Num].checked = item.checked
        }
    })
    return oldData
}

//根据角色权限树，在整个权限树上勾选checked
export function checkedRoles(checked, all) {
    var oldData = formateTreeData(all, {checked: false})
    var checkedData = formateTreeData(checked, {checked: true})
    checked.forEach((item, i) => {
        let Num = _.findIndex(all, function (t) {
            return t.id === item.id
        })
        oldData = updateMenuChecked(oldData, Num, checkedData.arr[i])
    })
    return oldData
}