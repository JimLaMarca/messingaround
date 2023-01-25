import {FieldValues, SubmitHandler, useForm, UseFormReturn} from "react-hook-form";
import {MenuItem, TextFieldProps} from "@mui/material";
import {getUserList, postUserForm} from "./data/dataAccess";
import {GenderOptions, UserProfile} from "./userListHooks";
import {useState} from "react";


export type userFormInput = {
    userName: string;
    age?: number;
    favoriteColor: string;
    occupation: string;
    gender?: GenderOptions
}

type UserFormHooksReturn = {
    formInformation:  UseFormReturn<userFormInput>
    handleSubmit: SubmitHandler<FieldValues>
    handleReset: () => void
    userNameData: TextFieldProps
    ageData: TextFieldProps
    favoriteColorData: TextFieldProps
    occupationData: TextFieldProps
    genderData: TextFieldProps
    error: string | null

}

type UserInputFormHooksProps = {
    userList: UserProfile[]
    setUserList: (userList: UserProfile[]) => void
}

export const UseInputFormHooks = (props: UserInputFormHooksProps): UserFormHooksReturn => {
    const {setUserList} = props

    const [error, setError] = useState<string | null>(null)

    const defaultValues: userFormInput = {
        userName: '',
        age: undefined,
        favoriteColor: '',
        occupation: '',
        gender: undefined
    }
    const formInformation = useForm<userFormInput>({mode: "onChange" , defaultValues});
    const {register, reset} = formInformation



    const handleSubmit: SubmitHandler<FieldValues> = (formState) => {
        try {
            postUserForm(formState).then(() => {
                getUserList().then(updatedUserList => {
                    setUserList(updatedUserList)
                })
                formInformation.reset()
            })
        } catch  {
            setError('Submission Failed')
        }
        return
    }

    const handleReset = () => {
        reset(defaultValues)
    }

    const userNameData: TextFieldProps = {
        id: 'userName',
        label: 'User Name',
        required: true,
        ...register('userName', {required: true})
    }

    const ageData: TextFieldProps = {
        id: 'age',
        label: 'Age',
        required: true,
        type: "number",
        ...register('age', {required: true, min:0, max: 150})
    }

    const favoriteColorData: TextFieldProps = {
        id: 'favoriteColor',
        label: 'Favorite Color',
        required: true,
        ...register('favoriteColor', {required: true})
    }

    const occupationData: TextFieldProps = {
        id: 'occupation',
        label: 'Occupation',
        required: true,
        ...register('occupation', {required: true})
    }

    const genderOptions: (GenderOptions | undefined)[] = ['male', 'female','other']
    const genderData: TextFieldProps = {
        id: 'gender',
        defaultValue: '',
        select: true,
        label: 'Gender',
        children: genderOptions.map((option, index) => (
            <MenuItem key={index} value={option} >
                {option}
            </MenuItem>
            )
        ),
        ...register('gender')
    }

    return {
        formInformation,
        handleSubmit,
        handleReset,
        userNameData,
        ageData,
        favoriteColorData,
        occupationData,
        genderData,
        error
    }
}