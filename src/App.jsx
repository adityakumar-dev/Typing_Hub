import { useEffect, useState } from 'react'
import getParagraphApi from './Apis/getParagraph.api'
function App() {
  useEffect(() => {
    getParagraphApi();
  })
  return (
    <>
      <div className="contnaier-fluid">
        <p>Hello</p>
      </div>
    </>
  )
}

export default App
