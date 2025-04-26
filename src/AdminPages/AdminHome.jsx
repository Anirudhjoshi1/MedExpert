import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import '../styles/AdminHome.css'
import { IoIosNotifications } from "react-icons/io";

const AdminHome = () => {
  const clients = [
    { id: '#001', name: 'Leslie Alexander', email: 'leslie@acme.com', phone: '4', signup: '2023-09-14', type: 'Regular', status: 'Active' },
    { id: '#002', name: 'Ronald Richards', email: 'ronald@summit.com', phone: '4', signup: '2023-09-14', type: 'Premium', status: 'Unactive' },
    { id: '#003', name: 'Brooklyn Simmons', email: 'brooklyn@brightstar.com', phone: '4', signup: '2023-09-14', type: 'Regular', status: 'Unactive' },
    { id: '#004', name: 'Cameron Williamson', email: 'cameron@zenith.com', phone: '4', signup: '2023-09-12', type: 'Premium', status: 'Active' },
    { id: '#005', name: 'Esther Howard', email: 'esther@bastergo.com', phone: '4', signup: '2023-09-12', type: 'Premium', status: 'Active' },
  ];


  return (
    <>
    <div className='dashboard'>
        <AdminSidebar/>
        <div className="admin-container">
          <h2 className='admin-heading'>ADMIN DASHBOARD</h2>
      <div className="overview-cards">
        <div className="card">
          <h3>Total Trainers</h3>
          <p>5</p>
        </div>
        <div className="card">
          <h3>Total Trainees</h3>
          <p>20</p>
        </div>
        <div className="card">
          <h3>Active Products</h3>
          <p>5</p>
        </div>
        <div className="card">
          <h3>Pending Evaluations</h3>
          <p>3</p>
        </div>
      </div>

      <div className="section">
        <h2>Trainers Activity</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Trainer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Assigned Trainees</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
         
                <td><span className={`status ${client.status.toLowerCase()}`}>{client.status}</span></td>
                <td>
  
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
    </div>
    </>
  )
}

export default AdminHome