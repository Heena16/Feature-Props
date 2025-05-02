import { useState } from "react";

const AddDelUserForm = () => {
  const [data, setData] = useState({
    firstName: "",
    age: "",
    desc: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev, //spread operator
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const collectedData = [...submittedData, data];
    setSubmittedData(collectedData);
    setData({ firstName: "", age: "", desc: "" });
    console.log(collectedData);
  };

  return (
    <div>
      <h3>Name:</h3>
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        onChange={handleChange}
        required
      />

      <h3>Age:</h3>
      <input
        type="number"
        name="age"
        value={data.age}
        onChange={handleChange}
        required
      />
      {/* 
      <h3>Caste:</h3>
      <label>
        <input
          type="radio"
          name="caste"
          value="General"
          checked={caste === "General"}
        />
        General
      </label>
      <label>
        <input
          type="radio"
          name="caste"
          value="OBC"
          checked={caste === "OBC"}
        />
        OBC
      </label>
      <label>
        <input type="radio" name="caste" value="SC" checked={caste === "SC"} />
        SC
      </label>
      <label>
        <input type="radio" name="caste" value="ST" checked={caste === "ST"} />
        ST
      </label> */}

      <h3>Description:</h3>
      <textarea
        name="desc"
        value={data.desc}
        rows="4"
        cols="30"
        onChange={handleChange}
        placeholder="Enter description"
      ></textarea>

      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      {submittedData?.map((item) => (
        <div>
          <span>Name: {item.firstName} </span>
          <span>age: {item.age} </span>
          <span>desc: {item.desc} </span>
        </div>
      ))}
    </div>
  );
};

export default AddDelUserForm;
