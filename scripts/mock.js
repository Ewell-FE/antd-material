var express = require('express');
var cors = require('cors')
var app = express();
var mocks = require("../mock")
var gulp = require("gulp");
var path = require("path");
var pug = require("pug")
var fs = require('fs')
var util = require('../mock/lib/util')
const pkg = require('../package.json')
app.use(cors({
    credentials: true,
    origin: function (origin, cb) {
        cb(null, origin);
    }
}));

app.set('view engine', 'pug');
app.set('views', 'mock/view');
app.use(express.static('mock/public'));
app.use(express.urlencoded({extended: true}));

//文档查看页面
app.get('/', (req, res, next) => {
    let interfaces = {}
    for (let key in mocks) {
        interfaces[key] = Object.assign({}, mocks[key])
        if (typeof interfaces[key].result == "function") {
            interfaces[key].result = interfaces[key].result(req.body);
        }
    }
    res.render("index", {list: interfaces})
});

//接口返回模拟数据
app.all(pkg.root + '/*', (req, res, next) => {
    var data = mocks[req.params[0]].result
    if (typeof data == "function") {
        data = data(req.body)
    }
    res.json(data)
});
//动态生成例子路由
util.createExampleRouter()
//动态组装代码文档
util.createDemoApi()


app.listen(8000);