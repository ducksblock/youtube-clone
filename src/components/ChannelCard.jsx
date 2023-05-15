import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '360px' },
      height: '326px',
      margin: 'auto',
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#F1F1F1',
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2 }}
        />
        <Link
          to={
            channelDetail?.snippet?.channelId
              ? `/channel/${channelDetail?.snippet?.channelId}`
              : defaultChannelUrl
          }
        >
          <Typography variant="h6" color="#E1E1E1">
            {channelDetail?.snippet?.title || demoChannelTitle}
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </Link>
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard
