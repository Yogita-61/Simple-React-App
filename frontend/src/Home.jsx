import {Link} from "react-router-dom";
export default function Home(){
    return (
        <div style={{padding:"20px"}}>
        <h1>Home Page</h1>
        <p>Welcome to our simple React store</p>
        <Link to="/products">
        <img src="images.jpeg"
        alt = "store banner"
        style ={{ width: "100", cursor: "pointer"}}
        />
        </Link>
        <p>Click the images to explore products</p>
        </div>
    )
}