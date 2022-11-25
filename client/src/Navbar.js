import {Link} from 'react-router-dom'





export default function Navbar (){
    return (
        <div>
            <ul>
            <button className="waves-effect waves-light btn"><Link to='/'>Quotes</Link></button>
            <button className="waves-effect waves-light btn"><Link to='addquote'>Add Quote</Link></button>
            <button className="waves-effect waves-light btn"><Link to='search'>Search Author</Link></button>
            </ul>
        </div>
    )
}