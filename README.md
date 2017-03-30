<h1>ng4-preload</h1>
    When get some data before run some function(eg. App Init or router resolve), during this time you can show this preload module to get better user experience.<br>
    在执行某些方法或者进入某些模块前需要加载一些数据时，可以调用这个preload模块来获得更佳的用户体验。
 
<h2>Install 安装</h2>
      npm install ng4-preload --save

<h2>Use 使用</h2>
<h3>Import Module. 导入模块</h3>

```javascript
  import { PreLoaderModule } from "ng4-preload";
    @NgModule({
        imports: [
             ...,
            PreLoaderModule
        ]
    })
```
<h3>Providers Service. 声明Service</h3>

```javascript
  import { PreLoaderService } from "ng4-preload";
    @NgModule({
        ...,
        providers: [PreLoaderService]
    })
```
<h3>Add Tag. 添加标签</h3>

```html
//add tag near your <route-let> or anywhere you can sure it will run.  在你的<route-let>附近插入这个标签，或者你确信它可以运行的任何地方。
<pre-loader [mintime]="6000" [text]="'Loading ...'" [fontsize]="30" [fontweight]="500" [fontcolor]="'#fff'" [background]="'#000'">
    <span>Loading ...</span>
</pre-loader>
```

<h3>Start & End. 开始和结束</h3>

```javascript
import { PreLoaderService } from "ng4-preload";
 constructor(private router: Router,private preloaderservice:PreLoaderService) {
        preloaderservice.start();
        setTimeout(()=>{
             preloaderservice.end();
        },10000); //simulate ajax. 模拟ajax延时操作
    }
```


<h2>Parameters. 参数</h2>

* mintime: minimum millisecond you want(default 5000 millisecond, and you could input 0). <br>您所期望的最低加载时间（默认为5000毫秒，您可以输入0）。
* text: Loading text you want(default is 'Loading ...'). <br>您所期望的Loading文字（默认为'Loading ...'）。
* fontsize: the font size. <br>文字大小。
* fontweight: the font weight. <br>文字粗细。
* fontcolor: the font color. <br>文字颜色。
* background: the background. <br>背景颜色。


<h2>About&Problems</h2>

```javascript
  var sendToMe = {
    email : "manxiaobooo@126.com"
  }
```
