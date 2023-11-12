'use client'
import { useChat } from 'ai/react'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0/client';


export default withPageAuthRequired( function Chat() {

  // ---------------------------------------------------------------------------------
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  // ---------------------------------------------------------------------------------
  function conversations() {
    console.log(messages);
  }
  // ---------------------------------------------------------------------------------
  
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          <b>{m.role}:</b> 
          <code> {m.content}</code>
        </div>
      ))}
  
      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
          />
        </label>
      </form>

      <button onClick={conversations}>Conv</button>
    </div>
  )
})
