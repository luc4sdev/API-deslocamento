import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AccountBox, DirectionsCar, Home, Person, SwapVert } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';

interface DrawerMenuProps {
    openDrawer: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}



export default function DrawerMenu({openDrawer, toggleDrawer } : DrawerMenuProps) {

const drawerWidth = 240;
const router = useRouter();
const pathname = usePathname()


    function handleClickButton(text: string) {
        if(text === 'Menu') {
            router.push('/'); 
        }
        if(text === 'Clientes') {
            router.push('/clients'); 
        }
        else if(text === 'Condutores') {
            router.push('/conductors'); 
        }
        else if(text === 'Deslocamentos') {
            router.push('/displacements'); 
        }
        else if(text === 'Veículos') {
            router.push('/vehicles'); 
        }
    }

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'primary.dark'
          },
        }}
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <List>
          {['Menu','Clientes', 'Condutores', 'Deslocamentos', 'Veículos'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClickButton(text)}>
                <ListItemIcon sx={{  color: pathname === '/' && text === 'Menu' ? 'secondary.main' : pathname.includes('client') && text === 'Clientes' ? 'secondary.main' : pathname.includes('conductors') && text === 'Condutores' ? 'secondary.main' : pathname.includes('displacements') && text === 'Deslocamentos' ? 'secondary.main' : pathname.includes('vehicles') && text === 'Veículos' ? 'secondary.main' : 'primary.light' }}>
                  {index === 0 ? <Home /> : index === 1 ? <AccountBox /> : index === 2 ? <Person /> : index === 3 ? <SwapVert /> : index === 4 ? <DirectionsCar /> : ''}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: pathname === '/' && text === 'Menu' ? 'secondary.main' : pathname.includes('client') && text === 'Clientes' ? 'secondary.main' : pathname.includes('conductors') && text === 'Condutores' ? 'secondary.main' : pathname.includes('displacements') && text === 'Deslocamentos' ? 'secondary.main' : pathname.includes('vehicles') && text === 'Veículos' ? 'secondary.main' : 'primary.light' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}