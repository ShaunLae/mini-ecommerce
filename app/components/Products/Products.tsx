"use client"
import { useProductByCategory } from '@/app/hooks/useProductByCategory'
import { Product } from '@/app/types/general-types';
import React from 'react'
import ProductCard from './ProductCard';
import { useCategoryStore } from '@/app/store/useCategoryStore';
import { Container, Grid } from '@mui/material';

function Products() {
    const selectedCategory = useCategoryStore();
    const {data: productData, isLoading, isError} = useProductByCategory();
    console.log(productData);
  return (
    <div style={
        {marginTop : '3rem',
        }
    }>
        <Container maxWidth="lg" >
        <Grid container spacing={2} sx={{alignItems: "stretch"}}>
        {selectedCategory && (
            <>
            { isLoading ? (
                <p>Loading ... </p>
            ) : productData?.products.length > 0 ? (
                productData?.products?.map((product: Product, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <ProductCard product={product} />
                    </React.Fragment>
                );
            })
            ) : (
                <p>No Product</p>
            )}
            </>
        )}
        </Grid>
        </Container>
    </div>
  );
}

export default Products
