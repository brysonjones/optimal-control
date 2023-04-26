import Image from 'next/image'
import { Inter } from 'next/font/google'
import Scene from '@/components/Scene'


const getData = function() {
  fetch('http://localhost:8080/data')
  .then(response => response.json())
  .then(data => console.log(data.message));
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Scene />
      <button onClick={getData}>Click Me</button>
    </main>
  )
}
