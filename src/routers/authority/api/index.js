//查看权限
const menuList = ["Affix", "Alert", "Anchor", "AutoComplete", "Avatar", "BackTop", "Badge", "Breadcrumb", "Button", "Calendar", "Card", "Carousel", "Cascader", "Checkbox", "Collapse", "DatePicker", "Divider", "Dropdown", "Form", "Grid", "Icon", "Input", "InputNumber", "Layout", "List", "LocaleProvider", "Mention", "Menu", "Message", "Modal", "Notification", "Pagination", "Popconfirm", "Popover", "Progress", "Radio", "Rate", "Select", "Slider", "Spin", "Steps", "style", "Switch", "Table", "Tabs", "Tag", "Timeline", "TimePicker", "Tooltip", "Transfer", "Tree", "TreeSelect", "Upload"]
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, {data: menuList});
    });
}
const getData = {
    "development": axios.post('/getComponents'),
    "production": timeout(500)
}
export function getComponents(opts) {
    return getData[process.env.NODE_ENV]
        .then(function (result) {
            return result.data
        })
}

