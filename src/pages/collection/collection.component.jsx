import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

const CollectionPage = ({ collection }) =>  (
  <div className='collection-page'>
    <h2>{collection.title}</h2>
  </div>
)

const mapStateToProps = (state, onwProps) => ({
  collection: selectCollection(onwProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)