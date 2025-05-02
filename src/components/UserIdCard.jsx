const UserIdCard = ({ imagePer, name, desc }) => {
  return (
    <div class="imageContainer">
      <div class="singleImage">
        <img id="image" src={imagePer} alt="image" />
        <h3 class="labelName">{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default UserIdCard;
