import './responsiveGridComponent.scss'

import {FC} from "react";
import {Box, Grid, Stack} from "@mui/material";

export const ResponsiveGridComponent: FC = () => {
    return (
        <Stack width={'100%'} spacing={2} m={2}>
            <Grid item container spacing={2} display="flex">
                <Grid item lg={12} xs={8} className="responsiveGridComponentItem">
                    <DemoBox text={'lg={12} xs={8}'} />
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4} className="responsiveGridComponentItem">
                    xs={12} sm={10} md={8} lg={6} xl={4}
                </Grid>
            </Grid>
            <Grid item container spacing={2} m={2}>
                <Grid item xs={12} md={6} xl={3} className="responsiveGridComponentItem">
                    xs={12} md={6} xl={3}
                </Grid>
                <Grid item xs={12} md={6} xl={3} className="responsiveGridComponentItem">
                    xs={12} md={6} xl={3}
                </Grid>
                <Grid item xs={12} md={6} xl={3} className="responsiveGridComponentItem">
                    xs={12} md={6} xl={3}
                </Grid>
                <Grid item xs={12} md={6} xl={3} className="responsiveGridComponentItem">
                    xs={12} md={6} xl={3}
                </Grid>
            </Grid>
        </Stack>

    )
}

const DemoBox: FC<{text: string}> = ({text}) => {
    return(
        <Box>
            {text}
        </Box>
    )
}