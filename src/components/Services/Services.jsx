import React from 'react';
import './services.css';

// Dummy service data (replace with actual data or import it)
const Services_Data = [
  {
    s_no: 1,
    s_name: 'Frontend Development',
    s_desc: 'Creating responsive and interactive user interfaces using modern web technologies like React and CSS.',
  },
 {
    s_no: 2,
    s_name:'Backend Development',
    s_desc: 'Building secure and scalable server-side applications using Node.js, Express, and MongoDB..',
  },
  {
    s_no: 3,
    s_name: 'Full Stack Web Development',
    s_desc: 'Developing complete web applications with frontend, backend, and database integration.',
  },
  {
    s_no: 4,
    s_name: 'Database Management',
    s_desc: 'Designing and managing databases using MongoDB and SQL for efficient data storage.',
  },
];

const Services = () => {
  return (
    <div id='Services'className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
