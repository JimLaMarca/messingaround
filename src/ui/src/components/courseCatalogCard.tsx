import './courseCatalogCard.scss'

import {FC} from "react";
import {Button, Card, Stack, Typography} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

type CourseCatalogCardProps = {
    image: string
    topic: string
    courseName: string
    gradeStart: number
    gradeEnd: number
    length: number
}

export const CourseCatalogCard: FC<CourseCatalogCardProps> = (props:CourseCatalogCardProps) => {
    const {image, topic, courseName, gradeEnd, gradeStart, length} = props
    return (
        <Card className="courseCatalogCard">
            <Stack direction="column" spacing={3} >
                <img className="courseCatalogCard-image" src={image} alt={courseName}/>
                <Stack direction="column" spacing={1} className="courseCatalogCard-textSection">
                    <Typography fontWeight="bold" className="courseCatalogCard-topicText">{topic}</Typography>
                    <Typography className="courseCatalogCard-courseNameText">{courseName}</Typography>
                    <Stack direction="row">
                        <PersonIcon className="courseCatalogCard-icon"/>
                        <Typography className="courseCatalogCard-bodyText">Grades: {gradeStart}-{gradeEnd}</Typography>
                    </Stack>
                    <Stack direction="row">
                        <AccessTimeIcon className="courseCatalogCard-icon"/>
                        <Typography className="courseCatalogCard-bodyText">Duration: {length} hours</Typography>
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={1} className="courseCatalogCard-buttonSection">
                    <Button className="courseCatalogCard-assignButton" variant="contained">Assign to Sections</Button>
                    <Button color="secondary" variant="outlined" >Learn More</Button>
                </Stack>
            </Stack>
        </Card>
        )
}