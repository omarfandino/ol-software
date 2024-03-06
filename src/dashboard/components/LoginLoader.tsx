import { Box, Typography } from '@mui/material';

const LOADER_TIME_SEC = 2;

export const LoginLoader = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.50)',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          color: 'common.white',
        }}
      >
        <Typography color="inherit" fontSize={30}>
          Estamos preparando todo para tí
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '10px',
            mt: '30px',

            '& > div': {
              width: '26px',
              height: '26px',
              margin: '3px 6px',
              borderRadius: '50%',
              backgroundColor: 'common.white',
              animation: `loader ${LOADER_TIME_SEC}s infinite`,
            },

            '@keyframes loader': {
              '0%': {
                transform: 'scale(1)',
              },
              '16.5%': {
                transform: 'scale(2)',
              },
              '35%': {
                transform: 'scale(1)',
              },
              '100%': {
                transform: 'scale(1)',
              },
            },

            '& > div:nth-child(2)': {
              animationDelay: `${LOADER_TIME_SEC * 0.33}s`,
            },

            '& > div:nth-child(3)': {
              animationDelay: `${LOADER_TIME_SEC * 0.66}s`,
            },
          }}
        >
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};
