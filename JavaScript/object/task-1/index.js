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

const onlineUsers = users.filter(obj => {
    return obj.status === 'online'
})
const userNames = onlineUsers.map(item => item.username)

console.log(`Сейчас в онлайн ${onlineUsers.length} пользователя их имена: ${userNames.join(', ')}`)


