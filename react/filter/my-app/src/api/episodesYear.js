import { episodes } from "./obj";

const fetchAllYear = () => new Promise((resolve, reject) => {
    const years = episodes.map(
        ({ airDate }) => airDate.slice(-4)
    );

    const uniqYears = [...new Set(years)]
    setTimeout(() => {
        resolve(uniqYears)
    }, 200)
});


export default {fetchAllYear}