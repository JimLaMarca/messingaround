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
    styled
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

    return(
        <Box className="userList" maxWidth={'100%'} my={1} >
                <TableContainer component={Paper} sx={{maxHeight: 466}}>
                    <Table stickyHeader aria-label="user list table">
                        <TableHead className="userList-header" sx={{backgroundColor: 'blue'}}>
                            <TableRow>
                                <ThemeTableCell align="left">User Name<SlimIconButton {...userNameOrderButtonProps} /></ThemeTableCell>
                                <ThemeTableCell align="left">Age<SlimIconButton {...ageOrderButtonProps} /></ThemeTableCell>
                                <ThemeTableCell align="left">Favorite Color<SlimIconButton {...favoriteColorOrderButtonProps} /></ThemeTableCell>
                                <ThemeTableCell align="left">Occupation<SlimIconButton {...occupationOrderButtonProps} /></ThemeTableCell>
                                <ThemeTableCell align="left">Gender<SlimIconButton {...genderOrderButtonProps} /></ThemeTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="userList-body">
                            {profileList.map((profile: UserProfile) => (
                                <ClickableRow key={profile.userName} onClick={() => {console.log(profile)}}>
                                    <TableCell align="left">{profile.userName}</TableCell>
                                    <TableCell align="left">{profile.age}</TableCell>
                                    <TableCell align="left">{profile.favoriteColor}</TableCell>
                                    <TableCell align="left">{profile.occupation}</TableCell>
                                    <TableCell align="center">{getGenderIcon(profile.gender)}</TableCell>
                                </ClickableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </Box>
    )
}