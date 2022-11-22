const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

let onlineUsers = []

for (const user of users) {
     if(user.status === 'online') {
         onlineUsers.push(user)
     }
}
alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers[0].username}, ${onlineUsers[1].username}`)

