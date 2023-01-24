import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function CardTop({ data , index }) {


  return (
    <Card elevation={4} sx={{
        backgroundColor : `rgba(82 , 226 , 238 , ${4 / (index + 1)})`,
        borderRadius : '1rem',
        position : 'relative'
    }}>
        <CardContent sx={{ 
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
            height : '75%'
     }}>
            <Typography noWrap textOverflow='ellipsis' sx={{ width : '20rem' }} variant='h5'>{index + 1}.) {data.title}</Typography>
            <Typography sx={{
                backgroundColor : '#fff',
                borderRadius : '100%',
                width : '1rem',
                height : '1rem',
                padding : '1rem',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center'
            }} variant='h5'>{data.votes}</Typography>
        </CardContent>
    </Card>
  )
}

export default CardTop