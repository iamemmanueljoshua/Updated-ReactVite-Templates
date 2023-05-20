import './noPage.scss'
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <>
        <main className="container p-6">
        <div className="section m-6">
            <div className="error">404</div>
            <br/><br/>
            <span className="info">File not found</span>
            <span className="go-home"><Link to="/home">Go Back Home</Link></span>
        </div>
        </main>
        </>
    );
};

export default NoPage;



