<h1>ng4-preload</h1>
  When get some data before run some function(eg. App Init or router resolve),  during this time you can show this preload module to get better user experience.<br>
  在执行某些方法或者进入某些模块前需要加载一些数据时，可以调用这个preload模块来获得更佳的用户体验。
<h2>Install 安装</h2>
&nbsp;&nbsp;&nbsp;&nbsp;npm install ng4-preload --save
<h2>Use 使用</h2>
  (1) import Module. 导入模块<br>
  import { PreLoaderModule } from "ng4-preload";<br>
  
  @NgModule({<br>
  &nbsp;&nbsp;&nbsp;&nbsp;imports: [<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ...,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PreLoaderModule<br>
  &nbsp;&nbsp;&nbsp;&nbsp;]<br>
})<br>
(2) providers service. 声明service<br>
import { PreLoaderService } from "ng4-preload";<br>
@NgModule({
    &nbsp;&nbsp;&nbsp;&nbsp;...,
    &nbsp;&nbsp;&nbsp;&nbsp;providers: [PreLoaderService]
})<br>
