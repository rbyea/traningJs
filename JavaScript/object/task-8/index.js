const getKiller = (suspectInfo , deadPeople ) => {
    let killer = []
    for (const suspectInfoKey in suspectInfo ) {
        for(let i=0; i<deadPeople.length; i++){
            for(let j = 0; j < suspectInfo[suspectInfoKey].length; j++) {
                if(suspectInfo[suspectInfoKey][j] === deadPeople[i]) {
                    console.log(suspectInfo[suspectInfoKey][j])
                    killer.push(suspectInfoKey)
                }
            }
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
















