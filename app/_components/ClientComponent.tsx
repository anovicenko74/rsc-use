'use client'
import React, { useEffect } from 'react'

type Props = {}

function ClientComponent({}: Props) {
    useEffect(() => alert('client component load'), [])
  return (
    <div>ClientComponent!!!</div>
  )
}

export default ClientComponent