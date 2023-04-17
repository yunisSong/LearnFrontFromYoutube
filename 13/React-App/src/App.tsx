import Message from './Message';
import Welcome from './Test01';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Slide from '@/Slide/Slide';
import EventDemo from './components/EventDemo';
import ev from './components/SYEventBus_1';
function App() {
  let items = ['深圳1', '上海', '北京'];
  const title = '中国城市';
  const outPass = (out: string) => {
    console.log('out: ', out);
  };

  // event bus
  let un1 = ev.addListener('ddd', (p) => {
    console.log('p: ', p);
  });

  let un = ev.addListener('ddd', (p) => {
    console.log('p1111: ', p);
  });
  // un?.unsubscribe();
  // un1?.unsubscribe();

  ev.emit('ddd', { name: 'Yunis' });
  ev.emit('ddd');

  return (
    <div className='App flex min-h-screen'>
      <Slide />
      <div className='flex-1'>
        <EventDemo input='事件参数传递' outPass={outPass}></EventDemo>
        <Message></Message>
        <Alert>
          Hello <button className='button'> World.</button>
        </Alert>
        <ListGroup
          items={items}
          title={title}
          callBack={(item) => {
            console.log('点击回调父组件', item);
          }}
        />
      </div>
    </div>
  );
}

export default App;
