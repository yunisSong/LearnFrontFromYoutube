import React, { useState } from 'react';
import SliderStyles from './Slider.module.css';
import Slide from './Slide';
interface Props {
  imagePath: string;
  hoverImagePath: string;
  title: string;
}
function SlideItem({ imagePath, hoverImagePath, title }: Props) {
  console.log('imagePath: ', imagePath);
  // image title
  // const src = imageSrc(imagePath);
  // console.log('src: ', src);
  const [imageSrc, setImageSrc] = useState(imagePath);
  const [hoverState, changeHoverState] = useState(false);
  function changeImageSrc(hover: boolean) {
    console.log('hover: ', hover);
    console.log('hoverState: ', hoverState);
    console.log('11111111');
    if (hoverState === hover) return;
    console.log('22222222');
    changeHoverState(hover);
    if (hover) {
      setImageSrc(hoverImagePath);
    } else {
      setImageSrc(imagePath);
    }
  }

  return (
    <div
      className='relative overflow-hidden'
      onMouseEnter={() => changeImageSrc(true)}
      onMouseLeave={() => changeImageSrc(false)}
    >
      <div
        className='
        relative z-10 ml-[15px] mt-[40px] 
        w-[60px] p-1 text-center  font-normal
      text-white hover:bg-white hover:text-blue-base
      '
      >
        {/* <img style={style.item} src={imagePath} alt='' />
      <span style={style.title}>{title}</span> */}

        <img className='ml-[11px] w-[30px]' src={imageSrc} alt='' />
        <span className='blue'>{title}</span>
      </div>

      {/* <div
        className={`
        ${SliderStyles.bgAnimationLayer}
        ${hoverState ? SliderStyles.showLayer : SliderStyles.disShowLayer} 
            bg-slate-500 `}
      ></div> */}

      <div
        className={`${SliderStyles.bgAnimationLayer}  
        ${hoverState ? SliderStyles.showLayer : SliderStyles.disShowLayer} }`}
      ></div>
    </div>
  );
}
const style = {
  item: {
    width: '30px',
    height: '30px',
  },
  title: {
    fontSize: '18px',
    color: 'red',
  },
};

export default SlideItem;
