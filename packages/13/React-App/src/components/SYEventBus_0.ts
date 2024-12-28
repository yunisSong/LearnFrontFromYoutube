// 事件总线
class SYEventBus {
  // 订阅者的容器
  targetContainer: {
    [eventName: string]: (p: any) => void;
  } = {};
  constructor() {}
  addListener(eventName: string, callback: (parameter: any) => void) {
    if (!eventName || !callback) return;
    this.targetContainer[eventName] = callback;
  }
  emit(eventName: string, parameter?: any) {
    let callback = this.targetContainer[eventName];
    if (callback) {
      callback(parameter);
    }
  }
}
const eventBus = new SYEventBus();
export default eventBus;
