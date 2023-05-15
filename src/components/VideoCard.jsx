import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/Constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        width: { md: '360px', xs: '100%' },
        boxShadow: 'none',
        backgroundColor: '#101010',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : defaultVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            borderRadius: 3,
            width: 360,
            height: 202,
          }}
        />
        <CardContent sx={{ backgroundColor: '#101010', height: 106 }}>
          <Link to={videoId ? `/video/${videoId}` : defaultVideoUrl}>
            <Typography variant="subtitle1" fontWeight="500" color="#F1F1F1">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : defaultChannelUrl
            }
          >
            <Typography variant="subtitle2" color="#AAA8A4">
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard
