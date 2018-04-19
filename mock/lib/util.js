/**
 * Created by lilei on 2018/3/29.
 */
const fs = require('fs');
const path = require('path');
const _ = require('lodash')
const paths = require('../../config/paths')
const chalk = require('chalk');

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
//按行截取文本片段
function cutText(str, start, end) {
    var lines = str.toString().split('\n')
    var startIndex = 0
    var endIndex = lines.length;
    lines.forEach(function (line, i) {
        if (line.indexOf(start) >= 0) {
            startIndex = i
        }
        if (line.indexOf(end) >= 0) {
            endIndex = i
        }
    })
    if (endIndex < lines.length) {
        lines.splice(endIndex, 1)
    }
    if (startIndex > 0) {
        lines.splice(startIndex, 1)
    }
    return lines.slice(startIndex, endIndex).join('\n').replace(/`/g, '\`').replace(/\$/g, '\\$')
}
//根据前缀获取行前缀后的值
function cutStrByStart(str, start) {
    var lines = str.toString().split('\n')
    var value = ""
    for (let i = 0; i < lines.length; i++) {
        if (_.startsWith(_.trim(lines[i]), start)) {
            value = _.trimStart(lines[i], start);
            break;
        }
    }
    return value
}
//切割react代码，区分开来import和render

function cutJsx(render, imports, consts) {
    var lines = render.toString().split('\n')
    var component = []
    let isFunctionJsx = 0//react 生命周期外部方法
    let isReact = 0 //react 生命周期
    for (let i = 0; i < lines.length; i++) {
        if (_.startsWith(_.trim(lines[i]), 'import')) {
            let arrs = lines[i].split('')
            if (arrs.indexOf(';') > -1) {
                arrs.splice(arrs.indexOf(';'), 1)
            }
            imports = _.uniqBy(imports.concat(arrs.join('')), _.camelCase);
        } else if (_.startsWith(_.trim(lines[i]), 'const ') && isReact <= 0) {
            if (lines[i].indexOf('function') > -1 || lines[i].indexOf('=>') > -1) {
                consts.push(lines[i])
                if (lines[i].indexOf('}') === -1) {
                    isFunctionJsx = 1
                }
            } else {
                //如果是变量则过滤重复
                var hasLine = consts.filter(function (line) {
                    return _.camelCase(line) === _.camelCase(lines[i])
                })
                if (hasLine.length <= 0) {
                    consts.push(lines[i])
                }
            }
        } else if (isFunctionJsx > 0) {
            if (lines[i].indexOf('{') > -1) {
                isFunctionJsx++
            }
            if (lines[i].indexOf('}') > -1) {
                isFunctionJsx--
            }
            consts.push(lines[i])
        } else if (_.startsWith(_.trim(lines[i]), 'export')) {
            isReact = 1
            component.push(lines[i])
        } else if (isReact > 0) {
            if (lines[i].indexOf('{') > -1) {
                isReact++
            }
            if (lines[i].indexOf('}') > -1) {
                isReact--
            }
            component.push(lines[i])
        } else {
            component.push(lines[i])
        }
    }
    return {
        imports: imports,
        consts: consts,
        component: component
    }
}
//imports 相同引用不同参数的引用问题
function ignoreImports(imps) {
    let temp = {}
    let newImports = []
    imps.forEach(function (item) {
        let strs = item.split(' ')
        let start = item.split('').indexOf('{')
        let end = item.split('').indexOf('}')
        if (start > -1 && end > -1) {
            temp[strs[strs.length - 1]] = temp[strs[strs.length - 1]] || {requires: [], children: []}
            temp[strs[strs.length - 1]].children = _.uniqBy(temp[strs[strs.length - 1]].children.concat(item.slice(start + 1, end).split(',')))
            temp[strs[strs.length - 1]].requires = _.remove(item.slice(7, start).split(','))

        } else {
            temp[strs[strs.length - 1]] = item
        }
    })
    for (let obj in temp) {
        if (_.isObject(temp[obj])) {
            newImports.push('import ' + temp[obj].requires + '{' + temp[obj].children + '} from ' + obj)
        } else {
            newImports.push(temp[obj])
        }
    }
    return newImports
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
            console.log(chalk.blue('Create Data Success!'))
        });
}

//根据路由生成静态页面
function createRouterPage() {
    let menuClass = createComponents()
    let indexPage = fs.readFileSync(path.join(process.cwd(), 'build/index.html'))
    try {
        fs.accessSync(path.join(process.cwd(), 'build/material'), fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        fs.mkdirSync(path.join(process.cwd(), 'build/material'))
    }
    try {
        fs.accessSync(path.join(process.cwd(), 'build/material/docs'), fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        fs.mkdirSync(path.join(process.cwd(), 'build/material/docs'))
    }
    Object.values(menuClass).forEach((item)=> {
        item.forEach((file)=> {
            fs.writeFileSync(path.join(process.cwd(), 'build/material/docs/' + file.name + '.html'), indexPage)
            console.log(chalk.green(file.name + "创建成功！"))
        })
    })

    //把打包后的文件移动指定位置
    let sourceFile = path.join(process.cwd(),'build/');
    let destPath = path.join(process.cwd(),'build/material/');
    fs.readdir(sourceFile,function(err,files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            if(file !== 'material' && file !== 'index.html'){
                fs.rename(path.join(sourceFile,file), path.join(destPath,file), function (err) {
                    if (err) throw err;
                    console.log(chalk.green(file + "移动成功！"))
                });
            }
        });
    });
}

//根据demo组装成文档
function createDemoApi() {
    let files = fs.readdirSync(path.resolve(paths.appSrc, 'examples'));
    ignore(files, ['Template'])
    files.forEach((file)=> {
        let Buttons = fs.readdirSync(path.resolve(paths.appSrc, 'examples/' + file));
        ignore(Buttons, ['Title.js', 'Api.js', 'index.js'])
        let imports = [
            `import Typography from 'material-ui/Typography'`,
            `import Api from './Api'`,
            `import Title from './Title'`,
            `import Templete from '../Template'`]
        let constsArr = []
        let renderData = Buttons.map((item)=> {
                let demo = fs.readFileSync(path.resolve(paths.appSrc, `examples/${file}/${item}`))
                var reacter = _.template(demo);
                let DomeJsx = reacter({component: _.capitalize(_.camelCase(item))})
                let demoCoder = cutText(DomeJsx, '````jsx', '````')
                let renderObj = cutJsx(demoCoder, imports, constsArr)
                imports = renderObj.imports
                constsArr = renderObj.consts
                return {
                    name: _.capitalize(_.camelCase(item)),
                    component: renderObj.component.join('\n'),
                    type: cutStrByStart(DomeJsx, "#"),
                    desc: cutStrByStart(DomeJsx, "##"),
                    code: new Buffer(demoCoder)
                }
            }
        )

        let demoTmpl = fs.readFileSync(path.resolve(paths.appMock, 'lib/tmpl/demo.tmpl'))
        var compiled = _.template(demoTmpl.toString());
        let html = compiled({examples: renderData, imports: ignoreImports(imports), consts: constsArr})
        fs.writeFileSync(path.resolve(paths.appSrc, `examples/${file}/index.js`),
            html
        )
    })
    console.log(chalk.blue('Examples Create Success!'))
}


//动态添加路由页面
function createExampleRouter() {
    let files = fs.readdirSync(path.join(process.cwd(), 'src/examples'));
    var text = files.map(function (item, i) {
        return `export {default as ${item}} from '@/examples/${item}'`
    })
    text.unshift(`export {default as start} from '../start'`)
    fs.writeFile(path.join(process.cwd(), 'src/routers/authority/examples.js'),
        text.join(';\n'),
        function (err) {
            if (err) throw err;
            console.log(chalk.green('Create Route Success!'))
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
