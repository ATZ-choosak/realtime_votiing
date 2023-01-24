import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardTopic({ Topic }) {
    return (
        <Card elevation={5}>
            <CardContent>
                <Typography variant="h5" component="div" align='center' >
                    {Topic}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardTopic