/**
 * Created by lilei on 2018/3/29.
 */
const fs = require('fs');
const path = require('path');
const _ = require('lodash')
const paths = require('../../config/paths')

const menuList = [
    //General
    {name: "Button", type: "General", sort: 10, desc: '按钮'},
    {name: "Icon", type: "General", sort: 20, desc: '图标'},
    //Layout
    {name: "Grid", type: "Layout", sort: 10, desc: '栅格'},
    {name: "Layout", type: "Layout", sort: 20, desc: '布局'},
    //Navigation
    {name: "Affix", type: "Navigation", sort: 10, desc: '固钉'},
    {name: "Breadcrumb", type: "Navigation", sort: 20, desc: '面包屑'},
    {name: "Dropdown", type: "Navigation", sort: 30, desc: '下拉菜单'},
    {name: "Menu", type: "Navigation", sort: 40, desc: '导航菜单'},
    {name: "Pagination", type: "Navigation", sort: 50, desc: '分页'},
    {name: "Steps", type: "Navigation", sort: 60, desc: '步骤条'},
    //Data Entry
    {name: "AutoComplete", type: "Data Entry", sort: 10, desc: '自动完成'},
    {name: "Cascader", type: "Data Entry", sort: 20, desc: '级联选择'},
    {name: "Checkbox", type: "Data Entry", sort: 30, desc: '多选框'},
    {name: "DatePicker", type: "Data Entry", sort: 40, desc: '日期选择框'},
    {name: "Form", type: "Data Entry", sort: 50, desc: '表单'},
    {name: "Input", type: "Data Entry", sort: 60, desc: '输入框'},
    {name: "InputNumber", type: "Data Entry", sort: 70, desc: '数字输入框'},
    {name: "Mention", type: "Data Entry", sort: 80, desc: '提及'},
    {name: "Rate", type: "Data Entry", sort: 90, desc: '评分'},
    {name: "Radio", type: "Data Entry", sort: 100, desc: '单选框'},
    {name: "Select", type: "Data Entry", sort: 110, desc: '选择器'},
    {name: "Slider", type: "Data Entry", sort: 120, desc: '滑动输入条'},
    {name: "Switch", type: "Data Entry", sort: 130, desc: '开关'},
    {name: "TreeSelect", type: "Data Entry", sort: 140, desc: '树选择'},
    {name: "TimePicker", type: "Data Entry", sort: 150, desc: '时间选择框'},
    {name: "Transfer", type: "Data Entry", sort: 160, desc: '穿梭框'},
    {name: "Upload", type: "Data Entry", sort: 170, desc: '上传'},
    //Data Display
    {name: "Avatar", type: "Data Display", sort: 10, desc: '头像'},
    {name: "Badge", type: "Data Display", sort: 20, desc: '徽标数'},
    {name: "Calendar", type: "Data Display", sort: 30, desc: '日历'},
    {name: "Card", type: "Data Display", sort: 40, desc: '卡片'},
    {name: "Carousel", type: "Data Display", sort: 50, desc: '走马灯'},
    {name: "Collapse", type: "Data Display", sort: 60, desc: '折叠面板'},
    {name: "List", type: "Data Display", sort: 70, desc: '列表'},
    {name: "Popover", type: "Data Display", sort: 80, desc: '气泡卡片'},
    {name: "Tooltip", type: "Data Display", sort: 90, desc: '文字提示'},
    {name: "Table", type: "Data Display", sort: 100, desc: '表格'},
    {name: "Tabs", type: "Data Display", sort: 110, desc: '标签页'},
    {name: "Tag", type: "Data Display", sort: 120, desc: '标签'},
    {name: "Timeline", type: "Data Display", sort: 130, desc: '时间轴'},
    {name: "Tree", type: "Data Display", sort: 140, desc: '树形控件'},
    //Feedback
    {name: "Alert", type: "Feedback", sort: 10, desc: '警告提示'},
    {name: "Modal", type: "Feedback", sort: 20, desc: '对话框'},
    {name: "Message", type: "Feedback", sort: 30, desc: '全局提示'},
    {name: "Notification", type: "Feedback", sort: 40, desc: '通知提醒框'},
    {name: "Progress", type: "Feedback", sort: 50, desc: '进度条'},
    {name: "Popconfirm", type: "Feedback", sort: 60, desc: '气泡确认框'},
    {name: "Spin", type: "Feedback", sort: 70, desc: '加载中'},

    //Other
    {name: "Anchor", type: "Other", sort: 10, desc: '锚点'},
    {name: "BackTop", type: "Other", sort: 20, desc: '回到顶部'},
    {name: "Divider", type: "Other", sort: 30, desc: '分割线'},
    {name: "LocaleProvider", type: "Other", sort: 40, desc: '国际化'}
]

