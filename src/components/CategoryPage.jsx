import { Link, useNavigate, useParams } from "react-router"
import {recipes} from '../mocks/recipes.json'

const CategoryPage = () => {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  if (!categoryName) {
    return <p>Invalid category name!</p>
  }

  const categoryRecipes = recipes.filter((r) => r.category === categoryName)
  if (categoryRecipes.length === 0) {
    return 'No recipes found in this category'
  }

  return (
    <div>
      <h2>{categoryName} Category 🙂 </h2>
      <button onClick={() => navigate('/')}>Back to categories menu</button>
      <div>
        {categoryRecipes.map((r) => (
          <Link key={r.id} to={`/recipe/${r.id}`}>
            <div
              style={{
                border: '1px solid white',
                margin: '10px 0px',
                padding: '20px',
              }}
            >
              <h3>Recipe: {r.title}</h3>
              <p>{r.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
