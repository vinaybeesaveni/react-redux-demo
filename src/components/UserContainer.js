import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({fetchUsers, userData}){
    useEffect(()=>{
        fetchUsers()
    }, [fetchUsers])
    return (
        <>
        <h1>Users</h1>
        {userData && userData.map(user=><p key={user.id}>{user.name}</p>) }
        </>
        
    )
}

const mapStateToProps = state=>{
    return {
        userData: state.user.users
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)