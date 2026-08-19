"use client"
import { Product } from '@/app/types/general-types'
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import CustomButton from "../CustomButton";
import { useCartStore } from '@/app/store/useCartStore';

interface ProductProps {
    product: Product
}

function ProductCard({product} : ProductProps) {
    const {id, title, price, thumbnail} = product;
    console.log("thumbnail", thumbnail);
    const { cart, addToCart } = useCartStore((state) => state);
    // console.log("cart", cart)
  return (
    <Grid 
      size={{ xs: 6, md: 4, lg: 3}} >
        <Box sx={{
            border: '1px solid gray',
            borderRadius: 2,
            textAlign: 'center',
            p: 4,
            height: "100%",
            justifyContent: "space-between",
            ":hover": {
                background: 'skyblue'
            }
        }}>
            <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={500}
                style={{width: 150, height: 150, margin: "auto"}}
            >
            </Image>
            <Typography component="h3">{title}</Typography>
            <Typography component="p">$ {price}</Typography>
            {/* <Button variant="outlined" startIcon={<ShoppingCartIcon />} sx={{mt: 2}}>
                ADD TO CART
            </Button> */}
            <CustomButton product = {product} />
        </Box>
    </Grid>
  )
}

export default ProductCard
