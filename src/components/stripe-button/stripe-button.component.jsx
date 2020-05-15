import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_rhqTzK8P5kWgy727SDAUAI2s00jfM2HMTb'
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return(
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd. '
      billingAddress
      shippingAddress
      image='https://i.pinimg.com/564x/d1/58/cc/d158ccef5dc0cadde05bdd0b7521a34d.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton