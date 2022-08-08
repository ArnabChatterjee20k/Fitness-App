import React from 'react'
import { VideoCards } from './VideoCards'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import LoadingCard from './LoadingCard'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" }
        }}
      >
        
        <Grid container gap={5} width="100%" justifyContent="center">
        {exerciseVideos.length == 0 && <LoadingCard/>}
        {exerciseVideos.length != 0 && exerciseVideos?.slice(0, 6).map((item, index) => {
          return <Grid sx={{boxShadow:1,":hover":{boxShadow:2,transform:"translateY(-10px)"}}}  item md={3}>
             <VideoCards
              key={index}
              channelName={item.video.channelName}
              image={item.video.thumbnails[0].url}
              link={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              time={item.video.publishedTimeText}
              description={item.video.description} />
          </Grid>
        })}
        </Grid>
      </Stack>
    </Box>
  )
}

export default ExerciseVideos