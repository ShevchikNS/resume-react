import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import './navbar.css'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Skills', 'Work', 'Blog', 'Contact'];
const theme = createTheme({
    palette: {
        secondary: {
            // This is green.A700 as hex.
            main: '#000000',
        },
    },
});

function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}} className="MobileStyle">
            <Typography variant="h6" sx={{my: 2}}>
                NS
            </Typography>
            <Divider/>
            <List >
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} className="MobileButtons">
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{display: 'flex'}}>
            <ThemeProvider theme={theme}>
                <AppBar component="nav" color="secondary">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            NS
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            {navItems.map((item) => (
                                <Button key={item} className="NavigateButtons" sx={{color: '#fff'}}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>

            <Box component="nav">
                <Drawer
                    className="MobileStyle"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>

            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
