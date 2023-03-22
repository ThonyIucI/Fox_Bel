
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

import ListItems from './Sidebar'
import { FC, useState } from 'react'
import '../../styles/dashboard.css'

// import UserMenu from '../components/login/UserMenu'

const drawerWidth = 330
interface Props {
    window?: () => Window
    children: JSX.Element

}

const ResponsiveDrawer: FC<Props> = ({ window, children }) => {
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
                    <Toolbar sx={{background:'white'}}>
                        {/* sx={{ display: { lg: 'none' }, mr: 2 }}> */}
                        <button
                        type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark"
                            onClick={handleDrawerToggle}
                           
                            >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="row">
                            <div className="col-md-10 col-lg-6 col-xl-6 mx-auto">
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control form-control-lg rounded" placeholder="Buscar"
                                        aria-label="Type Keywords" aria-describedby="basic-addon2" />
                                    <span className="input-group-text border-0" id="basic-addon2"><i className="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>
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
