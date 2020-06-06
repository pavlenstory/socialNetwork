import React from "react"
import ProfileInfo from "./ProfileInfro/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = (props) => {
    return (
        <>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </>
    )
}

export default Profile;
