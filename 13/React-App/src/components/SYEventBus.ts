// 定义一个事件名称相同的观察者容器
class CallBackContainer {
  // 事件名称
  eventName: string;
  // 当前事件的观察者（事件的响应者）为空的时候的回调方法
  emptyHooks: (key: string) => void;
  // 事件响应者回调集合
  callbacks: { [bid: symbol]: (parameter: any) => void } = {};
  // container: ((parameter: any) => void)[] = [];
  constructor(eventName: string, emptyHooks: (key: string) => void) {
    this.eventName = eventName;
    this.emptyHooks = emptyHooks;
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
    // unsubscribe
    return {
      // 解除绑定
      unsubscribe: () => {
        delete this.callbacks[key];
        const allKeys = this.allKeys();
        if (allKeys.length === 0) {
          this.emptyHooks(this.eventName);
        }
        console.log('this.callbacks: ', this.callbacks);
      },
    };
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
  // 构造函数
  constructor() {}
  // 添加 订阅者

  /**
   * @func addListener
   * @desc 添加事件订阅者
   * @param {eventNam: 事件名称,callback: 事件回调}
   * @return { object:subscribe 带有一个解除事件绑定方法的实例 }
   */
  addListener(eventName: string, callback: (parameter: any) => void) {
    // 如果 事件名称(eventName) 或者 回调方法有一个为空，就没有必要继续。
    if (!eventName || !callback) return;
    //根据 事件名称(eventName) 查找是否已经存在有订阅者容器
    let callbacks = this.targetContainer[eventName];
    if (!callbacks) {
      // 如果订阅者容器为空，根据事件名称新建一个实例 （传入一个事件名，删除的回调方法）
      callbacks = new CallBackContainer(eventName, (key) => {
        // 根据事件名称删除事件的响应者
        delete this.targetContainer[key];
        console.log('this.targetContainer: ', this.targetContainer);
      });
      // 重新赋值
      this.targetContainer[eventName] = callbacks;
    }
    // 调用 subscribe 返回一个可以解除事件绑定的实例。
    return callbacks.subscribe(callback);
  }
  /**
   * @func emit
   * @desc 根据事件名称，通知注册了这个事件通知的观察者
   * @param {eventName: 事件名称, parameter: 事件传递的参数}
   * @return {}
   */
  emit(eventName: string, parameter?: any) {
    let callback = this.targetContainer[eventName];
    console.log('callback: ', callback);
    if (callback) {
      callback.publish(parameter);
    }
  }
}

const eventBus = new SYEventBus();
export default eventBus;
