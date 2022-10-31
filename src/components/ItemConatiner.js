import { connect } from "react-redux"
import { buyCake, buyIceCream } from "../redux"

function ItemContaier(props){
    return <div>
        <h3>Item - {props.item}</h3>
        <button onClick={()=>props.buyItem()}>BUY ITEM</button>
    </div>
}

const mapStateToProps = (state, ownProps)=>{
    const item = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()) : ()=>dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContaier)