const Avatar = ({ url }) => {
  return (
    <div className="image-container">
      <img className="profile-photo" src={url} alt="avatar" />
    </div>
  );
};

export default Avatar;
