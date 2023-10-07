import { useParams } from "react-router-dom";

function User()
{
    const params = useParams();
    const {name} = params;

    console.log(name);
    
    return(
        <div className="user">
            <h1>This is {name} page</h1>
        </div>
    )
}
export default User;