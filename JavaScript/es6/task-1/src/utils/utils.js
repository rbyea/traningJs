export const getRandomColor = () => {
    const letters = '1234567890adcdef'
    let color = '#'
    for (let i = 0; i< 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}