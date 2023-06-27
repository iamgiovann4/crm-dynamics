import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Perfil from './Perfil';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactsIcon from '@mui/icons-material/Contacts';
import BadgeIcon from '@mui/icons-material/Badge';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { NavLink } from 'react-router-dom';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import './MiniDrawer.css'

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const MiniDrawer = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', boxShadow: '0'}}>
            <AppBar position="fixed" open={open} sx={{ boxShadow: '0', backgroundColor: '#12121200', paddingLeft: '50px', paddingTop: '-20px', zIndex: '0', color: 'black'}}>
                <Toolbar sx={{zIndex: '0'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{display: "flex", justifyContent: "flex-end", width: '100%'}}>
                        <Perfil />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {[

                    { text: 'Início', link: '/home' },
                    { text: 'Produtos', link: '/produtos' },
                    { text: 'Clientes', link: '/clientes'},
                    { text: 'Funcionarios', link: '/funcionarios'},
                    { text: 'Produtos Vendidos', link: '/listar-vendas'},
                    { text: 'vendas', link: '/vendass'}

                      
                        ].map((item, index) => (
                        <ListItem exact="true" className="navlink" to='/' key={index} disablePadding sx={{ display: 'block'}}>
                            <ListItemButton 
                            key={item.text}
                            exact="true"
                            component={NavLink}
                            to={item.link}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    margin: '10px',
                                    borderRadius: '15px',
                                    '&:hover':{
                                        background: 'linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)',
                                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '15px',
                                        color: 'white'
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >

                                    {index % 6 === 0 ? <HomeIcon /> : 
                                    index % 6 === 1 ? <InventoryIcon /> : 
                                    index % 6 === 2 ? <ContactsIcon/> : 
                                    index % 6 === 3 ? <BadgeIcon/> : 
                                    index % 6 === 4 ? <FactCheckIcon /> : <TrendingUpIcon/>}

                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, pt: 0}}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
export default MiniDrawer