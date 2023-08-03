import React, { useState, removeAttribute, checked } from "react";
import { Container } from "react-bootstrap";

const Formsubmit = () => {
  const [inputdata, setinputdata] = useState({
    // Name: "",
    // Lastname: "",
    // Email: "",
    // Gender: "",
  });
  const changevalue = (e) => {
    const { name, value } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  };
  const pagesubmit = (e) => {
    e.preventDefault();
    console.log(inputdata);
    setinputdata({
      Name: "",
      Lastname: "",
      Email: "",
      //   Gender: "",
    });
  };
  return (
    <div>
      <Container className="my-5">
        <form onSubmit={pagesubmit} className="p-5">
          <label htmlFor="name">Name</label>
          <input
            onChange={changevalue}
            type="text"
            value={inputdata.Name}
            name="Name"
            placeholder="Name"
            id="name"
          />
          <label htmlFor="lastname" className="ms-4">
            Last Name
          </label>
          <input
            onChange={changevalue}
            type="text"
            name="Lastname"
            value={inputdata.Lastname}
            placeholder="Last Name"
            id="lastname"
          />
          <label htmlFor="email" className="ms-4">
            Email
          </label>
          <input
            onChange={changevalue}
            type="email"
            value={inputdata.Email}
            name="Email"
            placeholder="email"
            id="email"
          />
          <div value={inputdata.Gender} onChange={changevalue}>
            <label htmlFor="male">Male</label>
            <input type="radio" name="Gender" id="male" value="Male" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="Gender" id="female" value="Female" />
            <label htmlFor="other">other</label>
            <input type="radio" name="Gender" id="other" value="Other" />
          </div>
          <label htmlFor="music">Music</label>
          <input
            type="checkbox"
            name="music"
            checked={inputdata.music}
            onChange={changevalue}
            id="music"
          />
          <label htmlFor="football">Football</label>
          <input
            type="checkbox"
            name="football"
            checked={inputdata.football}
            onChange={changevalue}
            id="football"
          />
          <label htmlFor="reading">Reading</label>
          <input
            type="checkbox"
            name="reading"
            checked={inputdata.reading}
            onChange={changevalue}
            id="reading"
          />
          <button
            type="submit"
            className="px-4 mx-3 py-1 bg-black text-white border-0"
          >
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Formsubmit;
