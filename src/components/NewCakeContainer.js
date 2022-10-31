import {useState} from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function NewCakeContanier(props){
    const [number, setNumber] = useState(1)
    return <div>
        <h1>Number of Cakes - {props.numOfCakes}</h1>
        <input value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>props.buyCake(number)}>BUY {number} CAKE</button>
    </div>
}


const mapStateToProps = state =>{
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: (number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContanier)