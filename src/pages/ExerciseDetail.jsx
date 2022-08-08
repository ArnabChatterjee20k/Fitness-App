import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import {fetchData,exerciseOptions,youtubeOptions} from "../utils/fetchData"
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const exerciseDBURL = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`

      const exerciseDetailData = await fetchData(`${exerciseDBURL}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData);

      // videos
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents);
    }
    fetchExercisesData();
  },[id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail