
const getKiller = (suspectInfo , deadPeople ) => {
    const keys = Object.keys(suspectInfo)
    let fnCheck = (suspectsContacts, victim) => victim.every(item => suspectsContacts.includes(item))

    for (let i = 0; i < keys.length; i++) {
       if(fnCheck(suspectInfo[keys[i]], deadPeople)) {
           console.log(`Убийца ${keys[i]}`)
       }
    }
}
// getKiller(
//     {
//         Brad: [],
//         Megan: ["Ben", "Kevin"],
//         Finn: []
//     },
//     ["Ben"]
// )

getKiller(
    {
        James: ["Jacob", "Bill", "Lucas"],
        Johnny: ["David", "Kyle", "Lucas"],
        Peter: ["Lucy", "Kyle"]
    },
    ["Lucas", "Bill"]
)







