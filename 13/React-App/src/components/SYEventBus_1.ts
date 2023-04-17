// 定义一个事件名称相同的观察者容器
class CallBackContainer {
  // 事件名称
  eventName: string;
  // 事件响应者回调集合
  callbacks: { [bid: symbol]: (parameter: any) => void } = {};
  // container: ((parameter: any) => void)[] = [];
  constructor(eventName: string) {
    this.eventName = eventName;
  }

  /**
   * @func subscribe
   * @desc 注册观察者回调，当根据事件名称调用时，会到这个集合中查找回调方法
   * @param {callback: 事件回调}
   * @return { 返回一个带有解除绑定方法的实例 }
   */
  subscribe(callback: (parameter: any) => void) {
    // 获取与回调方法绑定的key（唯一）
    let key = this.nextKey();
    this.callbacks[key] = callback;
    console.log(' this.callbacks: ', this.callbacks);
  }
  /**
   * @func nextKey
   * @desc 获取绑定事件的唯一key
   * @param {}
   * @return {唯一key}
   */
  nextKey() {
    let symbol = Symbol(this.eventName);
    return symbol;
  }
  //获取当前事件的全部绑定key（然后根据key，获取到回调方法）
  allKeys() {
    const allSymbols = Object.getOwnPropertySymbols(this.callbacks);
    return allSymbols;
  }
  // 通知观察者
  /**
   * @func publish
   * @desc 知观察者
   * @param {parameter: 事件传递的参数}
   * @return {}
   */
  publish(parameter?: any) {
    // 获取全部的绑定key
    let allSymbols = this.allKeys();
    console.log('allSymbols: ', allSymbols);
    allSymbols.forEach((key) => {
      // 根据key 获取回调方法
      const call = this.callbacks[key];
      call(parameter);
    });
  }
}
// 事件总线
class SYEventBus {
  // 订阅者的容器
  targetContainer: {
    [eventName: string]: CallBackContainer;
  } = {};
  constructor() {}
  addListener(eventName: string, callback: (parameter: any) => void) {
    if (!eventName || !callback) return;
    let callbacks = this.targetContainer[eventName];
    if (!callbacks) {
      callbacks = new CallBackContainer(eventName);
      this.targetContainer[eventName] = callbacks;
    }
    callbacks.subscribe(callback);
  }
  emit(eventName: string, parameter?: any) {
    let callback = this.targetContainer[eventName];

    if (callback) {
      callback.publish(parameter);
    }
  }
}
const eventBus = new SYEventBus();
export default eventBus;
