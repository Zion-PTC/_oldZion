class SysObj {
  method(arg1, arg2, arg3) {
    let res = arg1 * arg2 * arg3;
    return res;
  }
}

class AdvancedSysObj {
  arg1;
  arg2;
  arg3;
  login(credentials) {
    return credentials.token;
  }
  setArg1 = (arg1) => (this.arg1 = arg1);
  setArg2 = (arg2) => (this.arg2 = arg2);
  setArg3 = (arg3) => (this.arg3 = arg3);
  method = () => this.arg1 * this.arg2 * this.arg3;
}

class Adapter {
  obj;
  constructor(credentials) {
    this.obj = new AdvancedSysObj();
    this.obj.login(credentials);
  }
  method(arg1, arg2, arg3) {
    this.obj.setArg1(arg1);
    this.obj.setArg2(arg2);
    this.obj.setArg3(arg3);
    return this.obj.method();
  }
}
let arr = [10, 10, 10];
let obj = new SysObj();
// called in this way
let res1 = obj.method(...arr);
// called in the new way
let res3 = new AdvancedSysObj();
res3.setArg1(10);
res3.setArg2(10);
res3.setArg3(10);
let resFromRes3 = res3.method();

let credentials = { token: "token:::id" };
let adapter = new Adapter(credentials);
// called in the same manner
let res2 = adapter.method(...arr);
console.log(res1);
console.log(res2);
console.log(resFromRes3);
