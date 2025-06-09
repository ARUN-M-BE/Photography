import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Your App</h2>
        <p className="text-gray-700">This is a simple example of using Tailwind CSS with React.</p>
      </div>
      <div className="container mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
        <h3 className="text-xl font-medium mb-4">Responsive Design</h3>
        <p className="text-gray-600">Resize the window to see how the layout adapts.</p>
      </div>
    </>
  )
}

export default App
