
const ProfilePhoto = () => {

  const imgStyle = {  
      order: 1,
      width: '100%',
      height: '367px',
      background: 'url("../images/profilePhoto.jpg") no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      zIndex: 1
    }

  return(
    <div className={imgStyle}>
      <h3 className="visually-hidden">Profile Photo</h3>
    </div>
  )
}

export default ProfilePhoto;