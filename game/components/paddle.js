
import React from 'react'

export default ({ x, y, width, height, selectedNFTImage }) => (
  // <rect className='paddle' x={x} y={y} width={width} height={height} />
  <image className='paddle' x={x} y={y} width={width} height={height}
    href={selectedNFTImage}
  />
)