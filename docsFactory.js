var util = require('./mock/lib/util')

const path = require('path');
const fs = require('fs');

var sourceFile = path.join(process.cwd(),'build/');
var destPath = path.join(process.cwd(),'build/material/');

//把打包后的文件移动指定位置
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

util.createRouterPage()
