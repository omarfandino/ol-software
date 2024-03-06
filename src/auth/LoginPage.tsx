import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginLoader } from '../dashboard/components/LoginLoader';

export const LoginPage = () => {
  const [isLoading] = useState(false);

  return (
    <>
      {isLoading && <LoginLoader />}
      <Box
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '300%',
            borderRadius: '100%',
            transform: 'translate(-15%,-70%)',
            overflow: 'hidden',

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'common.black',
              zIndex: 1,
              opacity: 0.15,
            },

            '& img': {
              position: 'absolute',
              bottom: '0%',
              left: '0%',
              width: '100%',
              height: '50%',
              objectFit: 'cover',
            },
          }}
        >
          <img src="public/background.jpg" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 0.8,
          }}
        >
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Stack
              sx={{
                p: '55px',

                '.MuiTypography-root': {
                  color: 'common.white',
                },
              }}
            >
              <Typography fontSize={30}>Aplicación</Typography>
              <Typography fontSize={30}>OLSoftware</Typography>
              <Typography
                fontSize={16}
                sx={{
                  mt: '35px',
                }}
              >
                Prueba práctica Front-end Senior
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: 'column',
                width: 375,
                backgroundColor: 'common.white',
                borderRadius: '50px',
                p: '55px',
                boxShadow: '0px 0px 25px 0px rgba(135,135,135,0.4)',
              }}
            >
              <Typography
                align="center"
                fontSize={26}
                sx={{ mb: '50px', color: '#434343' }}
              >
                Inicio de sesión
              </Typography>
              <Stack
                sx={{
                  boxShadow: '0px 0px 10px 0px rgba(135,135,135,0.4)',

                  '.MuiOutlinedInput-notchedOutline': {
                    border: 0,
                    borderRadius: 0,
                  },

                  '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                    {
                      borderWidth: '0 0 2px',
                    },
                }}
              >
                <OutlinedInput
                  placeholder="Usuario"
                  endAdornment={
                    <InputAdornment position="end">
                      <PersonOutlineOutlinedIcon
                        sx={{
                          color: '#8A8A8A',
                        }}
                      />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                <Divider sx={{ borderBottomWidth: 2 }} />
                <OutlinedInput
                  placeholder="Contraseña"
                  endAdornment={
                    <InputAdornment position="end">
                      <LockOutlinedIcon
                        sx={{
                          color: '#8A8A8A',
                        }}
                      />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </Stack>
              <Button
                variant="contained"
                sx={{
                  mt: '35px',
                  p: '10px 16px',
                  textTransform: 'capitalize',
                  fontWeight: 'normal',
                }}
              >
                Iniciar Sesion
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            width: 1,
            color: '#374044',
            mb: '35px',
          }}
        >
          <Typography align="center" fontSize={13} color="inherit">
            OLSoftware - 2024
          </Typography>
        </Box>
      </Box>
    </>
  );
};
