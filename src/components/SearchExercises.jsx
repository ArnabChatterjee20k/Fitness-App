import { Box,Button,Stack,TextField,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions , fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises ,bodyPart,setBodyPart}) => {
    const [search, setSearch] = useState("")
    const [bodyparts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async()=>{
            const bodyPartData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);
            setBodyParts(["all",...bodyPartData]);
        }
        fetchExerciseData();
    }, [])
    
    const handleSearch = async()=>{
        if(search){
            // we are taking all exercises then finding the exercise that matches it
            const url = `https://exercisedb.p.rapidapi.com/exercises` // getting all exercises
            const exerciseData = await fetchData(url,exerciseOptions);
            const searchedExercises = exerciseData.filter(
                (exercise) => 
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
                );
            setSearch("");
            setExercises(searchedExercises);
        }
    }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="Center" p="20px">
        <Typography mb="50px" fontWeight={600} textAlign="center" sx={{fontSize:{lg:"44px",xs:"30px"}}}>
            Awesome Exercise You<br/> Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
                type="text"
                value={search}
                onChange={e=>{setSearch(e.target.value)}}
                placeholder="Search Exercises...."
                sx={{
                    input:{
                        fontWeight:"700",
                        border:"none",
                        borderRadius:"4px",
                    },
                    width:{lg:"800px",xs:"350px"},
                    backgroundColor:"#fff",
                    borderRadius:"40px"
                }}
            />
            <Button 
                onClick = {handleSearch}
                className='search-btn'
                sx={{
                    bgcolor:"#ff2625",
                    color:'#fff',
                    textTransform:"none",
                    width:{lg:"175px",xs:"80px"},
                    fontSize:{lg:"20px",xs:"14px"},
                    height:"56px",
                    position:"absolute",
                    right:0
                }}
                >
                Search
            </Button>
        </Box>
        <Box sx={{position:"relative" , width:"100%",p:"20px"}}>
                <HorizontalScrollbar isBodyParts={true} data={bodyparts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises