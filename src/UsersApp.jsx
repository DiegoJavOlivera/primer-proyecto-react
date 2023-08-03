import { UserList} from './Components/userList'
import { useState } from 'react'

export const UsersApp = () => {
    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        setEndPoint('Comments')
    }

    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Llamar api</button>
        </>
    )
}
