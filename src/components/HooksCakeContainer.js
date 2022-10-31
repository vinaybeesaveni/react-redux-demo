import {useDispatch, useSelector} from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer(){
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
     return <div>
    <h1>Number of Cakes - {numOfCakes}</h1>
    <button onClick={()=>dispatch(buyCake())}>BUY CAKE</button>
</div>

}

export default HooksCakeContainer