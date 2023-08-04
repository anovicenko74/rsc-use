'use client'
import React, { useEffect } from 'react'

type Props = {}

function ClientComponent({}: Props) {
    useEffect(() => alert('lazy client component load'), [])
  return (
    <div>LazyClientComponent!!!</div>
  )
}

export default ClientComponent