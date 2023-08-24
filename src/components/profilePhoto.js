import background from '../images/profilePhoto.jpg'

const ProfilePhoto = ({props}) => {
  return(
    <div style={{backgroundImage: `url(${background})`}} className={`${props.name}__img`}>
      <h3 className="visually-hidden">Profile Photo</h3>
    </div>
  )
}

export default ProfilePhoto;