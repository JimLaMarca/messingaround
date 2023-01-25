import './App.scss';
import {CourseCatalogCard} from './components/courseCatalogCard'
import {AddAndSubtract} from './components/AddAndSubtract';
import {Stack, ThemeProvider, Typography, Grid} from "@mui/material";
import {InputForm} from "./components/inputForm";
import {theme} from "./components/src/theme";
import {ResponsiveGridComponent} from "./components/responsiveGridComponent";
import {getApiData, getUserList} from "./components/data/dataAccess";
import {UserList} from "./components/userList";
import {UserProfile} from "./components/userListHooks";
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(false)
    const [apiData, setApiData] = useState<any>(null);
    const [profileList, setProfileList] = useState<UserProfile[]>([])


    useEffect( () => {
        setLoading(true)
        getUserList().then(data => {
            setProfileList(data);
        })
        getApiData().then(data => {
            const {apiData} = data;
            setApiData(apiData);
        })
        setLoading(false)
    }, [])


  return (
    <div className="App">
        {loading ? (<Typography variant="h1">Page Loading</Typography>) : (
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <Grid direction="row" justifyContent="center" spacing={5} rowSpacing={2} container item lg={10} md={11} xs={12} mb={5}>
                        <Grid item md={8} xs={12}>
                            <UserList userList={profileList}/>
                        </Grid>
                        <Grid item md={4} sm={5} xs={8} alignSelf={'center'}>
                            <InputForm userList={profileList} setUserList={setProfileList}/>
                        </Grid>
                    </Grid>

                    <Stack direction="column" spacing={2} mb={3}>

                        <CourseCatalogCard courseName={'Express Course'} topic={'Programming'} gradeStart={4} gradeEnd={12} length={30} image={'https://files.worldwildlife.org/wwfcmsprod/images/Sea_Turtle_Hol_Chan_Marine_Reserve_WW1105958/hero_full/p35wuxwr3_Sea_Turtle_Hol_Chan_Marine_Reserve_WW1105958.jpg'}/>
                        <AddAndSubtract startingNumber={0}/>
                        <Typography>{apiData}</Typography>
                    </Stack>
                    <ResponsiveGridComponent/>
                </header>
            </ThemeProvider>
            )}
    </div>
  );
}

export default App;