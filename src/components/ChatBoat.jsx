// import React from 'react'
// import ChatBot from "react-chatbotify";

// const ChatBoat = () => {
//     const settings = {
//         general: {embedded: true},
//         chatHistory: {storageKey: "playground"},
//         botBubble: {simStream: true}
//     }
//     const flow={
//         start: {
//             message: "Welcome to the playground 🥳! Edit and experiment as you wish!",
//             path: "end_loop"
//         },
//         end_loop: {
//             message: (params) => `Received: ${params.userInput}`,
//             path: "end_loop"
//         }
//     }
//   return (
//     <>
//           <ChatBot settings={settings} flow={flow}/>
//     </>
//   )
// }

// export default ChatBoat
