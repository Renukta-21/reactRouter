import { Link } from 'react-router'
import { categories } from '../mocks/recipes.json'

const HomePage = () => {
  return (
    <div>
      {categories.map((c) => (
        <Link key={c.id} to={`/categories/${c.name}`}>
          <div
            style={{
              border: '1px solid white',
              margin: '10px 0px',
              padding: '20px',
            }}
          >
            <h3>{c.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default HomePage
