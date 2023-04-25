import Image from 'next/image'
import { Inter } from 'next/font/google'
import Scene from '@/components/Scene'

import { useState, useEffect } from 'react'
import io from 'socket.io-client'

let socket

export default function Home() {
  useEffect(() => socketInitializer, [])

  const [input, setInput] = useState('')

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected');
    })

    socket.on('update-input', msg => {
      setInput(msg);
    })
  }
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit('input-change', e.target.value);
    console.log(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Scene />
      <input
        placeholder="Type something"
        value={input}
        onChange={onChangeHandler}
      />
    </main>
  )
}
