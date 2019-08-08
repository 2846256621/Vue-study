//这是配置文件 本质就是个js文件


const path = require('path'); //引入拼接路径模块

//导入在内存中生成html页面的插件  插件要放到plugins 节点中去
const htmlWebpackPlugin = require('html-webpack-plugin');

//通过node的模块操作 向外暴露一个 配置对象
module.exports = {
    //在配置文件里需要手动指定入口 与 出口
    entry: path.join(__dirname, './src/main.js'),//入口，表示，要使用webpack，打包哪个文件
    output:{ //输出文件的相关配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件 输出到那个目录中
        filename: "bundle.js" //指定输出文件的名称
    },
    //运行处理
    devServer: {
        //--open --port 3030 --contentBase src --hot
        open:true,
        port:3030,
        contentBase:'src',
        hot:true
    },

    //配置插件的节点
    plugins: [
        //创建一个在内存中生成html的 插件
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据页面路径，去生成内存中页面
            filename: 'index.html' //指定生成页面的名称
        })
    ],

    //第三方模块加载器
    module:{
        //第三方模块 匹配规则 test:匹配 use:应用多个 loader 和选项
        rules: [

            //.css文件匹配处理
            {
                test:/\.css$/,   //test的值是正则表达式
                use:['style-loader', 'css-loader']  //配置处理 .css文件的第三方loader规则  从后往前匹配
            },
            //.less文件匹配处理
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader','less-loader']
            },
            //处理高级的js语法
            {
                test: /\.js$/, loader: "babel-loader",exclude: /node_modules/
            }
        ]
    }
};


