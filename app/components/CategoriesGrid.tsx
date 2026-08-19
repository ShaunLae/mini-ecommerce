"use client"
import React from 'react'
import { useCategories } from '../hooks/useCategories'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(() => ({
  // backgroundColor: 'green',
  // borderRadius: 'none',
  // textAlign: 'center',
}));

const custom = {
  height: '200px',
  width: '200px',
  backgroundColor: 'green',
  position: 'relative'
}
const activeState = {
  height: '40px',
  width: '40px',
  backgroundColor: 'yellow',
  position: 'absolute'
}

function CategoriesGrid() {
    const { data: categories, isLoading, isError} = useCategories();

    if(isLoading) return <p>Loading</p>
    if(isError) return <p>Error</p>
  return (
    <div>
      <Grid container>
        {categories?.slice(0,6)?.map((category: { name: string }, index: number) => (
          <Grid key={index} size={2} sx={custom}>
            <Item sx={{border: 0, backgroundColor: 'pink'}}>{category.name} {index}</Item>
            <div style={activeState}></div>
          </Grid>
        ))}
      </Grid>
    </div>


  )
}

export default CategoriesGrid
