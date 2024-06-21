import Types from 'prop-types'
export const UserList = ({users,onDel,onUp}) => {
    return <div>
        <h1>UserList</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>sallary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm=><tr key={elm.id} className={elm.sallary > 800000 ?'high-salary': ''}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.sallary}AMD</td>
                        <td>
                            <div style={{display:'flex',gap:'3px'}}>
                                <button onClick={()=>onDel(elm.id)}>Delete</button>
                                <button onClick={()=>{onUp(elm.id)}}>Sallary Up</button>
                            </div>
                            
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

UserList.propTypes = {
    users:Types.arrayOf(
        Types.exact({
            id:Types.string,
            name:Types.string,
            surname:Types.string,
            sallary:Types.number
        })
    )
}