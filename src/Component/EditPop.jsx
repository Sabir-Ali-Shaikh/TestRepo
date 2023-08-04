import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList, editList } from "../Redux/action/curdAction";


const EditPop = ({ editPop, setEditPop, data }) => {


    const { data: updatedlist } = useSelector((state) => state.editList);


  const [name, setName] = useState(data.name);
  const [location, setLocation] = useState(data.location.uuid);
  const [status, setStatus] = useState(data.status);
  const [file, setFile] = useState();
  const [img, setImg] = useState("");
 
 const organization=process.env.REACT_APP_ORG
  const id = data.uuid 
  const dispatch = useDispatch();

  function handleChange(e) {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setImg(e.target.files[0]);
    }
  }

  const updateHandler = () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("image", img);
    formdata.append("status", status);
    formdata.append("location", location);
    formdata.append("uuid", id);
    formdata.append("organization", organization);

    if (formdata) {
        dispatch(editList(formdata));

        console.log("'edit sucess");
      }

  };

  useEffect(() => {
    if (updatedlist?.success) {
      dispatch(getList());
      setEditPop(!editPop);

      dispatch({ type: "UPDATE_SUCCESS", payload: null });
    } else if (updatedlist?.success === false) {
      dispatch({ type: "UPDATE_SUCCESS", payload: null });
    }
  }, [updatedlist]);


  return (
    <div
      className={`${
        !editPop && ""
      }`}
    >
      <div>
        <div >
          <h2 >Update list Details</h2>
          <button
            onClick={() => {
              setEditPop(!editPop);
            }}
          >
          </button>
        </div>
        <form  >
          <label >Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>locations</label>
          <input
            type="email"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            disabled
          />
          <label>status</label>
          <input
            type="number"
            value={status}
            max={10}
            onChange={(e) => {
                setStatus(e.target.value)
            }}
          />

<input
              type="file"
              accept=".jpg,.png,.jpeg,.svg"
              onChange={handleChange}
            />

            <img src={file} alt="browserIcon" />

        </form>
        <div>
          <button
            onClick={updateHandler}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPop;
