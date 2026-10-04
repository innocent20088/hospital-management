import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'

function PatientDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="page">
      <h1>Patient Details</h1>
      <p>Patient ID: {id}</p>

      <div className="subnav">
        <NavLink to="history">History</NavLink>
        <NavLink to="billing">Billing</NavLink>
      </div>

      <Outlet />

      <button className="back-btn" onClick={() => navigate('/patients')}>
        ← Back to Patients
      </button>
    </div>
  )
}

export default PatientDetails
