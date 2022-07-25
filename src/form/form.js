
import "./form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom"

const Form = () =>{
    const [upload,setPosts] = useState({image:"",author:"", location:"", description:""});
    const [setvalue] = useState("No File Chosen")
    const navigate = useNavigate();
    
    const convertbase64 = (file)=> new Promise((res,rej)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => res(reader.result)
        reader.onerror = (err) =>rej(err)
    })

    const afterUpload = async (e)=>{
        console.log("Hello")
        const file = e.target.files[0]
        const base64 = await convertbase64(file)
        setPosts({...upload,image:base64})
        setvalue(e.target.value)
    }

    const handlePosts =()=>{
        console.log(upload);
        axios({
            url: "https://instaclone-server15.herokuapp.com/form",
            method: "POST",
            headers: {
            },
            data: upload
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        navigate("/postView");
    }

    return(
        <>
        <div className="container">
    <header id="header">

<div id="leftLogo">
  <img src={require("../images/leftLogo.png")} alt="" />
</div>
<Link to="/form">
  <img id="cameraLogo" style={{ width: "100px" }} src={require("../images/cameraLogo.png")} alt="" />
</Link>
</header>

            <div className="formContainer">
            
                <form method="POST">
                    <input type="file" onChange={(e)=> afterUpload(e) } ></input>  <br/><br/>
                    <div className="author"> 
                    <input type="text" value={upload.author} onChange={(e)=>{setPosts({...upload, author: e.target.value})}} id="author" name="author" placeholder="Author" />
                    <input type="text" value={upload.location} onChange={(e)=>{setPosts({...upload, location: e.target.value})}} id="location" name="location" placeholder="Location" />
                    </div><br/>
                    <input type="text" value={upload.description} onChange={(e)=>{setPosts({...upload, description: e.target.value})}} id="description" name="description" placeholder="Description" /><br/><br/>
                    <input type="submit" id="submitbtn" value="Post" onClick={handlePosts}/>
                </form>
            </div>
            
        </div>
        </>
    );
}
export default Form;
 







 