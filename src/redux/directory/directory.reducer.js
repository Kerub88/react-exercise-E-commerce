const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      //   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl: 'https://bit.ly/2VmYQS5',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      //   imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl: 'https://bit.ly/2VrsXYC',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
}

const diretoryReducer = (state = INITIAL_STATE, action)  => {
  switch (action.type) {
    default:
      return state;
  }
}

export default diretoryReducer