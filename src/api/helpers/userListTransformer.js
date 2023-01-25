function transform(userList) {
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

module.exports = {
    transform
}