# comp-engines

## 配置node的npmrc

位置：C:\Program Files\nodejs\node_modules\npm
修改npmrc
prefix=${APPDATA}\npm
chromedriver_skip_download=true


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Catalogue specification

src 下一级文件，不可随便新增与删除。如需要。进行整体讨论。

src
    - api                           统一请求管理
        - service                   共用服务存放位置
        - feature                   业务服务存放位置
    - interface                     描述数据类型文件
    - config                        环境文件配置
    - assets                        可打包静态资源
        - css                       样式存放位置
        - img                        图片存放位置
    - components    
        -common                     功能组件
            - 按功能建文件夹
        -feature                    业务组件 
            - 按业务场景建文件夹
    - views                         页面
    - router                        路由
    - store                         vuex
    - util                          工具类
    - i18n                          国际化
    App.vue                         主页
    main.ts                         入口                             
public                              不打包的静态资源     
tests 
    -e2e                            集成测试
    -unit                           单元测试

### Naming  specification 

文件夹命名 ：以小写字母开头
文件命名　: clsss、interface 以大写字母开头
比如：
components/common 下，以功能建文件夹，如from 
form文件夹
radio.components.vue 
form.components.vue 
components/feature 下，以业务类型建，如dizhen
dizhen文件夹
socialMediaMonitor（舆情监控）
socialMediaMonitor.feature.vue 


### 组件开发 

@Component({
    //组件名
    name : '组件名',
    //依赖那些组件 
    components: {
        
    }
    //其他待定
})
export default class extends Vue {
    @Prop private name! = string  
    private name = 'abc'
    @provide
    @model
    @Watch
    @Inject
    @Provide
    @Emit  
    get function 
    set function 
    //生命周期顺序     
    creted(){

    }
    //自己方法        
    private function

}








