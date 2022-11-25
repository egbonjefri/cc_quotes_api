import {useState} from 'react'
import { config } from './Constants';




export default function QuoteAdder(){
    const [quote,setQuote] = useState([]);
    const [author,setAuthor] = useState([]);
    const URL = config.url;

function handleSubmit(e){
    if(typeof quote==='string' && typeof author==='string'){
        const data = {author : author, quote: quote};
        fetch(`${URL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        })
    }
    else{
    e.preventDefault()
    }
}

    return(
        <form noValidate onSubmit={handleSubmit}>
            <input placeholder='Add Author' onChange={(e)=>setAuthor(e.target.value)} ></input>
            <input placeholder='Add Quote' onChange={(e)=>setQuote(e.target.value)} ></input>
            <button className="btn waves-effect waves-light red" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>          </form>
    )
}