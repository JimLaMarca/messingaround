import './userList.scss'

import React, {FC} from "react";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Paper,
    IconButton,
    styled, Typography, IconButtonProps
} from '@mui/material'
import {GenderOptions, UserProfile, useUserListHooks} from "./userListHooks";

type UserListProps = {
    userList: UserProfile[];
}

export const UserList: FC<UserListProps> = (props: UserListProps) => {
    const {userList} = props

        const {profileList, userNameOrderButtonProps, favoriteColorOrderButtonProps, ageOrderButtonProps, occupationOrderButtonProps, genderOrderButtonProps} = useUserListHooks({userList})
    const getGenderIcon = (gender: GenderOptions): JSX.Element => {
        if (gender === 'male') {
            return <MaleIcon/>
        } else if (gender === 'female') {
            return <FemaleIcon/>
        } else {
            return <div/>
        }
    }

    const ThemeTableCell = styled(TableCell)(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }));

    const SlimIconButton = styled(IconButton)(({theme}) => ({
        padding: 0,
        marginLeft: theme.spacing(1)
    }));

    const ClickableRow = styled(TableRow)(()=> ({
        "&:hover": {
            backgroundColor: 'lightseagreen !important'
        },
        "&:active":{
            backgroundColor: 'teal !important',
            border: '1px solid black'
        }
    }))

    const HeaderRow = (props: {title: string, buttonProps: IconButtonProps}) => {
        const {title, buttonProps} = props;
        return (
            <ThemeTableCell align="left">
                <Typography variant="body2" noWrap>{title}<SlimIconButton {...buttonProps} /></Typography>
            </ThemeTableCell>
        )
    }

    return(
        <Box className="userList" maxWidth={'100%'} my={1} >
                <TableContainer component={Paper} sx={{maxHeight: 466}}>
                    <Table stickyHeader aria-label="user list table">
                        <TableHead className="userList-header" sx={{backgroundColor: 'blue'}}>
                            <TableRow>
                                <HeaderRow title={'User Name'} buttonProps={userNameOrderButtonProps}/>
                                <HeaderRow title={'Age'} buttonProps={ageOrderButtonProps}/>
                                <HeaderRow title={'Favorite Color'} buttonProps={favoriteColorOrderButtonProps}/>
                                <HeaderRow title={'Occupation'} buttonProps={occupationOrderButtonProps}/>
                                <HeaderRow title={'Gender'} buttonProps={genderOrderButtonProps}/>
                            </TableRow>
                        </TableHead>
                        <TableBody className="userList-body">
                            { !!profileList ? profileList.map((profile: UserProfile) => (
                                <ClickableRow key={profile.userName} onClick={() => {console.log(profile)}}>
                                    <TableCell align="left">{profile.userName}</TableCell>
                                    <TableCell align="left">{profile.age}</TableCell>
                                    <TableCell align="left">{profile.favoriteColor}</TableCell>
                                    <TableCell align="left">{profile.occupation}</TableCell>
                                    <TableCell align="center">{getGenderIcon(profile.gender)}</TableCell>
                                </ClickableRow>
                            )) : null}
                        </TableBody>
                    </Table>
                </TableContainer>
        </Box>
    )
}