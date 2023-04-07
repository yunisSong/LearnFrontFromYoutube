import React, { useState } from 'react';
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
  function changeImageSrc(hover: boolean) {
    if (hover) {
      setImageSrc(hoverImagePath);
    } else {
      setImageSrc(imagePath);
    }
  }
  return (
    <div
      className='ml-[15px] mt-[40px] w-[60px] p-1 text-center font-normal  text-white hover:bg-white hover:text-blue-base'
      onMouseEnter={() => changeImageSrc(true)}
      onMouseLeave={() => changeImageSrc(false)}
    >
      {/* <img style={style.item} src={imagePath} alt='' />
      <span style={style.title}>{title}</span> */}

      <img className='ml-[11px] w-[30px]' src={imageSrc} alt='' />
      <span className='blue'>{title}</span>
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
