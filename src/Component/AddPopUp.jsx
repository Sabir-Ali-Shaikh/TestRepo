import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../Redux/action/curdAction";

const AddPopUp = ({ addPop, setAddPop }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [organization, setOrganization] = useState("");
  const [file, setFile] = useState();
  const [img, setImg] = useState("");
  const dispatch =useDispatch()

  function handleChange(e) {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setImg(e.target.files[0]);
    }
  }

  const SubmitHandler = () => {
    if (img && name && location && status && organization) {
      const formdata = new FormData();
      formdata.append("image", img);
      formdata.append("name", name);
      formdata.append("status", status);
      formdata.append("organization", organization);
      formdata.append("location", location);

      if (formdata) {
        dispatch(addList(formdata));
      }

    }
  };

  return (
    <>
      <div
        className={`${
          !addPop && ""
        }`}
      >
        <div >
          <div >
            <h2 >Add New User</h2>
            <button
          
              onClick={() => {
                setAddPop(!addPop);
              }}
            >
              Cancel
            </button>
          </div>
          <form >
            <label  htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>location</label>
            <input
              value={location}
              type="text"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label>organization</label>
            <input
              value={organization}
              type="text"
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
            <label>Status</label>
            <input
              value={status}
              type="text"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />

            <label>Image</label>

            <input
              type="file"
              accept=".jpg,.png,.jpeg,.svg"
              onChange={handleChange}
            />

            <img src={file} alt="browserIcon" />
          </form>

          <button onClick={SubmitHandler}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPopUp;
