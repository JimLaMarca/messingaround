import {FC} from "react";
import {Card, Stack, TextField, Typography, Button} from "@mui/material";
import {UseInputFormHooks} from './inputFormHooks';
import {FormProvider} from 'react-hook-form'
import {UserProfile} from "./userListHooks";

type InputFormProps = {
    userList: UserProfile[]
    setUserList: (userList: UserProfile[]) => void
}

export const InputForm: FC<InputFormProps> = (props: InputFormProps) => {
    const {userList, setUserList} = props
    const {formInformation, handleSubmit, handleReset, userNameData, ageData, favoriteColorData, occupationData, genderData} = UseInputFormHooks({setUserList, userList});

    return (
        <Card sx={{my: 1, p:1}}>
            <FormProvider {...formInformation}>
                <form>
                    <Typography variant="h5" sx={{mb: 2}}>User Form</Typography>
                    <Stack direction="column" spacing={1} >
                        <TextField {...userNameData} variant="outlined" />
                        <TextField {...ageData} variant="outlined" />
                        <TextField {...favoriteColorData} variant="outlined" />
                        <TextField {...occupationData} variant="outlined" />
                        <TextField {...genderData} variant="outlined" />
                        <Button disabled={!formInformation.formState.isValid} variant="contained" onClick={formInformation.handleSubmit(handleSubmit)}>Submit</Button>
                        <Button variant="outlined" onClick={handleReset}>Clear</Button>
                    </Stack>
                </form>
            </FormProvider>
        </Card>
    )
}