import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../Redux/action/curdAction";
import AddPopUp from "../Component/AddPopUp";
import Menu from "../Component/Menu";
import EditList from "../Component/EditPop";
import EditPop from "../Component/EditPop";

const Dashboard = () => {
  const { data } = useSelector((state) => state.getList);
  const [addPop, setAddPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [delPop, setDelPop] = useState(false);
  const [editable, setEditable] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  console.log(data?.data?.docs?.regionData);
  const API = process.env.REACT_APP_NODE_API;
  const Token = process.env.REACT_APP_ACCESS_TOKEN;
  console.log(API, Token);

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>location</th>
          <th>ordering </th>
          <th>uuid</th>
        </tr>
        {data &&
          data?.data?.docs.map((index) => (
            <tr key={index._id}>
              <td>{index.name}</td>
              <td>{index?.location?.name}</td>
              <td>{index?.ordering}</td>
              <td>{index.uuid}</td>
              <Menu
                editPop={editPop}
                setEditPop={setEditPop}
                setEditable={setEditable}
                data={index}
                delPop={delPop}
                setDelPop={setDelPop}
              />
            </tr>
          ))}
      </table>

      <div>
        <button
          onClick={() => {
            setAddPop(!addPop);
          }}
        >
          <span>Add </span>
        </button>
      </div>

      {addPop && <AddPopUp setAddPop={setAddPop} addPop={addPop} />}
      {editPop && (
        <EditPop editPop={editPop} setEditPop={setEditPop} data={editable} />
      )}
      {/* {delPop && (
        <DeleteUser delPop={delPop} setDelPop={setDelPop} data={editable} />
      )} */}
    </>
  );
};

export default Dashboard;
