import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
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
import { RiContactsFill } from 'react-icons/ri'
import { FaMoneyCheck } from 'react-icons/fa'
import { BsFillBagCheckFill } from 'react-icons/bs'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { NavLink, useLocation as location } from 'react-router-dom';
import './MiniDrawer.css'
import dynamics from '../images/Dynamics.png'

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
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', boxShadow: '0' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ boxShadow: '0', backgroundColor: '#f1f1f1', color: 'black' }}>
                <Toolbar>

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
                    </IconButton>
                    <img src={dynamics} alt="" style={{
                        marginLeft: 20,
                        ...(open && { display: 'none' }),
                    }} />
                    <Typography variant="h6" noWrap component="div" sx={{ display: "flex", justifyContent: "flex-end", width: '100%' }}>

                        <Perfil />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} sx={{ zIndex: '99999999' }}>
                <DrawerHeader >
                    <img src={dynamics} alt="" style={{
                        marginRight: 5,
                        marginTop: 10,
                        width: '75%',
                        ...(!open && { display: 'none' }),
                    }} />
                    <IconButton onClick={handleDrawerOpen}>
                        <MenuIcon sx={{ marginTop: '10px' }} />
                        {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                    </IconButton>
                </DrawerHeader>
                <List pt={0} >
                    {[

                        { text: 'Início', link: '/home' },
                        { text: 'Produtos', link: '/produtos' },
                        { text: 'Clientes', link: '/clientes' },
                        { text: 'Funcionarios', link: '/funcionarios' },
                        { text: 'Vendas', link: '/vendas' },
                        { text: 'Relatório', link: '/listar-vendas' },
                        { text: 'Contato', link: '/contato' }


                    ].map((item, index) => (
                        <ListItem
                            exact
                            to={item.link}
                            disablePadding
                            sx={{
                                display: 'block',
                                margin: '0px',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)',
                                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                    color: 'white'
                                }
                            }}
                            component={NavLink}
                        >
                            <ListItemButton
                                key={item.text}
                                exact
                                component="div"
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    margin: '10px'
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 7 === 0 ? <HomeIcon sx={{ fontSize: '24px' }} /> :
                                        index % 7 === 1 ? <InventoryIcon sx={{ fontSize: '24px' }} /> :
                                            index % 7 === 2 ? <ContactsIcon sx={{ fontSize: '24px' }} /> :
                                                index % 7 === 3 ? <BadgeIcon sx={{ fontSize: '24px' }} /> :
                                                    index % 7 === 4 ? <FaMoneyCheck size={24} /> :
                                                        index % 7 === 5 ? <BsFillBagCheckFill size={24} /> :
                                                            index % 7 === 6 ? <RiContactsFill size={24} /> : <TrendingUpIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, pt: 0 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
export default MiniDrawer