import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { Sidebar, Videos } from './'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          px: { sx: 0, md: 2 },
          borderRight: '1px solid #3d3d3d',
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 Ducksblock
        </Typography>
      </Box>

      <Box pl={4} sx={{ overflowY: 'auto', flex: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{ color: '#F1F1F1' }}
        >
          {selectedCategory} videos
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
