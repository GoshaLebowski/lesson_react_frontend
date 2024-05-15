import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext, tokens} from "../../theme";

export const TopBarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext);

    return (
        <Box display={'flex'} justifyContent={'space-between'} px={'32px'} py={'24px'}>
            <Grid>Welcome Gosha</Grid>
            <Box display={'flex'}>
                <Grid
                      sx={{
                          display: 'flex',
                          pr: '37px',
                          borderRight: `1px solid ${colors.gray.DEFAULT}`
                      }}
                >
                    <IconButton sx={{mr: '45px'}} onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        backgroundColor: `${colors.primary["500"]}`,
                        borderRadius: '8px',
                        ml: '28px'
                    }}
                >
                    <IconButton sx={{'&:hover': {background: 'transparent'}}}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase sx={{px: '18px', py: '12px'}} placeholder={'Поиск'}/>
                </Grid>
            </Box>
        </Box>
    );
};
