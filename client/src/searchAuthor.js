import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import { config } from './Constants';



export default function SearchAuthor(){
    const [search, setSearch] = useState()
    const [array, setArray] = useState([])
    const [count,setCount] = useState(0);
    const [text, setText] = useState([]);
    const URL = config.url;
    useEffect(()=>{
        setTimeout(()=>{
          const loadQuotes = async () => {
            await fetch(`${URL}/search?q=${search}`).then(res => res.json()).then(res=>{
           if(res.author !== ''){
            setArray(res)
           }
           else {
             setText(res)
           }
          })
          }
          if(count > 0){
          loadQuotes()}
        },200)
    // eslint-disable-next-line
      },[count,search])

    return(
        <div>
        <form onSubmit={(e)=>{
            setCount(count+1);
            e.preventDefault()
        }}>
            
        <input placeholder='Enter Name of Author' onChange={(e)=>setSearch(e.target.value)} />
        <button className="btn waves-effect waves-light red" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>        </form>
        {
          text.length <= 0 ?
    array.map((item)=>{
        return(
            <motion.div
            initial={{opacity:0, scale: 0.25}}
              animate={{opacity : 1, scale: 1 }}
              transition={{duration:1}}
            >
            <div className='quote-author' key={Math.floor(Math.random()*100)}>

                <p><i className='material-icons'>format_quote</i><em>{item.quote}</em></p>
                <p><b>{item.author}</b></p>
            </div>
            </motion.div>

        )
    })
      : <p className='center not-found'>{text.quote}</p>
    }
        </div>
    )
}