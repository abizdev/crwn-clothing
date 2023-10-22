import { Link } from 'react-router-dom'

import ProductCard from '../products-card/products-card.component'

import { CategoryPreviewContainer, CategoryPreviewItems } from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      <CategoryPreviewItems>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </CategoryPreviewItems>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview