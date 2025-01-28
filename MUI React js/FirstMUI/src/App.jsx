import { useState } from "react";
import Button from "@mui/material/Button";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ButtonGroup ,Checkbox} from "@mui/material";

import "./App.css";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [check,setCheck] = useState("");
  const [name,setName] = useState([]);

  const btnClicked = () => {
    console.log("Clicked");
    setDisabled(true);
  };

  const CheckFn = (e)=>{
    setCheck(e.target.value);
    let data = name;
    data.push(e.target.value);
    console.log(data);
    // console.log(e.target.value);

  }

  return (
    <>
      <h3>Material Icons</h3>
      <ButtonGroup>
        <Button
          color="secondary"
          variant="contained"
          onClick={btnClicked}
          disabled={disabled}
        >
          Click
        </Button>

        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </ButtonGroup>
      <Checkbox value="Hello" onClick={CheckFn}></Checkbox>
      <Checkbox value="There" onClick={CheckFn}></Checkbox>
      <Checkbox value="ttttt" onClick={CheckFn}></Checkbox>
      <Checkbox value="jjjjj" onClick={CheckFn}></Checkbox>

      {/* Floating Action Buttons */}
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </>
  );
}

export default App;
