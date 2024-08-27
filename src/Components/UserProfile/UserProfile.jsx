import "./UserProfile.css";
import ProfilePhoto from "/images/octocat.png"

function UserProfile(){
    return(
        <div className="profile-container">
            <div id="Photo">
            <img src={ProfilePhoto} className="avatar" />
            </div>
            <div id="info" >
            <h1>The Octocat</h1>
            <p>@octocat</p>
            <p>The profile has no bio</p>
            </div>
        </div>
    )
}
export default UserProfile;