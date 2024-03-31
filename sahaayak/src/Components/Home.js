import React from 'react'
import './HomePage.css';

function Home() {
  return (
    <div className="home-page">
      <h1 className='welcome'>Welcome to Mental Health Support!</h1>
      <p>
        Mental health is important. If you're struggling, you're not alone. Here are some tips to help you cope:
      </p>
      <div className="tip">
        <h2>Practice Self-Care</h2>
        <p>Take time for yourself. Engage in activities that bring you joy and relaxation.</p>
      </div>
      <div className="tip">
        <h2>Reach Out</h2>
        <p>Don't be afraid to ask for help. Talk to a friend, family member, or mental health professional.</p>
      </div>
      <div className="tip">
        <h2>Stay Active</h2>
        <p>Physical activity can improve your mood. Try to incorporate exercise into your routine.</p>
      </div>
      <div className="tip">
        <h2>Practice Mindfulness</h2>
        <p>Stay present and focus on the here and now. Mindfulness can help reduce stress and anxiety.</p>
      </div>
      <div className="tip">
        <h2>Seek Professional Help</h2>
        <p>If you're struggling to cope, don't hesitate to seek professional support. Therapy and counseling can make a difference.</p>
      </div>
      <p className='remember'>
        Remember, it's okay not to be okay. Take things one step at a time, and know that there is hope and help available.
      </p>
    </div>
  )
}

export default Home
