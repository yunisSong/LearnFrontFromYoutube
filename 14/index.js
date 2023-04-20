// import { connect } from 'react-redux';

import eventbus from 'syeventbus';

eventbus.addListener('ddd1', (p) => {
  console.log('p: ', p);
});
eventbus.emit('ddd1', { name1: 'Yunis1' });
