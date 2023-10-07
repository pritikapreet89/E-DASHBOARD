import { Link } from "react-router-dom";

function Page404()
{
    return(
        <div className="page404">
            <h1>Page Not Found</h1>
            <Link to='/' className="link" >Go to Home Page</Link>

        </div>
    )
}
export default Page404;