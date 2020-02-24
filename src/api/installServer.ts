const publicPath = require('../config/index').jsonPath;
import publishObjectPath from '@/util/configRegistry';
import {RequestServerClass} from '../util/request';
import {DemoServer} from './feature/demoServer';
import {DizhenServer} from './feature/dizhenServer';
import {MapServer} from './feature/mapServer';


const demoServer = new DemoServer({baseURL: publicPath});
const dizhenServer = new DizhenServer({baseURL: publicPath});
const mapServer = new MapServer({ baseURL: publicPath });

export  {
    demoServer,
    dizhenServer,
    mapServer,
};
