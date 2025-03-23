import React from 'react'

function Home() {
  return (
    <div className="container text-center mt-4">
      <h1 style={{fontFamily:"Arial, sans-serif", fontWeight:'bold',color:'#2c3e50'}}>Welcome to the Food Delivery App</h1>
      <img src="/food-delivery.jpg"alt="Delicious food delivery" 
        className="img-fluid mt-4" 
        style={{ maxWidth: '600px', borderRadius: '12px' }}
      />
    </div>
  )
}

export default Home
