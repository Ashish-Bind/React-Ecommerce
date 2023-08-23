import React from 'react'

function FormatPrice({ price }) {
  const formattedPrice = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(price / 100)

  return formattedPrice
}

export default FormatPrice
