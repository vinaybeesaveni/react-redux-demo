import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props){
    return <div>
        <h1>Number of Cakes - {props.numOfCakes}</h1>
        <button onClick={()=>props.buyCake()}>BUY CAKE</button>
    </div>
}


const mapStateToProps = state =>{
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: ()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)