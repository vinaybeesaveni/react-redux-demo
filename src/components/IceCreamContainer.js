import {buyIceCream} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props){
    return <div>
        <h1>Number of Cakes - {props.numOfCakes}</h1>
        <button onClick={()=>props.buyIceCream()}>BUY ICECREAM</button>
    </div>
}


const mapStateToProps = state =>{
    return {
        numOfCakes: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)