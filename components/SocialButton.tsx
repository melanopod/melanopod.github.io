import React, { Fragment, ReactNode } from 'react'
import { IconType } from 'react-icons/lib';

interface PSocialButton {
  displayIcon: ReactNode | ReactNode[];
  link: string;
  text: string;
}

export default function SocialButton(props: PSocialButton) {
  return (
    <a href={props.link}>
      <div className='md:w-72 w-full bg-mlp-200 rounded-lg flex items-center p-4 space-x-6 hover:scale-105 transition-all ease-in-out'>
          {props.displayIcon}
          <h1 className='text-xl font-normal'>
            {props.text}
          </h1>
      </div>
    </a>
  )
}