//数组排除选项
function ignore(arr, removes) {
    removes.forEach((item)=> {
        let index = arr.indexOf(item)
        arr.splice(index, 1)
    })
}

//根据组件目录创建菜单数据格式
function createComponents() {
    let files = fs.readdirSync(path.resolve(paths.appSrc, 'components'));
    ignore(files, ['index.js', 'Style'])
    let menuClass = {
        "General": [],
        "Layout": [],
        "Navigation": [],
        "Data Entry": [],
        "Data Display": [],
        "Feedback": [],
        "Other": []
    }
    files.forEach((name)=> {
        let obj = _.find(menuList, function (n) {
            return n.name === name
        })
        if (obj) {
            menuClass[obj.type].push(obj)
        } else {
            menuClass['Other'].push({name: name, type: 'Other', sort: 100, desc: 'New'})
        }
    })
    for (let type in menuClass) {
        menuClass[type] = _.sortBy(menuClass[type], [function (o) {
            return o.sort;
        }]);
    }
    return menuClass
}
//生成静态菜单数据
function createStaticMenu() {
    let menuClass = createComponents()
    //生成数据文件
    fs.writeFileSync(path.join(process.cwd(), 'src/lib/menu.json'),
        JSON.stringify(menuClass, null, 4),
        function (err) {
            if (err) throw err;
            console.log('create data success!');
        });
}
//根据路由生成静态页面
function createRouterPage() {
    let menuClass = createComponents()
    let indexPage = fs.readFileSync(path.join(process.cwd(), 'build/index.html'))
    fs.mkdirSync(path.join(process.cwd(), 'build/material'))
    fs.mkdirSync(path.join(process.cwd(), 'build/material/docs'))
    Object.values(menuClass).forEach((item)=> {
        item.forEach((file)=> {
            fs.writeFileSync(path.join(process.cwd(), 'build/material/docs/' + file.name + '.html'),
                indexPage,
                function (err) {
                    if (err) throw err;
                    console.log('create data success!');
                });
            console.log(file.name + "创建成功！")
        })
    })
}
//根据demo组装成文档
function createDemoApi() {
    let files = fs.readdirSync(path.resolve(paths.appSrc, 'examples'));
    ignore(files, ['Template'])
    files.forEach((file)=> {
        let Buttons = fs.readdirSync(path.resolve(paths.appSrc, 'examples/' + file));
        ignore(Buttons, ['Title.js', 'Api.js', 'index.js'])
        let renderData = Buttons.map((item)=> {
                let demo = fs.readFileSync(path.resolve(paths.appSrc, `examples/${file}/${item}`))
                let demoCoder = demo.toString().split('\r\n')
                return {
                    name: item.slice(0, -3),
                    type: demoCoder.slice(0, 1)[0].split('：')[1],
                    desc: demoCoder.slice(1, 2)[0].split('：')[1],
                    code: new Buffer(demoCoder.slice(2).join('\r\n').replace(/`/g, '\\`').replace(/\$/g, '\\$')
                    )
                }
            }
        )

        let demoTmpl = fs.readFileSync(path.resolve(paths.appMock, 'lib/tmpl/demo.tmpl'))
        var compiled = _.template(demoTmpl.toString());
        let html = compiled({examples: renderData})
        fs.writeFileSync(path.resolve(paths.appSrc, `examples/${file}/index.js`),
            html,
            function (err) {
                if (err) throw err;
                console.log('Examples create success!');
            }
        )
    })

}


//动态添加路由页面
function createExampleRouter() {
    let files = fs.readdirSync(path.join(process.cwd(), 'src/examples'));
    var text = files.map(function (item, i) {
        return `export {default as ${item}} from '@/examples/${item}'`
    })
    text.unshift(`export {default as start} from '../start'`)
    fs.writeFile(path.join(process.cwd(), 'src/routers/authority/examples.js'),
        text.join(';\r\n'),
        function (err) {
            if (err) throw err;
            console.log('create route success!');
        });
}
module.exports = {
    ignore,
    createComponents,
    createExampleRouter,
    createStaticMenu,
    createRouterPage,
    createDemoApi
}
