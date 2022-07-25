import { useEffect, useState} from "react";
import "./postView.css";
import axios from "axios";
import {Link} from "react-router-dom"
import { Heart,Send } from 'react-bootstrap-icons';
const PostView = ()=> {
    const [userData, setPostData] = useState([]);
    useEffect(()=> {
        axios.get('https://instaclone-server15.herokuapp.com/form').then((res)=>{
            let data = res.data.reverse();
            console.log(data)
            setPostData(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, []);
    return (
      
      <div className="container">
       <header id="header">

<div id="leftLogo">
  <img src={require("../images/leftLogo.png")} alt="" />
</div>
<Link to="/form">
  <img id="cameraLogo" style={{ width: "100px" }} src={require("../images/cameraLogo.png")} alt="" />
</Link>
</header>
      <div className="postContainer">
          {
              userData.map((post,i)=> {
                  return (  
                      <div className="post">
                          <div className="user-information" key={i}>
                              <div id="name_location"><h3>{post.author}</h3>{post.location}</div>
                              <span id="dots"><h1>...</h1></span>
                          </div>
                          <div className="user-image">
                              <img src={post.image} id="postimg" alt="user-defined-imge"></img>
                          </div><br/>
                          <div className="user-meta">
                              <span>{post.date}</span>
                          </div>
                          <div className="user-likes">
                              <div className="like_comment">
                                   <Heart/>  <Send/>
                              </div>
                       <p>   {post.likes} likes</p>
                          </div><br/> <br/> <br/><br/>
                          <div id="user-description">
                             <strong>{post.description}</strong>
                          </div>
                      </div>
                  )
              })
          }
      </div>
       
  </div>
)
}
export default PostView;