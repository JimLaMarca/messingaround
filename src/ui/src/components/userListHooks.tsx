import React, {useState} from "react";
import {IconButtonProps} from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export type GenderOptions = 'male' | 'female' | 'other';

export type UserProfileFields = 'userName' | 'age' | 'favoriteColor' | 'occupation' | 'gender';

export type UserProfile = {
    id: number
    userName: string
    age: number
    favoriteColor: string
    occupation: string
    gender: GenderOptions
}

type UserListHooksReturn = {
    profileList: UserProfile[]
    userNameOrderButtonProps: IconButtonProps,
    favoriteColorOrderButtonProps: IconButtonProps,
    ageOrderButtonProps: IconButtonProps,
    occupationOrderButtonProps: IconButtonProps,
    genderOrderButtonProps: IconButtonProps,
}

type UseUserListHooksProps = {
    userList: UserProfile[];
}

export function useUserListHooks(props: UseUserListHooksProps): UserListHooksReturn {
    const {userList} = props;
    const [orderBy, setOrderBy] = useState<UserProfileFields | null>(null)
    const [ascendingOrder, setAscendingOrder] = useState<boolean>(true)

    if(orderBy === 'age') {
        userList.sort((a,b) =>  ascendingOrder ?  a.age - b.age : b.age - a.age)
    } else if (!!orderBy){
        if (ascendingOrder) {
            userList.sort((a, b) => (b[orderBy] > a[orderBy]) ? 1 : ((a[orderBy] > b[orderBy] ? -1 : 0)))
        } else {
            userList.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : ((b[orderBy] > a[orderBy] ? -1 : 0)))
        }
    }

    const getOrderButtonProps = (field: UserProfileFields): IconButtonProps => {
        const sortOrder = orderBy === field ? !ascendingOrder : false
        return {
            children: orderBy === field && ascendingOrder ? <ArrowDropUpIcon/>: <ArrowDropDownCircleIcon />,
            onClick: () => {
                setOrderBy(field);
                setAscendingOrder(sortOrder)}
        }
    }

    const userNameOrderButtonProps = getOrderButtonProps('userName')
    const ageOrderButtonProps = getOrderButtonProps('age')
    const favoriteColorOrderButtonProps = getOrderButtonProps('favoriteColor')
    const occupationOrderButtonProps = getOrderButtonProps('occupation')
    const genderOrderButtonProps = getOrderButtonProps('gender')



    return {
        profileList: userList,
        userNameOrderButtonProps,
        favoriteColorOrderButtonProps,
        ageOrderButtonProps,
        occupationOrderButtonProps,
        genderOrderButtonProps
    }
}
