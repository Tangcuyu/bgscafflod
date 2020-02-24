
import {RequestServerClass} from '../../util/request';

export class DemoServer {

    public rSerivce: any;

    constructor(opt: any, axiosFilterFn?: any) {
        this.rSerivce = new RequestServerClass(opt);
    }



    public getDemoData() {
        return new Promise((resolve, reject) => {
            const list: any = [];
            for (let i = 0; i < 10 ; i++) {
                list.push({
                    id: `id${i}`,
                    longitude: 116 + Math.random(),
                    latitude: 39 + Math.random(),
                });
            }
            resolve(list);
        });
    }

}
