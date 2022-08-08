import anime from 'animejs';
import React, { createRef } from 'react'
import Panda from '../assets/panda.png';

export default function SpinningPanda() {
  const panda = createRef<HTMLImageElement>();
  const animatePanda = (e: any) => {
    anime({
      targets: e.target,
      rotateZ: [0, 360]
    })
  }

  return (
    <div className="absolute right-0 z-10">
      <img src={Panda} className="h-80vh anim-enlargeSm cursor-pointer" onClick={animatePanda} draggable={false}></img>
    </div>
  )
}
