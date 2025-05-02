// import Avatar from "./Avatar";
// import InputComp from "./Input";
// import Label from "./Label";
// import SearchBar from "./Search";

import UserIdCard from "./UserIdCard";
import Ajay from "../Picture/Ajay.jpg";
import Heena from "../Picture/Heena.jpeg";
import Baby from "../Picture/Anushri.jpg";

const Form = () => {
  return (
    <form id="form">
      {/* <SearchBar />
      <SearchBar />
      <Label name={"Heena"} />
      <Label name={"Pooja"} />
      <Label name={"Gourav"} />
      <InputComp /> */}
      <UserIdCard
        imagePer={Ajay}
        name={"Ajay"}
        desc={"UI/UX from American Express"}
      />
      <UserIdCard
        imagePer={Heena}
        name={"Ajay"}
        desc={"UI/UX from American Express"}
      />
      <UserIdCard
        imagePer={Baby}
        name={"Ajay"}
        desc={"UI/UX from American Express"}
      />
    </form>
  );
};

export default Form;
