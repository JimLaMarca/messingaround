import axios from "axios";
import {UserProfile} from "../userListHooks";
import {FieldValues} from "react-hook-form";

export async function getApiData(): Promise<{ apiData: string }> {
    const response = await axios.get('http://localhost:8080/')
    return response.data
}

export async function postUserForm(userData: FieldValues): Promise<{message: string}> {
    const response = await axios.post('http://localhost:8080/userList', userData)
    return response.data
}

export async function getUserList(): Promise<UserProfile[]> {
    const response = await axios.get('http://localhost:8080/userList')
    return response.data
}