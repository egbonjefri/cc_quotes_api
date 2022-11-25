import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import { config } from './Constants';


export default function Homepage(){
    const URL = config.url;
    const [count,setCount] = useState(0);
    const [array, setArray] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
      setTimeout(()=>{
        const loadQuotes = async () => {
          await fetch(`${URL}`).then(
            res=>
          res.json()).then(res=>{
            let x = [];
            x.push(res);
          setArray(x)
        }
        )
        }
        if(count > 0){
        loadQuotes()}
      },200)
  // eslint-disable-next-line
    },[count])
    
    useEffect(()=>{
        setTimeout(()=>{
            const fetchQuotes = async () => {
              await fetch(`${URL}/quotes`).then(res => res.json()).then(res=> setArray(res))
            }
            if(counter > 0){
            fetchQuotes()}
          },200)
       // eslint-disable-next-line   
    },[counter])



  return (
      <div className='quotes'>
          <div className='fetch' >

          {counter < 1 && <button className="waves-effect waves-light btn red"onClick={()=>setCount(count+1)}>Fetch New Quote</button>}
          {counter < 1 && <button className="waves-effect waves-light btn red" onClick={()=>setCounter(counter+1)}>Fetch All Quotes</button>
          }
          </div>
          {
    array.map((item)=>{
        return(
 
            <div className='quote' key={Math.floor(Math.random()*100)}>
           <motion.div
            initial={{opacity:0, scale: 0.25}}
              animate={{opacity : 1, scale: 1 }}
              transition={{duration:1}}
            >
                <p><i className='material-icons'>format_quote</i><em>{item.quote}</em></p>
                <p><b>{item.author}</b></p>
                </motion.div>

            </div>

        )
    })
}

      </div>
  )

}