'use client'
import React, { useState } from 'react'

type Props = {}

const colorVariants = ['#318CE7', '#F07427']

function ColorTitle({}: Props) {
    const [colorId, setColorId] = useState(0)
  return (
    <>
        <h1 style={{
            color: colorVariants[colorId]
        }}>With Suspense!!!</h1>
        <button onClick={() => setColorId(ci => (ci + 1) % colorVariants.length)}>Click!</button>
    </>
  )
}

export default ColorTitle