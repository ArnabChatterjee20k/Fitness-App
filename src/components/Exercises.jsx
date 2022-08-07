import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;
  
  // determining the last and starting index of the cards in the array
  const indexOfLastExercise = currentPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  
  // current exercise array
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);
  // 0 to 9 then 9 to 18. ultimately 9 post perpage

  // paginate component
  const paginate  = (e,value)=>{
    //  console.log(value)
    // here value is page number
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:"smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async()=>{
      let exercisesData = []
      if(bodyPart === "all"){
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions)
      } else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData)
    } 
    fetchExercisesData();
  }, [bodyPart])
  
  return (
    <Box id="exercises"
      sx={{ mt: { lg: "110px" } }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap" justifyContent="center">
        {
          currentExercises.map((exercise, index) => {
            // return exercise.name
            return <ExerciseCard key={index} exercise={exercise} />
          })
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            // onChange={(e)=>paginate(e,value)} // this same as paginate and this is done by mui automatically
            // e is the event and value is the page number which will be automatically passed
            onChange = {paginate}
            size="large"
            />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises