const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = async (ids) => {
    try {
        const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses = await Promise.all(requests)
        const dataResult = responses.map((data) => data.json());
        return await Promise.all(dataResult)

    } catch (e) {
        console.log(e)
    }
}

getTodosByIds([43, 21, 55, 100, 10]).then((result) => console.log(result))