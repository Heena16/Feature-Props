import React from "react";
import Ajay from "../Picture/Ajay.jpg";
import Heena from "../Picture/Heena.jpeg";
import Baby from "../Picture/Anushri.jpg";

const users = [
  {
    name: "Ajay",
    description: "Aspiring Data Engineer",
    image: Ajay,
  },
  {
    name: "Heena Adhikari",
    description: "UI/UX Designer from London.",
    image: Heena,
  },
  {
    name: "Anushri",
    description: "Backend Engineer from Seoul.",
    image: Baby,
  },
];

const Card = () => {
  return (
    <div>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <img src={user.image} alt={user.name} />
            <h3> {user.name}</h3>
            <p>{user.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
