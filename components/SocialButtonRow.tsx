import React, { ReactNode } from 'react'

export default function SocialButtonRow({children}: {children: ReactNode[] | ReactNode}) {
  return (
    <div className='flex md:flex-row flex-col md:space-x-6 space-x-0 space-y-6 md:space-y-0'>
      {children}
    </div>
  )
}
