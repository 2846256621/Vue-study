//想要导入文件 或引入资源
/**1. npm init
 * 2. npm webpack
 * 3. npm webpack-cli
 * 4. 配置 webpack.config.js 中入口entry /出口 output 文件
 * 5. npm webpack-dev-server
 * 6. 配置 webpack.config.js 中的服务运行 devServer
 * 7. npm html-webpack-plugin 导入在内存中生成HTML页面的插件
 * 8. 配置 webpack.config.js 中 在内存页生成面 的 plugin  优点 页面无需调用 bundle.js
 * 9. 运行 npm run dev  基本的js+html 就可以渲染加载了
 *
 * 10.配置第三方模块 各种loader
 *   eg:css，less文件加载
 *    (1) 创建 index.css
 *    (2) npm install style-loader css-loader -D
 *    (3) 配置 webpack.config.js 文件中的 module模块 中的rules 级第三方模块的匹配规则
 * 11.完成基本操作
*/

//导入jquery模块 安装
import $ from 'jquery';

//导入css文件 需要安装第三方模块配置
import './css/index.css';
//导入 js 文件 自动识别
import './js/index.js';
//引入node_modules内的相关文件 可以直接写包的名称  然后跟上具体文件路径  可省略 node_modules
import  'bootstrap/dist/css/bootstrap.css';

import './font/iconfont.css';


