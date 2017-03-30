<h1>ng4-preload</h1>
  When get some data before run some function(eg. App Init or router resolve),  during this time you can show this preload module to get better user experience.<br>
  在执行某些方法或者进入某些模块前需要加载一些数据时，可以调用这个preload模块来获得更佳的用户体验。
<h2>Install 安装</h2>
&nbsp;&nbsp;npm install ng4-preload --save
<h2>Use 使用</h2>
  import { PreLoaderModule } from "ng4-preload";<br>
  
  @NgModule({<br>
  imports: [<br>
    ...,<br>
    PreLoaderModule<br>
  ]<br>
})<br>
