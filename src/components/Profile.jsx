import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";

const MyProfile = ({ changeState }) => {
  const [profileData, setProfileData] = useState({
    name: "Hello I'm Balikis Omolewa",
    profession: "Frontend Web Developer",
    about: "I specialize in crafting professional and intuitive user interfaces using HTML, CSS, JavaScript, and React. I build dynamic, aesthetic websites. I prioritize clean code and innovative problem-solving for high-quality solutions and ongoing growth in web development skills.",
    info: "omolewabalikis149@gmail.com",
    contact: "+234 8085 754 756",
  });

  const [showProfile, setShowProfile] = useState(false);

  // handle show profile
  const handleShowProfile = () => {
    setShowProfile(true);
  };

  // handle hide profile
  const handleHideProfile = () => {
    setShowProfile(false);
  };

  return (
    <Card className='card'>
      <Card.Img variant="top" width="100%" className='img' src="https://myportfolio-liart-delta.vercel.app/img/hr-bg.png" />
      {showProfile ? (
        <Card.Body className='card-body'>
        <Card.Text>{profileData.name}</Card.Text>
        <Card.Title className='title'>{profileData.profession}</Card.Title>
        <Card.Text className='card-text'>{profileData.about}</Card.Text>
        <Card.Text className='card-text'>Contact Me:</Card.Text>
        <Card.Text className='card-text contact'>{profileData.info}</Card.Text>
        <Card.Text className=' card-text contact'>{profileData.contact}</Card.Text>
      </Card.Body>
      ) : (
        <p className='p'>Profile Hidden</p>
      )}
      <Card.Body className='card-body'>
       <Button variant="primary w-100" className='btn' onClick={handleShowProfile}>Show Profile Details</Button><br />
       <Button variant="primary w-100" className='btn btn-hide' onClick={handleHideProfile}>Hide Profile Details</Button>
       </Card.Body>
    </Card>
  );
}

export default MyProfile;
