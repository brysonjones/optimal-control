import Image from 'next/image'
import { Inter } from 'next/font/google'
import Scene from '@/components/Scene'


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Scene />
    </main>
  )
}
