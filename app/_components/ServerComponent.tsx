import React from 'react'
import ClientComponent from './ClientComponent'

type Props = {}

function ServerComponent({}: Props) {
  return (
    <>
       <ClientComponent/>
    </>
  )
}

export default ServerComponent