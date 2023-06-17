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
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';


export function Header() {

    const { newTheme, setNewTheme } = useContext(ThemeContext);
    const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const isCurrentDark = newTheme === 'dark';
    setNewTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link style={{ textDecoration: 'none', color: '#000'}} href='/clients'>
        <MenuItem onClick={handleClose}>Clientes</MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: '#000'}} href='/conductors'>
        <MenuItem onClick={handleClose}>Condutores</MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: '#000'}} href='/displacements'>
        <MenuItem onClick={handleClose}>Deslocamentos</MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: '#000'}} href='/vehicles'>
        <MenuItem onClick={handleClose}>Veículos</MenuItem>
        </Link>
       
      </Menu>
          <Typography fontSize={20} color='secondary' sx={{ flexGrow: 1 }}>API - Deslocamento</Typography>
          <FormGroup >
      <FormControlLabel control={<Switch onChange={handleChange} color="secondary" defaultChecked />} label={checked ? <Brightness3Icon/> : <WbSunnyIcon />} />
    </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
    )
}