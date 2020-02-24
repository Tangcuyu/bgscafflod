
const path  = require('../config/index').webSocketServer;
interface  Socket  {
  socket: any ;
  onopen: any;
  oneror: any;
  onmessage: any;
  onclose: any ;
  handles: any;
  send: any ;
  get: any ;
  init: any ;
}


class Socket  {
  constructor(paths: string) {
    this.socket = new WebSocket(paths);
    this.handles = {
      router : {},
      componts : {},
    };
  }
}

// function Socket (path : string) {
// 	this.socket = new WebSocket(path);
// 	this.handles = {
// 		router : {},
// 		componts : {}
// 	};
// }


Socket.prototype.constructor =  Socket;

Socket.prototype.init = function() {
    this.onopen();
};
Socket.prototype.onopen = function() {
  /**
   *   此处 ，后续 要处理多用户的情况
   */
  const that = this ;
  const sendSearch = location.search;
  let sendKey = '';

  if (sendSearch.indexOf('event') !== -1) {
    sendKey =  location.search.split('=')[1];
  } else {
    sendKey = 'bigscreen';
  }
  this.socket.onopen = () => {
    that.socket.send(sendKey);
  };
  this.socket.onmessage = (...rest: any) => {
    that.onmessage(...rest);
  };
};

Socket.prototype.oneror = () => {
  // tslint:disable-next-line:no-console
  console.error('连接错误');
  // 错误的日志
};

Socket.prototype.onmessage = function(key: string, type: string, handler: any) {
  if (!arguments.length) { return false; }

  const data = arguments[0][0].data;
  const content = JSON.parse(data).content ;
  const option = JSON.parse(content);

  option.forEach((item: any) => {
    if (item.memo.indexOf('.') !== -1) {
      // layout
      const keys = item.memo.split('.')[1];

      this.send(keys, 'router', item.data);

    } else {

      this.send(item.memo, 'componts', item.data);
    }
  });

};

Socket.prototype.onclose = () => {
   // tslint:disable-next-line:no-console
   console.log('socket已经关闭');
   // 关闭的日志
};

Socket.prototype.get = function(key: string , type: string , handler: string) {
   if (!this.handles[type][key]) {
     this.handles[type][key] = [];
   }
   this.handles[type][key].push(handler);
};

Socket.prototype.send = function(key: string , type: string) {
  if (!this.handles[type][key]) {
            return false;
    } else {
    for (const i of this.handles[type][key]) {
        this.handles[i](arguments[2]);
    }
  }
};

const  socket = new Socket(path);

socket.init();

export default socket as any;
