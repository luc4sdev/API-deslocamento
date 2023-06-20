"use client";

import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeContext } from '@/contexts/theme-context';
import { useMediaQuery } from '@mui/material';
import DrawerMenu from './Drawer';


export function Header() {

    const { newTheme, setNewTheme } = useContext(ThemeContext);
    const [checked, setChecked] = useState(true);

  const matches = useMediaQuery('(max-width:370px)');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const isCurrentDark = newTheme === 'dark';
    setNewTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };


    return (
    <Box>
      <AppBar sx={{ backgroundColor: 'primary.dark' }} position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
         <DrawerMenu openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
          <Typography fontSize={20} color='secondary.main' sx={{ flexGrow: 1 }}>{matches ? 'API' : 'API - Deslocamento'}</Typography>
          <FormGroup >
      <FormControlLabel control={<Switch onChange={handleChange} color="secondary" defaultChecked />} label={checked ? <Brightness3Icon/> : <WbSunnyIcon />} />
    </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
    )
}