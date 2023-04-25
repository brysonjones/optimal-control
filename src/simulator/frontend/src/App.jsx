import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'ws://localhost:5001';
const socket = io(URL);


function App() {
  const [count, setCount] = useState(0)

  // client-side
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => 
          {
            count + 1;
            socket.emit('message', 'Hello World');
            console.log('sent: Hello World'); // undefined
          }
          )}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
