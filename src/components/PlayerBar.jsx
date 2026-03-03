import { Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';


function PlayerBar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: '#181818',
        borderTop: '1px solid #333',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box flex={1}>
        <Typography variant="subtitle1">Currently playing song title</Typography>
        <Typography variant="body2" color="gray">Artist name</Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <IconButton><SkipPreviousIcon /></IconButton>
        <IconButton sx={{ bgcolor: '#1DB954', borderRadius: '50%' }}>
          <PlayArrowIcon />
        </IconButton>
        <IconButton><SkipNextIcon /></IconButton>
      </Box>

      <Box flex={1} textAlign="right">
        {/* Progress bar placeholder */}
        <Typography variant="body2">0:00 / 3:45</Typography>
      </Box>
    </Box>
  );
}

export default PlayerBar;