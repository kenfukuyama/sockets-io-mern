import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
  const [messages, setMessages] = useState(["a", "b"]);


  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    // console.log('Is this running?');
    socket.on('welcome', data => console.log("hey"));
    // socket.emit("something", "here")

    socket.on('message', (data) => {
      console.log(data);
      // setMessages([...messages, {message, username}])
  })

    // console.log(socket);

    // socket.on('connection', ()=> console.log("im connected"));


    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  });



  return (
    <div className="App">
      <h1>Socket Test</h1>
      <ul>
      {messages.map((message, i) => {return <li key={i}>{message}</li>})}
      </ul>
    </div>
  );
}

export default App;


// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import io from 'socket.io-client'

// function App() {
//     // const [state, setState] = useState({message: '', username: ''})
//     const [messages, setMessages] = useState([])
//     const [socket] = useState(() => io(':8000'))


//     useEffect(() => {
//         socket.on('message', ({message, username}) => {
//             console.log({message, username});
//             // setMessages([...messages, {message, username}])
//         })
//     })

//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     const {message, username} = state
//     //     socket.emit("message", {message, username})
//     //     console.log(socket)
//     //     setState({message: '', username})
//     //     return () => socket.disconnect(true);
//     // }

//     return (
//       <div className="div">

//       </div>
//     )
// }

// export default App;