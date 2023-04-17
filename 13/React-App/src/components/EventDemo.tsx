import React from 'react';
interface Props {
  input: string;
  outPass: (out: string) => void;
}

function EventDemo({ input, outPass }: Props) {
  return (
    <button
      className=' my-2 rounded-xl bg-slate-700 p-2 px-3 text-white'
      onClick={() => {
        touchEvent(outPass);
      }}
    >
      {input}
    </button>
  );
}

const touchEvent = (outPass: (out: string) => void) => {
  outPass('向外传递参数、事件');
};

export default EventDemo;
