import { useContext, useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Grid,
  Paper,
  Stack,
  Avatar,
  Button,
  Pagination,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItems } from '../components/ListItems';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Groups2Icon from '@mui/icons-material/Groups2';
import CloseIcon from '@mui/icons-material/Close';
import { users } from '../../data/user';
import { User } from '../../interfaces/app';
import { AuthContext } from '../../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const drawerWidth: number = 270;

const renderRows = (row: User, handleDialog: () => void) => {
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.lastName}</TableCell>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.role}</TableCell>
      <TableCell>{row.status}</TableCell>
      <TableCell>{row.phone}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell>
        <Stack
          sx={{
            flexDirection: 'row',
          }}
        >
          <IconButton onClick={() => handleDialog()}>
            <Typography sx={{ color: 'primary.main' }}>
              <EditIcon color="inherit" />
            </Typography>
          </IconButton>
          <IconButton onClick={() => handleDialog()}>
            <Typography sx={{ color: '#707070' }}>
              <DeleteIcon color="inherit" />
            </Typography>
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onLogout = () => {
    navigate('/login');
    logout();
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="absolute"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: theme.spacing(7),
            width: `calc(100% - ${theme.spacing(7)})`,
            ...(open && {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }),
          }}
        >
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor: 'common.white',
              color: 'primary.main',
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              color="inherit"
              sx={{
                marginRight: '36px',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="inherit"
              fontSize={20}
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Prueba Front-end
            </Typography>
            <Stack
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                }}
              >
                OF
              </Avatar>
              <Typography
                sx={{
                  color: '#101010',
                }}
              >
                Omar Fandiño
              </Typography>
              <IconButton
                edge="start"
                aria-label="open drawer"
                color="inherit"
                sx={{
                  marginLeft: '45px',
                }}
                onClick={() => onLogout()}
              >
                <LogoutIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: '#42adf0',
              background:
                'linear-gradient(180deg, rgba(66,173,240,1) 0%, rgba(29,67,173,1) 100%)',
              position: 'relative',
              whiteSpace: 'nowrap',
              width: drawerWidth,
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              boxSizing: 'border-box',
              ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
              }),
            },

            '& .MuiListItemIcon-root': {
              color: 'common.white',
            },
            '& .MuiListItemText-root': {
              color: 'common.white',
            },
          }}
        >
          <Toolbar
            sx={{
              '&&': {
                p: 0,
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="OLSoftware" />
            </ListItemButton>
          </Toolbar>
          <Divider
            sx={{
              borderColor: 'common.white',
              width: '90%',
              margin: '0 auto',
              color: 'common.white',
            }}
          />
          <List component="nav">
            <ListItems />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Box sx={{ m: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 1,
                  }}
                >
                  <Stack
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      color: 'primary.main',
                      pb: '40px',
                      gap: 2,
                    }}
                  >
                    <Typography
                      color="inherit"
                      sx={{
                        fontSize: 35,
                        lineHeight: 0,
                      }}
                    >
                      <Groups2Icon fontSize="inherit" />
                    </Typography>
                    <Typography
                      color="inherit"
                      fontSize={20}
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      Usuarios existentes
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: 'capitalize',
                        fontWeight: 'normal',
                      }}
                      onClick={() => handleDialog()}
                    >
                      Crear
                    </Button>
                  </Stack>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombres</TableCell>
                          <TableCell>Apellidos</TableCell>
                          <TableCell>Identificación</TableCell>
                          <TableCell>Rol Asociado</TableCell>
                          <TableCell>Estado</TableCell>
                          <TableCell>Teléfono</TableCell>
                          <TableCell>Correo Electrónico</TableCell>
                          <TableCell>Acción</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users.map((row) => renderRows(row, handleDialog))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      pt: '20px',
                    }}
                  >
                    <Pagination count={10} showFirstButton showLastButton />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: (theme) => theme.spacing(2.5, 4),
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Stack
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      color: 'primary.main',
                      pb: '40px',
                      gap: 2,
                    }}
                  >
                    <Typography
                      color="inherit"
                      sx={{
                        fontSize: 35,
                        lineHeight: 0,
                      }}
                    >
                      <Groups2Icon fontSize="inherit" />
                    </Typography>
                    <Typography
                      color="inherit"
                      fontSize={20}
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      Filtrar búsqueda
                    </Typography>
                  </Stack>
                  <Stack
                    gap={2}
                    sx={{
                      '& .MuiTypography-root': {
                        color: '#9A9A9A',
                        fontSize: '14px',
                      },
                      '& .MuiInputBase-input': {
                        p: 1.25,
                      },
                    }}
                  >
                    <Box>
                      <Typography>Nombres</Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>
                    <Box>
                      <Typography>Apellidos</Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>
                    <Box>
                      <Typography>Identificación (C.C)</Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>
                    <Box>
                      <Typography>Identificación (C.C)</Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>
                    <Box>
                      <Typography>Rol asociado</Typography>
                      <TextField fullWidth select>
                        <MenuItem value="">Rol</MenuItem>
                      </TextField>
                    </Box>
                    <Box>
                      <Typography>Estado</Typography>
                      <TextField fullWidth select>
                        <MenuItem value="">Estado</MenuItem>
                      </TextField>
                    </Box>
                    <Box>
                      <Typography>Contraseña</Typography>
                      <TextField fullWidth type="password" variant="outlined" />
                    </Box>
                    <Box>
                      <Typography>Teléfono</Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>
                    <Box>
                      <Typography>Correo electrónico</Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>
                  </Stack>
                  <Stack
                    sx={{
                      flexDirection: 'row',
                      gap: 2,
                      mt: '35px',

                      '& .MuiButtonBase-root': {
                        fontWeight: 'normal',
                        textTransform: 'capitalize',
                        width: '50%',
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        background:
                          'linear-gradient(90deg, rgba(140,195,72,1) 0%, rgba(99,155,32,1) 100%)',
                      }}
                    >
                      Filtrar
                    </Button>
                    <Button variant="outlined" color="success">
                      Limpiar
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ backgroundColor: 'common.white', p: 2, textAlign: 'right' }}
          >
            <Typography sx={{ color: '#8A8A8A' }}>OLSoftware - 2024</Typography>
          </Box>
        </Box>
      </Box>
      <Dialog onClose={handleDialog} open={openDialog} fullWidth maxWidth="md">
        <DialogTitle>
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                flexGrow: 1,
              }}
            >
              Agregar nuevo usuario
            </Typography>
            <IconButton color="error" onClick={() => handleDialog()}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack
            gap={4}
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              maxWidth: '600px',
              margin: '0 auto',

              '& .MuiTypography-root': {
                color: '#9A9A9A',
                fontSize: 14,
              },

              '& .MuiInputBase-input': {
                p: 1.25,
              },

              '& > .MuiBox-root': {
                width: '45%',
                flexGrow: 1,
              },
            }}
          >
            <Box>
              <Typography>Nombres</Typography>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box>
              <Typography>Apellidos</Typography>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box>
              <Typography>Identificación (C.C)</Typography>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box>
              <Typography>Rol asociado</Typography>
              <TextField fullWidth select>
                <MenuItem value="">Rol</MenuItem>
              </TextField>
            </Box>
            <Box>
              <Typography>Estado</Typography>
              <TextField fullWidth select>
                <MenuItem value="">Estado</MenuItem>
              </TextField>
            </Box>
            <Box>
              <Typography>Contraseña</Typography>
              <TextField fullWidth type="password" variant="outlined" />
            </Box>
            <Box>
              <Typography>Teléfono</Typography>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box>
              <Typography>Correo electrónico</Typography>
              <TextField fullWidth variant="outlined" />
            </Box>
          </Stack>
          <Stack
            sx={{
              flexDirection: 'row',
              gap: 4,
              mt: '35px',
              maxWidth: 250,
              margin: '35px auto 0',

              '& .MuiButtonBase-root': {
                fontWeight: 'normal',
                textTransform: 'capitalize',
                width: '50%',
              },
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                background:
                  'linear-gradient(90deg, rgba(140,195,72,1) 0%, rgba(99,155,32,1) 100%)',
              }}
              onClick={() => handleDialog()}
            >
              Aceptar
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={() => handleDialog()}
            >
              Cancelar
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
