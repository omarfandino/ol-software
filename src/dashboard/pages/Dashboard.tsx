import { useState } from 'react';
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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItems } from '../components/ListItems';

const drawerWidth: number = 270;

export const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
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
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  CHART
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  DEPOSIRT
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  ORDES
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
