"use client"
import React, { useState } from 'react'
import { useCategories } from '../hooks/useCategories'
import Category from './Category';
import { Container, Divider, Grid } from '@mui/material';
import { categoriesImages } from '@/data';

function Categories() {
    const { data: categories, isLoading, isError} = useCategories();
    const images = categoriesImages;

    if(isLoading) return <p>Loading</p>
    if(isError) return <p>Error</p>
  return (
    <div>
      <Container maxWidth="lg" >
        <Grid container sx={{
          border: "1px solid gray"
          }}
          >
      {categories
        ?.slice(0,6)
        ?.map((category: { name: string, slug: string }, index: number) => {
        const lastChild = categories.slice(0,6).length - 1 === index;
        console.log(lastChild);
        return (
          <React.Fragment key={index}>
            <Category category= {category} categoryImage = {images[index]} lastChild = {lastChild}/>
          </React.Fragment>
        )
      })}
      </Grid>
      </Container>
      
    </div>
  )
}

export default Categories
