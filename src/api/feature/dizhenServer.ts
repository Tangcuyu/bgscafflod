
import {RequestServerClass} from '../../util/request';

export class DizhenServer {

    public rSerivce: any;

    constructor(opt: any, axiosFilterFn?: any) {
        this.rSerivce = new RequestServerClass(opt);
    }

    public getData() {
        const url = './json/weather.json';
        return this.rSerivce.serverObj.get(url);
    }

    public getMapConfig() {
        const url = './json/map.json';
        return this.rSerivce.serverObj.get(url);
    }

}
