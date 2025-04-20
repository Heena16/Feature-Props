import Ajay from "../Picture/Ajay.jpg";
import Heena from "../Picture/Heena.jpeg";
import Baby from "../Picture/Anushri.jpg";

const UserIdCard = () => {
  return (
    <div class="imageContainer">
      <div class="singleImage">
        <img id="image" src={Ajay} alt="image"></img>
        <h3 class="labelName">Ajay</h3>
        <p>Data Analyst in Flipkart</p>
      </div>

      <div class="singleImage">
        <img id="image" src={Heena} alt="image"></img>
        <h3 class="labelName">Heena</h3>
        <p>UI/UX from American Express </p>
      </div>

      <div class="singleImage">
        <img id="image" src={Baby} alt="image"></img>
        <h3>Anushri</h3>
        <p>Full Stack Developer from Google</p>
      </div>
    </div>
  );
};
export default UserIdCard;
