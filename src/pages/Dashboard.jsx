function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to St. Luke Hospital Management System.</p>
      <div className="cards">
        <div className="card"><h3>Patients</h3><p>View and manage patient records.</p></div>
        <div className="card"><h3>Appointments</h3><p>Track upcoming appointments.</p></div>
        <div className="card"><h3>Billing</h3><p>Review invoices and payments.</p></div>
        <div className="card"><h3>Pharmacy</h3><p>Monitor drug inventory.</p></div>
      </div>
    </div>
  )
}

export default Dashboard
