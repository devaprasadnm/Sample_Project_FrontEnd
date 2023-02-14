import React,{useState,useEffect} from 'react'

function CounterHook() {
const [count,setCount] = useState(1)
const [name,setName] = useState("Devaprasad")
const [info,setInfo] = useState({name:'',email:''})
const [article,setArticle] = useState(['article1','article2','article3'])

const AddArticle = () => {
    setArticle([...article,'article'+(article.length+1)])
}

// useEffect(()=>{
//     console.log("useEffect called")
// },[count])
useEffect(()=>{
    document.title = name
})

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count+1)}>Click Me</button>
        <h2>{name}</h2>
        <button onClick={()=> (name==="Devaprasad" ? setName("Gaya"):setName("Devaprasad"))}>Click Me</button>
        <br/>
        <br/>
        <input type="text" value={info.name} onChange={e => setInfo({...info, name:e.target.value})}/>
        <input type="text" value={info.email} onChange={e=> setInfo({...info,email:e.target.value})}/>
        <button>submit</button>
        <h2>name:{info.name}</h2>
        <h2>email:{info.email}</h2>

        <h3>articles:</h3>
        {article.map((a)=><h3 key={a}>{a}</h3>)}
        <button onClick={AddArticle}>Add Article</button>
    </div>
  )
}

export default CounterHook
