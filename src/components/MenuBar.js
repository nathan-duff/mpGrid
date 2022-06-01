import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

export default function MenuBar() {
    let location = useLocation();
    let title = "Home";
    if (location.pathname === "/grid") {
        title = "MPs";
    }
    if (location.pathname === "/table") {
        title = "Data";
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ }) => ({
        '& .MuiPaper-root': {
            backgroundColor: "#C84B31",
        },
    }));

    return (
        <Box sx={{ flexGrow: 1, color: "red" }} >
            <AppBar position="fixed" color='secondary'>
                <Toolbar></Toolbar>
            </AppBar>
            <AppBar position="fixed" height="100" sx={{ top: 12 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <StyledMenu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to={"/"} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose} sx={{color: 'white'}}>Home</MenuItem></Link>
                        <Link to={"/grid"} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose} sx={{color: 'white'}}>MP</MenuItem></Link>
                        <Link to={"/table"} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose} sx={{color: 'white'}}>Data</MenuItem></Link>
                    </StyledMenu>
                    <Typography variant="h4" component="div" sx={{ flexGrow: .025 }}>
                        {title}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to={"/"} style={{ textDecoration: 'none' }}><Button variant='contained' disableElevation>Home</Button></Link>
                        <Link to={"/grid"} style={{ textDecoration: 'none' }}><Button variant='contained' disableElevation>MP</Button></Link>
                        <Link to={"/table"} style={{ textDecoration: 'none' }}><Button variant='contained' disableElevation>Data</Button></Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />

        </Box >
    );
}
