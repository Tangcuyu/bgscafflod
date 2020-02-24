
import $ from 'jquery';

const  publishObjectPath: any =  {
    serverPath : '',
};

Object.defineProperty(publishObjectPath, 'serverPath', {
    set(data: any) {
        this.value = data;
    },
});

const publicPath = require('../config/index').jsonPath;

function pathCallback() {
    $.ajax({
        url : publicPath + 'json/publishObjectPath.json',
        async : false,
        success(data: any) {
            publishObjectPath.serverPath = data;
            /**
             * 适配第一条线服务所依赖的全局变量
             */
            (window as any).EMAP_CONFIG = {
                common: {
                    mongoService: publishObjectPath.value.emapService,
                    GaoDeService: publishObjectPath.value.GaoDeService,
                    GaoDeKey: publishObjectPath.value.GaoDeKey,
                    tempurl: publishObjectPath.value.tempurl,
                    urlWeb: publishObjectPath.value.urlWeb,
                    Schedulurl: publishObjectPath.value.Schedulurl,
                    baidulabel: publishObjectPath.value.baidulabel,
                },
            };
            // cb();
        },
    });
}
pathCallback();

export default publishObjectPath;
