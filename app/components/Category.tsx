import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { useCategoryStore } from '../store/useCategoryStore';

type CategoryType = {
  name: string;
  slug: string;
};

interface CategoryProps {
  category: CategoryType;
  categoryImage: string;
  lastChild: boolean;
}


function Category({ category, categoryImage, lastChild }: CategoryProps) {
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const isActive = selectedCategory === category.slug;
  return (
    <Grid 
      size={{ xs: 6, md: 4, lg: 2}} 
      sx={{ 
        position: "relative",
        background: isActive ? "green" : "transparent",
        "&:nth-of-type(2n) .category-content": {
          borderRight: { xs: "none", md: "1px solid gray" },
        },
        "&:nth-of-type(3n) .category-content": {
          borderRight: { md: "none", lg: "1px solid gray" },
        },
        "&:nth-of-type(6n) .category-content": {
          borderRight: { lg: "none" },
        }
      }} 
      onClick = {() => setSelectedCategory(category.slug)}
      > 
       <Box
        sx={{
          border: "2rem solid transparent",
          width: 0,
          position: "absolute",
          bottom: "-3rem",
          left: 0,
          right: 0,
          margin: "auto",
          borderTopColor: isActive ? "green" : "transparent"
        }}
      ></Box>
      <Box 
        className="category-content"
        sx={{
          // borderRight: lastChild ? "none" : "1px solid gray",
          borderRight: "1px solid gray",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        <Image 
          src={categoryImage}
          alt={category.name}
          width={500}
          height={500}
          style={{width: 50, height: 50, margin: "auto"}}
          ></Image>
        <Typography component="h2" sx={{ mt: 2}}>
          {category.name}
        </Typography>
      </Box>
    </Grid>
  )
}

export default Category
