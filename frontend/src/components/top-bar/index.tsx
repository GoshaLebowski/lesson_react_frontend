import React, {FC, useContext, JSX} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, Search, NotificationsNone, MenuOutlined} from '@mui/icons-material';
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import {FlexBetween} from "../flex-beetween";
import {ITopBarProps} from "../../common/types/top-bar";

export const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen} = props
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position={'static'}>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant={'h3'}>Welcome {sessionStorage.getItem('name')}</Typography>
                </FlexBetween>
                <Box display={'flex'}>
                    <Grid className={classes.iconBlock}>
                        <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNone/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search/>
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder={'Поиск'}/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

