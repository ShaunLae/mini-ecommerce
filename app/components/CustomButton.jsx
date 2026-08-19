import React from 'react'
import { useCartStore } from "../store/useCartStore"
// import AddShoppingCartIcon from "@mui/icons-material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material'

function CustomButton( { product }) {
    const { cart, addToCart, updateTotalQuantity } = useCartStore((state) => state);
    // console.log("cart", cart)
  return (
    <Button
        sx={{ mt: 2}}
        variant='outlined'
        startIcon = {<ShoppingCartIcon />}
        onClick={() => {
          addToCart(product, 1); 
          updateTotalQuantity();
        }}
    >
        ADD TO CART
    </Button>
  )
}

export default CustomButton
