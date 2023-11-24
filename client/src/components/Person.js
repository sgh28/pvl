import React from 'react';

function Person({ name, email, gender }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const headerStyle = {
    fontSize: '20px',
    marginBottom: '5px',
  };

  return (
    <div style={cardStyle} className="card">
      <h3 style={headerStyle}>Name: {name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  );
}

export default Person;
