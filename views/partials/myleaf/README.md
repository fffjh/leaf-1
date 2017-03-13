
> 需要使用```node server.js```进行测试（没有装node的请自行百度全局安装即可）
> 
> 需要完成的任务如下:

- 请在main.html里面添加一个main.css文件，对用户双击节点之后弹出的选项框和保存按钮进行样式设计
- 可以直接对main.html里面的选项框部分进行修改，但是注意如下问题：

1. 创建按钮的id是"create"
2. 删除按钮的id是"delete"
3. 展开/收缩按钮的id是"SBContent"
4. 复制按钮的id是"copyContent"
5. 粘贴按钮的id是"pasteContent"
6. 详情按钮的id是"detail"
7. 保存按钮的id是"save"
8. 整个下拉框的id是"dropdown"
9. 上移按钮的id是“up”
10. 下移按钮的id是"down"

**由于我是使用boostrap来做的下拉框，用了里面的元素。所以做好下拉框之后，去到main.js文件，注释掉112行，使用111行的代码进行测试来看下拉框是否在用户双击节点之后出现**

考虑上面的按钮的位置会随着页面改变而改变，即使用position的fixed，以提高用户体验。
