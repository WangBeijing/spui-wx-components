## button
**button 组件**
### 基本用法


#### 使用
```js
//引入
import Toast from '@/components/Toast/index'
// 注册组件
components:{
  Toast,
}
// HTML标签
<Toast ref="Toast"></Toast>
```

#### 调用API
```js
this.$refs.Toast.text('13213132131321313213');
this.$refs.Toast.success(); // 成功
this.$refs.Toast.info();    // 提示信息
this.$refs.Toast.error();  // 警告
this.$refs.Toast.warn();   // 错误
// 自定义内容Text
this.$refs.Toast.success({
    text: '请求成功'
}); // 成功
```
#### Example
![image](Toast.png)

