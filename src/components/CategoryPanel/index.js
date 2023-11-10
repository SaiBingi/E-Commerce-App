import './index.css'

const CategoryPanel = props => {
  const {filterItem, isActive, changeCategoryFilter} = props
  const {id, category} = filterItem

  const activeCategoryFilterClassName = isActive
    ? 'active-category-filter-button'
    : ''

  const onClickCategory = () => changeCategoryFilter(id)

  return (
    <li>
      <button
        type="button"
        className={`${activeCategoryFilterClassName} category-button`}
        onClick={onClickCategory}
      >
        {category}
      </button>
    </li>
  )
}

export default CategoryPanel
