import React, { useState } from 'react'
import { Box } from '@mui/system'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />

    </Box>
  )
}

export default Home