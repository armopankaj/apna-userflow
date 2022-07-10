import React, { useState } from 'react'
import Modal from './components/Modal'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='App'>
        {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}

        <Modal>
        </Modal>
      </div>

    </>
  )
}