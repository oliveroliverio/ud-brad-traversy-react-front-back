import React from 'react'

function App() {
  const title = 'test title'
  const body = 'test body'
  const comments = [
    { id: 1, text: 'comment one' },
    { id: 2, text: 'comment two' },
    { id: 3, text: 'comment three' },
    { id: 4, text: 'comment four' },
  ]
  const showComments = false

  const commentBlock = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <div>
        <div className='container'>
          <h1>{title.toUpperCase()}</h1>
          <p>{body}</p>
          {showComments && commentBlock}
        </div>
      </div>
    </>
  )
}
export default App
