type GenderOptions = 'male' | 'female' | 'other';

type UserProfile = {
    id: number
    userName: string
    age: number
    favoriteColor: string
    occupation: string
    gender: GenderOptions
}

type DbUser = {
    id: number
    user_name: string
    age: number
    favorite_color: string
    occupation: string
    gender: GenderOptions
}

export function transform(userList: DbUser[]): UserProfile[] {
    return userList.map(user => {
        return {
            id: user.id,
            userName: user.user_name,
            age: user.age,
            favoriteColor: user.favorite_color,
            occupation: user.occupation,
            gender: user.gender
        }
    })
}
