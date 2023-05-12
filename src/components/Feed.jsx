import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          px: { sx: 0, md: 2 },
          borderRight: '1px solid #3d3d3d',
        }}
      >
        <Sidebar />
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
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          New
        </Typography>

        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed
