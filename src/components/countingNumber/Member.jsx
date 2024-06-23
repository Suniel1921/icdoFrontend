// Members.js
import React from 'react';
import '../countingNumber/member.css'

const Members = () => {
  const membersData = [
    { name: 'John Doe', position: 'Project Manager' },
    { name: 'Jane Smith', position: 'Software Developer' },
    { name: 'Sam Johnson', position: 'Designer' },
    { name: 'Nancy Wilson', position: 'QA Engineer' },
  ];

  return (
    <div className='membersContainer'>
      <div className="container">
        <h2>Members</h2>
        <table className="membersTable">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {membersData.map((member, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
