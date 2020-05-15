import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySection } from '../../redux/directory/directory.selector'

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
)

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStatetoProps)(Directory)