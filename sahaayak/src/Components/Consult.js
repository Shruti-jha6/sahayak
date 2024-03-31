import React from 'react';
import './Consult.css'; // Import CSS file for styling

function Consult() {
  const NGOs = [
    {
      name: "Mind Matters",
      description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
      date: "Every Wednesday",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
    },
    {
      name: "Healing Hearts Foundation",
      description: "Healing Hearts Foundation offers monthly group therapy sessions for anxiety and depression.",
      date: "First Saturday of every month",
      time: "2:00 PM - 4:00 PM",
      location: "123 Main St, City",
    },
    {
        name: "Calmness",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:00 AM - 4:00 PM",
        location: "Online",
      },
      {
        name: "AArogya",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:30 AM - 12:00 PM",
        location: "Online",
      },
      {
        name: "Aarohan",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "11:00 AM - 12:00 PM",
        location: "Online",
      },
      {
        name: "chillax",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:00 AM - 12:00 PM",
        location: "Online",
      },
      {
        name: "peace",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:00 AM - 12:00 PM",
        location: "Online",
      },
      {
        name: "Mind Matters",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:00 AM - 12:00 PM",
        location: "Online",
      },
      {
        name: "Mind Matters",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:00 AM - 12:00 PM",
        location: "Online",
      },
      {
        name: "Mind Matters",
        description: "Mind Matters conducts weekly sessions on stress management and mindfulness techniques.",
        date: "Every Wednesday",
        time: "10:00 AM - 12:00 PM",
        location: "Online",
      },
    // Add more NGOs as needed
  ];

  return (
    <div className="consult">
      <h1>NGOs Conducting Mental Health Sessions</h1>
      {NGOs.map((ngo, index) => (
        <div className="ngo" key={index}>
          <h2>{ngo.name}</h2>
          <p>{ngo.description}</p>
          <p><strong>Date:</strong> {ngo.date}</p>
          <p><strong>Time:</strong> {ngo.time}</p>
          <p><strong>Location:</strong> {ngo.location}</p>
          <button className="attend-button">Attend Session</button>
          <button className="connect-button">Contact them</button>
        </div>
      ))}
    </div>
  );
}

export default Consult;

