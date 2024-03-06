import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TuneIcon from '@mui/icons-material/Tune';
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';

export const ListItems = () => (
  <>
    <ListItemButton>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Programación" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Gestión de Operaciones" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TuneIcon />
      </ListItemIcon>
      <ListItemText primary="Perfiles" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: 20,
			textIndent: '5px'
          }}
        >
          R
        </Typography>
      </ListItemIcon>
      <ListItemText primary="Roles" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: 20,
			textIndent: '5px'
          }}
        >
          U
        </Typography>
      </ListItemIcon>
      <ListItemText primary="Usuario" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InsertDriveFileSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItemButton>
  </>
);
