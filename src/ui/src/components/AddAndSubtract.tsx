import './addAndSubtract.scss'

import {FC, useState} from "react";
import {Stack, Button, Typography, Box} from "@mui/material";

type AddAndSubtractProps = {
    startingNumber: number
}

export const AddAndSubtract:FC<AddAndSubtractProps> = (props:AddAndSubtractProps) => {
    const {startingNumber} = props
    const [currentNumber, setCurrentNumber] = useState<number>(startingNumber)
    const add = () => setCurrentNumber(currentNumber + 1)
    const subtract = () => setCurrentNumber(currentNumber - 1)
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={subtract}>Subtract</Button>
            <Box className="addAndSubtract-numberBox">
                <Typography aria-label='numberDisplay' className="addAndSubtract-number" variant="h5" >{currentNumber}</Typography>
            </Box>
            <Button variant="contained" onClick={add}>Add</Button>
        </Stack>
    )
}