import Message from './Message';
import Welcome from './Test01';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Slide from '@/Slide/Slide';
function App() {
  let items = ['深圳1', '上海', '北京'];
  const title = '中国城市';
  return (
    <div className='App flex min-h-screen'>
      <Slide />
      <div className='flex-1'>
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
