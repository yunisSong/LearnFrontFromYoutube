import { useState } from 'react';

interface Props {
  items: string[];
  title: string;
  callBack: (item: string) => void;
}

// function ListGroup(props: Props) {
function ListGroup({ items, title, callBack }: Props) {
  // let items = ['深圳', '上海', '北京'];
  // const title = '中国城市';
  // let items = props.items;
  // const title = props.title;
  const [selectIndex, setSelectIndex] = useState(-1);
  return (
    <>
      <h4>{title}</h4>
      {items.length === 0 ? <h4> no item found!</h4> : null}
      {items.length === 0 && <h4> no item found!</h4>}
      <ul className='list-group'>
        {items.map((item, index) => {
          return (
            <li
              className={
                selectIndex === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              key={item}
              onClick={() => {
                setSelectIndex(index);
                callBack(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
