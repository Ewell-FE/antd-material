/**
 * Created by lilei on 2018/3/20.
 */
const fs = require('fs');
const path = require('path');
const paths = require('../config/paths')

module.exports = {
    "getComponents": {
        type: 'POST',
        httpCode: 200,
        result: function (params) {
            let files = fs.readdirSync(path.resolve(paths.appSrc, 'components'));
            let index = files.indexOf('index.js')
            files.splice(index, 1)
            return files
        }
    }
}