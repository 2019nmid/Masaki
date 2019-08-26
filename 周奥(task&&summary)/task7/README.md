## task7
### 目录结构
```
|-- task7
    |-- db.json
    |-- login.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- router.js
    |-- serve.js
    |-- public
    |   |-- js
    |   |   |-- main.js
    |   |-- style
    |       |-- main.css
    |-- README_IMG
    |-- views
        |-- 404.html
        |-- index.html
        |-- login
            |-- loginMsg.html

```

### 项目启动
使用`nodemon`启动node
```shell
nodemon serve.js
```
监听端口`3000`
```javascript
app.listen(3000, () => {
  console.log('服务启动成功');
});
```

![项目启动](README_IMG/open.png)

### 项目展示

![主页](README_IMG/home.png)

1. 登录成功,用模板引擎渲染得到loginMsg.html

   ![登录成功](README_IMG/denglu.png)

2. 登录失败,后台反馈

   ![登陆失败](README_IMG/loginerr.png)
   
3. 注册

   ![注册](README_IMG/register.png)

   
