import {Component} from 'react'
import Header from '../Header'
import CategoryPanel from '../CategoryPanel'
import './index.css'

const categoryFiltersData = [
  {id: 'WOMENS CLOTHING', category: "Women's clothing"},
  {id: 'MENS CLOTHING', category: "Men's Clothing"},
  {id: 'FASHION CLOTHING', category: 'Fashion Clothing'},
  {id: 'WATCHES', category: 'Watches'},
  {id: 'FRESH', category: 'Fresh'},
  {id: 'GROCERIES', category: 'Groceries'},
]

class Home extends Component {
  state = {
    activeCategoryFilterId: categoryFiltersData[0].id,
    categories: [],
    cartQuantity: 0,
    cartSymbol: '+',
    previousItems: [],
  }

  componentDidMount = () => {
    this.getCategory()
  }

  changeCategoryFilter = activeCategoryFilterId => {
    this.setState({activeCategoryFilterId}, this.getCategory)
  }

  getCategory = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )
    const data = await response.json()

    // console.log(data)

    const {categories} = data

    this.setState({
      categories,
    })
  }

  onClickItem = () => {
    const {cartSymbol, cartQuantity, previousItems} = this.state

    if (cartSymbol === '+') {
      this.setState({
        cartSymbol: '-',
        cartQuantity: cartQuantity - 1,
      })
    } else {
      this.setState({
        cartSymbol: '+',
        cartQuantity: cartQuantity + 1,
      })
    }
  }

  render() {
    const {activeCategoryFilterId, cartSymbol, categories} = this.state

    return (
      <div className="home">
        <Header />
        <ul className="ul-list">
          {categoryFiltersData.map(eachFilter => (
            <CategoryPanel
              key={eachFilter.id}
              isActive={activeCategoryFilterId === eachFilter.id}
              filterItem={eachFilter}
              changeCategoryFilter={this.changeCategoryFilter}
            />
          ))}
        </ul>
        <div>
          {categories.map(eachCategory => (
            <>
              <h1 className="category-heading">{eachCategory.name}</h1>
              <ul className="ul-list-2">
                {eachCategory.products.map(eachProduct => (
                  <li
                    id={eachCategory.name}
                    href="#"
                    target={activeCategoryFilterId}
                    className="li-item-2"
                  >
                    <p className="symbol">
                      <img
                        src={eachProduct.image}
                        alt="product-img"
                        className="img"
                      />
                      <button
                        type="button"
                        onClick={this.onClickItem}
                        className="green-bg"
                      >
                        {cartSymbol}
                      </button>
                    </p>
                    <div>
                      <p className="bold">{eachProduct.price}</p>
                      <p>{eachProduct.name}</p>
                      <p>{eachProduct.weight}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
