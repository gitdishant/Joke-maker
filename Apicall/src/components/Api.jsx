import { useEffect, useState } from "react"

const Api = () => {
    const [setupline, setLine] = useState('');
    const [punchLine, setPunchLine] = useState('');
    const fetchData = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(responce => responce.json())
        .then(data => {
            setPunchLine(data.punchline)
            setLine(data.setup)
        })
        .catch(error => console.error("not fond data", error)
        );
    }
    useEffect(() => {
       fetchData()
    },[])
    
  return (
    <div className=''> 
        <p className="setup py-24 text-4xl text-wrap ">{setupline}</p>
        <p className="punchline text-2xl text-wrap">{punchLine}</p>
        <button className="btn bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 my-10 px-4 rounded" onClick={fetchData}>Next</button>
    </div>
  )
}

export default Api