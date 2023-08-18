
import background from '../images/profilePhoto.jpg'

const ProfilePhoto = () => {

  const imgStyle = {  
      order: 1,
      width: '320px',
      height: '367px',
      backgroundImage: `url(${background})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center 25%',
      backgroundSize: 'cover',
      border: '2px solid white',
      borderRadius: '50%',
      zIndex: 1,
      filter: 'grayscale(100%) sepia(41%)'
    }

  return(
    <div style={imgStyle}>
      <h3 className="visually-hidden">Profile Photo</h3>
    </div>
  )
}

export default ProfilePhoto;