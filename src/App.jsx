import { CarouselDemo } from './components/demo/CarouselDemo'
import { Button } from './components/ui/button'
import { InputDemo } from './components/demo/InputDemo'
import React from 'react'
import { InputOTPDemo } from './components/demo/InputOTPDemo'

function App() {
  return (
    <>
      <div className="px-20 py-10 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold pd-2">
          Welcome to Shadcn UI with Vite and React!
        </h2>
        <div className="m-5 flex items-center">
          <Button>Button</Button>
        </div>
        <div className="m-5 flex items-center">
          <InputDemo />
        </div>
        <div className="m-5 flex items-center">
          <InputOTPDemo />
        </div>
        <CarouselDemo></CarouselDemo>
      </div>
    </>
  )
}

export default App
