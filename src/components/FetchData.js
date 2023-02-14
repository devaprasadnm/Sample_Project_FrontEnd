import React,{useState,useEffect} from 'react';
import axios from 'axios';

function FetchData() {
    const [article,setArticle] = useState([])
    const [id,setId] = useState(1)

    const clickFunc = () => {
        setId(id+1)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            setArticle(res.data)
        })
        .catch(err=>{
            console.log(err)
        },[id])
    })
  return (
    <div>
        <h1>Fetch Data</h1>
        {/* {article} */}
      {/* {article.map((a) => (<p>{a.id} {a.title}</p> ))} */}
      <h2>{article.id}{article.title}</h2>
      <h4>{article.body}</h4>
    <button onClick={clickFunc}>Next</button>
    </div>
  )
}

export default FetchData
