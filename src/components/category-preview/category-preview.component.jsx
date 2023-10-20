import { Link } from 'react-router-dom'

import ProductCard from '../products-card/products-card.component'

import { CategoryPreviewContainer, CategoryPreview } from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      <CategoryPreview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </CategoryPreview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview