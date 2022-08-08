import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import React from 'react'

const LoadingCard = () => {
    return (
        <Card sx={{ width: 345,height:200, m: 2 }}>
            <CardHeader
                avatar={<Skeleton animation="wave" variant='circular' width={40} height={40} />}
                title={<Skeleton
                    animation="wave"
                    height={100}
                    width="80%"
                    style={{ marginBottom: 6 }}
                />}
                subheader={
                    <Skeleton animation="wave" height={10} width="40%" />

                }
            />
            <CardContent>
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
            </CardContent>
        </Card>
    )
}

export default LoadingCard