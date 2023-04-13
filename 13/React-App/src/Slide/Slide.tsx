import SlideItem from './SlideItem';
import SlideItemBG from './SlideItemBG';

function Slide() {
  const items = [
    {
      imagePath: '/assets/Slide/message.png',
      hoverImagePath: '/assets/Slide/message-s.png',
      title: '消息',
    },
    {
      imagePath: '/menu/pm.png',
      hoverImagePath: '/menu/pm-s.png',
      title: '消息',
    },
  ];

  return (
    <div className=' w-[100px] shrink-0 flex-col rounded-br-[40px] rounded-tr-3xl bg-blue-base pt-[100px]'>
      {items.map((item) => {
        return (
          <SlideItem
            key={item.imagePath}
            imagePath={item.imagePath}
            hoverImagePath={item.hoverImagePath}
            title={item.title}
          />
        );
      })}
    </div>
  );
}

export default Slide;
