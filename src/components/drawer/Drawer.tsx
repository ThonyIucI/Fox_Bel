
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Stack,
    Toolbar,
    Typography
} from '@mui/material'

// import MenuIcon from '@mui/icons-material/Menu'

import ListItems from './ListItems'
import { FC, useState } from 'react'
import '../../styles/dashboard.css'

// import UserMenu from '../components/login/UserMenu'

const drawerWidth = 330
interface Props {
    window?: () => Window
    children: JSX.Element

}

const ResponsiveDrawer: FC<Props> = ({ window, children })=> {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false),
        handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen)
        }

    const drawer = (
         <div className="sidebar">

        
            <div className="image-container">
              
                <img src="/images/foxbel-music.png" alt="Logo FoxBel" />
                
            </div>
            <ListItems />
            </div>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    sx={{
                        ml: { lg: `${drawerWidth}px` },
                        width: { lg: `calc(100% - ${drawerWidth}px)` }
                    }}>
                    <Toolbar>
                        <IconButton
                            aria-label='open drawer'
                            color='inherit'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ display: { lg: 'none' }, mr: 2 }}>
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Stack
                            direction='row' sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>

                            <Typography component='div' noWrap variant='h6'>
                                SearchBar
                            </Typography>
                            {/* <UserMenu /> */}
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Box
                    aria-label='mailbox folders'
                    component='nav'
                    sx={{ flexShrink: { lg: 0 }, width: { lg: drawerWidth } }}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                        container={container}
                        onClose={handleDrawerToggle}
                        open={mobileOpen}
                        sx={{
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth
                            },
                            display: {
                                lg: 'none',
                                md: 'block',
                                sm: 'block',
                                xs: 'block'
                            }
                        }}
                        variant='temporary'>
                        {drawer}
                    </Drawer>
                    <Drawer
                        open
                        sx={{
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth
                            },
                            display: {
                                lg: 'block',
                                md: 'none',
                                sm: 'none',
                                xs: 'none'
                            }
                        }}
                        variant='permanent'>
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component='main'
                    sx={{
                        background: '#f5f1f6',
                        flexGrow: 1,
                        minHeight: '100vh',
                        p: 3,
                        width: { lg: `calc(100% - ${drawerWidth}px)` }
                        // minHeight: "60vh",
                    }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>

        </>
    )
}

export default ResponsiveDrawer
