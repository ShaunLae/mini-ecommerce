"use client"
import React, { useState } from 'react'
import { useCartStore } from '../store/useCartStore';
import { Box, Button, Container, Divider, Grid, ListItem, Stack, Typography } from '@mui/material';
// import { useSumCartQuantityStore } from '../store/useSumCartQuantityStore';

function Page() {
  const { cart, totalQuantity, updateTotalQuantity } = useCartStore((state) => state);
  // console.log("cart", cart);
  // const sumTotalQuantity = () => {
  //     let cartQuantity = 0;
  //     cart.map((cartItem) => {
  //       cartQuantity += cartItem.quantity;
  //     })
  //     return cartQuantity;
  // }
  // setTotalCartQuantity();
  // getTotalQuantity();

  return (
    <div style={
      {background: 'pink'}
    }>
      <Typography variant="h4" sx={{ my: 2 }}>
       Shopping Cart
      </Typography>
      <Divider />
        <Box sx={{
          background: 'yellow'
        }}> Cart List
          <Stack spacing={2}>
            {cart.map((cart, index) => {
                return (
                  <div key={index}>{cart.title}</div>
                  
              );
              })}
          </Stack>
        </Box>
        {/* <Box> Total Quantity - {sumTotalQuantity()}</Box> */}
        <Box> Total Quantity - {totalQuantity}</Box>
        {/* <Box> 
          <Button onClick={updateTotalQuantity}>Calculate</Button>
           - {totalQuantity}</Box> */}

    </div>
  )
}

export default Page
