import { Link, useSearchParams } from 'react-router-dom'

const patients = [
  { id: 1, name: 'Jean Bosco', status: 'admitted', ward: 'General' },
  { id: 2, name: 'Marie Claire', status: 'discharged', ward: 'Maternity' },
  { id: 3, name: 'Peter Nkusi', status: 'admitted', ward: 'Surgery' },
  { id: 4, name: 'Alice Uwase', status: 'outpatient', ward: 'OPD' },
  { id: 5, name: 'Eric Habimana', status: 'admitted', ward: 'Pediatrics' },
]

function Patients() {
  const [searchParams, setSearchParams] = useSearchParams()
  const status = searchParams.get('status')

  const filtered = status
    ? patients.filter((p) => p.status === status)
    : patients

  return (
    <div className="page">
      <h1>Patients</h1>

      <div className="filters">
        <button onClick={() => setSearchParams({})}>All</button>
        <button onClick={() => setSearchParams({ status: 'admitted' })}>Admitted</button>
        <button onClick={() => setSearchParams({ status: 'discharged' })}>Discharged</button>
        <button onClick={() => setSearchParams({ status: 'outpatient' })}>Outpatient</button>
      </div>

      {status && <p>Filtering by status: <strong>{status}</strong></p>}

      <ul className="list">
        {filtered.map((p) => (
          <li key={p.id}>
            <Link to={`/patients/${p.id}`}>{p.name}</Link> — {p.status} ({p.ward})
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p>No patients found.</p>}
    </div>
  )
}

export default Patients
