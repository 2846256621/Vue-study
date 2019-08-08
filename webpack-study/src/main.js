//main.js是项目的js入口文件
//导入所用的静态资源 及 包


/**
 * 一、
 * import from ***; es6语法 太高级 浏览器支持不了 所以使用webpack
  1. 先安装 npm install webpack webpack-cli -g
  2. 再运行webpack .\src\main.js --output .\dist\bundle.js  运行main.js 打包的资源 压缩放在 bundle.js文件中
  3.此步骤太麻烦 所以直接写一个配置文件 webpack.config.js
  4.配置好文件 每次运行 输入命令 webpack即可
  5.每次修改就得重新输入webpack 太麻烦
  6.安装 :npm install webpack-dev-server -D 把这个工具 安装到本地 实现自动打包编译的功能
  7.需要修改index.html的引入路径  直接引入根目录下的 bundle.js文件
  [
     ----****也很麻烦****-----
     8.然后 输入命令 webpack-dev-server 即可 会自动刷新页面 不需要重复运行输入命令
     9.然后可以点击终端里的 自动打开的服务器 http://localhost:8080
  ]
 * ----------------------------
 * 方法一：
 *
 8.在package.json文件中配置： "scripts": {"dev": "webpack-dev-server --open --port 3030 --contentBase src --hot"},
   输入 'npm run dev' 可以直接运行，参数：
         --port 是默认自动打开浏览器
         --port 3030是修改服务器的端口号为3030
         --contentBase src 是自动定位，打开src底下的index文件
         --hot 实现网页异步加载  不刷新
 *  -----------------------------
 *  方法二：
    1.package.json里面写："scripts": {"dev": "webpack-dev-server"},
    2.全部配置到 webpack.config.js文件
      devServer: {
        open:true,
        port:3030,
        contentBase:'src',
        hot:true
     }
 *  -----------------------------
 9.运行 npm run dev 即可
*/

/**
 * 二、
 * webpack-dev-server 帮忙打包生成的bundle.js为什么路径在根目录？
 * webpack-dev-server 帮忙打包生成的bundle.js文件，并没有存放到 实际的物理磁盘dist上
 * 而是直接托管到 电脑内存中，所以在我们项目的根目录底下，根本找不到打包好的 bundle.js
 * 所以引入文件的时候得引根目录下面的虚拟bundle.js文件
 * 目的：快
*/

/**
 * 三、
 * 在内存中生成页面的插件
 * npm install html-webpack-plugin -D  使生成内存中的HTML页面
 * 优点：1. 自动在内存中根据指定的页面生成一个内存页面
 *      2. 自动 把打包好的 bundle.js 追加到页面中  不需要在页面中引入 bundle.js文件了
 * */

/**
 * 四、
 * webpack的优点：
 * 1.webpack能够处理js文件的相互依赖关系
 * 2.webpack能够处理js的兼容性  能够将高级浏览器不识别的语法 转换成低级浏览器能够识别的语法
 * 语法：  webpack 要打包的文件路径 --output  打包后的文件路径
 *
 * 3.webpack 默认只能打包js类型的文件  无法处理其他类型的文件
 *
 */
/**
 * 五、
 * 若要处理非js文件 需要手动安装第三方的加载器 安装各种需要的loader：
 *     1.安装 npm install style-loader css-loader -D
 *     2.打开webpack.config.js 这个配置文件 ，新增一个module(是个对象),对象上有rules属性（是个数组），存放了第三方的文件匹配处理规则
 */

//1.引入jquery
import $ from 'jquery';

//2.导入样式表 css
// 直接导入 会报错  webpack 默认只能打包js类型的文件  无法处理其他类型的文件
//npm install style-loader css-loader -D
import './css/index.css'

//2.导入样式表 less
//npm install less less-loader -D
import './css/index.less'

$(function () {
   $('li:odd').css('backgroundColor','#8ac1f8');
   $('li:even').css('backgroundColor',function () {
       return '#f8ada4'
   });
});

/**
 * static关键字  定义静态属性
 * 静态属性：可以通过类名直接访问的属性
 * 实例属性：只能通过类的实例 来访问的属性
 * */

/**webpack 只能处理一部分的 Es6语法  语法配置
 * 通过安装 Babel，可以帮将高级语法转换下还能低级语法
 * 1.安装如下两套包，去安装 Babel 相关的loader 的功能：
 * 语法转换器：
 * npm install babel-core babel-loader -D
 * npm install  babel-runtime babel-plugin-transform-runtime -D  版本过高  报错
 * 退回低版本：npm install -D babel-loader@7 babel-core babel-preset-env
 *
 * 对应关系：
 * npm install babel-preset-env -D
 * npm install babel-preset-stage-0 -D
 * 2.打开webpack的匹配文件 在module - rules数组中，在添加一个新的匹配规则
 *   { test:/\.js$/,use:'babel-loader',exclude:/node_modules/ }
 *   配置 babel的loader规则，要将node_modules排除 ，不去打包编译此文件中的第三方js文件
 *
 * 3.根目录下新建一个 .babelrc的Babel的配置文件，这个文件是JSON 格式，要使用JSON格式的语法
 *   配置内容：
 *   {
 *     "presets":["env","stage-o"], //语法
 *     "plugins":["translate-runtime"]  //插件
 *   }
 * */
class Person{
    static info = { name: 'zs', age: 20 }
}

function Animal(name) {
    this.name = name;
}
Animal.age = 20; //给Animal 追加静态属性

let a = new Animal('小花');

//静态属性
console.log(Animal.name);
//实例属性
console.log(a.name);