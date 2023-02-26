import React from 'react'

const GroupList = ({ list, year }) => {

    const [loading, setLoading] = React.useState(0)
    
    const [episodes, setEpisodes] = React.useState([])
    const [episodesYear, setEpisodesYear] = React.useState([])
    const [filterList, setFilterList] = React.useState()
    const [buttonYear, setButtonYear] = React.useState('2013')

    React.useEffect(() => {
        list.then(result => {
            setFilterList(result)
            setEpisodes(result)

            setLoading(loading + 1)
        })
    }, [list])

    React.useState(() => {
        year.then(result => {
            setEpisodesYear(result)
            setLoading((prev) => prev + 1)
        })
    }, [year])

    const getEpisodes = (year) => {
        // list.then(result => {
        //     setFilterList(result)
        // })
        setEpisodes(filterList?.filter((el) => {
            const years = el.airDate.slice(-4)
            return years === year
        }))
    }
    
    return (
        <div>
            {
                episodes.length > 0 ?
                    episodes.map(el => (
                        <div key={el.id}>
                            <div>{el.name}</div>
                            <strong>{el.airDate}</strong>
                        </div>
                    ))
                : 'Обновите список'
            }

            {
                episodesYear &&
                    episodesYear.map(year => (
                        <button key={year + 1} onClick={() => getEpisodes(year)}>{year}</button>
                    ))
            }
            <button onClick={
                () => setEpisodes(list.then(result => {
                    setEpisodes(result)
                }))
            }>
            Вернуть все даты
            </button>
        </div>
    )
}

export default GroupList