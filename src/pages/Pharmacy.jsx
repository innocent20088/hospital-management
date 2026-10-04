import { useSearchParams } from 'react-router-dom'

const drugs = [
  { name: 'Amoxicillin', category: 'antibiotics', stock: 120 },
  { name: 'Ciprofloxacin', category: 'antibiotics', stock: 85 },
  { name: 'Paracetamol', category: 'painkillers', stock: 300 },
  { name: 'Ibuprofen', category: 'painkillers', stock: 200 },
  { name: 'Artemether', category: 'antimalarials', stock: 150 },
  { name: 'Quinine', category: 'antimalarials', stock: 60 },
]

function Pharmacy() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category')

  const filtered = category
    ? drugs.filter((d) => d.category === category)
    : drugs

  return (
    <div className="page">
      <h1>Pharmacy</h1>

      <div className="filters">
        <button onClick={() => setSearchParams({})}>All</button>
        <button onClick={() => setSearchParams({ category: 'antibiotics' })}>Antibiotics</button>
        <button onClick={() => setSearchParams({ category: 'painkillers' })}>Painkillers</button>
        <button onClick={() => setSearchParams({ category: 'antimalarials' })}>Antimalarials</button>
      </div>

      {category && <p>Filtering by category: <strong>{category}</strong></p>}

      <ul className="list">
        {filtered.map((d) => (
          <li key={d.name}>{d.name} — {d.category} (Stock: {d.stock})</li>
        ))}
      </ul>
      {filtered.length === 0 && <p>No drugs found.</p>}
    </div>
  )
}

export default Pharmacy
