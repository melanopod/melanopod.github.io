import React, { createRef, Fragment, useState } from 'react'
import anime from 'animejs';

import '../css/animations.scss';
import PandaSitting from '../assets/panda_sit.png';

interface PLoadingAnimation {
  onAnimationFinish?: () => any;
}

export default function LoadingAnimation(props: PLoadingAnimation) {
  const [hidden, setHidden] = useState(false);
  if(hidden) return null;

  return (
    <div className='absolute top-0 left-0 pointer-events-none overflow-hidden'>
      <div className='h-screen w-screen flex anim-enlargeHide'>
        <div className='supercenter'>
          <div
          className='bg-mlp-circ w-90vw h-90vw rounded-full anim-enlarge'
          onAnimationEnd={() => {
            (props.onAnimationFinish) && props.onAnimationFinish()
          }}>
          </div>
        </div>
        <div className='supercenter'>
          <div className='bg-mlp-circ w-30vw h-30vw rounded-full anim-enlarge'></div>
        </div>
        <div className='supercenter'>
          <img src={PandaSitting} className='w-32vw anim-enlargeSm'></img>
        </div>
        <div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
          <h1 className='uppercase text-2xl text-mlp-watermark'>
            designed by muatex • coded by stringy
          </h1>
        </div>
      </div>
    </div>
  )
}
