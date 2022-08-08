import React, { useState } from 'react'
import LoadingAnimation from './components/LoadingAnimation'

export default function PageWrapper({children}: {children: React.ReactNode | React.ReactNode[]}) {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="bg-mlp-100 text-white h-full min-h-screen">
      <LoadingAnimation
      onAnimationFinish={() => {
        (!showContent) && setShowContent(true)
      }}
      />
      {showContent && children}
    </div>
  )
}