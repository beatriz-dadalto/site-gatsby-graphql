import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    background={hit.background}
    category={hit.category}
    date={hit.date}
    description={hit.description}
  />
)

export default Hit