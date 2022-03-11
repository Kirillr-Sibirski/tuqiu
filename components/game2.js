import React, { useRef, useEffect, useState } from 'react'

import Scene from '../game/components/scene'
import { registerListener } from '../game/utils'

export default function Game2({ selectedNFTImage }) {
  const sceneContainer = useRef()
  const [size, setSize] = useState()

  useEffect(() => {
    const onResize = () => {
      const { width, height } = sceneContainer.current.getBoundingClientRect()
      setSize({ width, height })
    }
    const unregisterResizeListener = registerListener('resize', onResize)
    onResize()
    return unregisterResizeListener
  }, [])

  return (
    <div className='scene-container' ref={sceneContainer}>
        {size && <Scene width={size.width} height={size.height} selectedNFTImage={selectedNFTImage} />}
    </div>
  )
}