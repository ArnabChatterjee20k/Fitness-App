import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

import React from 'react'

export const VideoCards = ({ channelName, time, image, link, description }) => {
    console.log(channelName)
    return (
        <Card elevation={1} sx={{maxWidth:"400px",maxHeight:"400px",textDecoration:"none"}} component="a" href={link} target="_blank">
            <CardHeader
                avatar={<Avatar>{channelName.charAt(0)}</Avatar>}
                title={channelName}
                subheader={time}
            />
            <CardMedia
                component="img"
                image={image}
                sx={{
                    maxHeight:"200px"
                }}
            />
            <CardContent>
                {
                    description && description.split("|").map((item, index) => (
                        <Typography key={index}>
                            {item}
                        </Typography>

                    ))
                }
            </CardContent>
        </Card>
    )
}
