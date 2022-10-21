import { Button, Container, Divider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Signout, database } from '../Config/firebasemethods'
import { onValue, ref, set, push } from "firebase/database";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AddIcon from "@mui/icons-material/Add";


function ToDoApp() {
    const location = useLocation();
    const navigate = useNavigate();

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let [todo, setTodo] = useState("");
    let [listOfTodos, setList] = useState([]);

    let add = () => {
        const reference = ref(database, `todos/${location.state.userName}`);
        const newRef = push(reference);
        set(newRef, {
            todo,
            time: `${12 + new Date().getHours()}:${new Date().getMinutes()}`,
        });
    };
    const handleGetDatabase = () => {
        let reference = ref(database, "todos/");
        onValue(reference, (snapshot) => {
            console.log(snapshot.val()[location.state.userName]);
            setList([...Object.values(snapshot.val()[location.state.userName])]);
            console.log(listOfTodos);
            // console.log(location.state);
        });
    };
    let handelsignout = () => {
        Signout().then((s) => {
            console.log(s)
            navigate('/login')
        }).catch((er) => {
            console.log(er)
        })
    }


    useEffect(() => {
        handleGetDatabase();
    }, []);
    let date = new Date();
    return (
      <div>
     <Box>
        <Container
          className="main"
          maxWidth="md"
          sx={{
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <Box marginBottom="20px">
            {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {auth && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="secondary"
                  >
                    <Typography
                      variant="subtitle"
                      sx={{ marginRight: "10px" }}
                      color="primary"
                    >
                      {location.state.userName}
                    </Typography>
                    <AccountCircle color="success" fontSize="large" />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handelsignout}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </Box> */}

            <Typography  >
              {date.toString()}
            </Typography>

            <Typography
              sx={{ color: "white" }}
              variant="h4"
              fontWeight="bolder"
            >
              TodoList
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              variant="outlined"
              multiline={true}
              sx={{
                backgroundColor: "white",
                margin: "5px",
                width: "90%",
              }}
              color="primary"
              label="Enter todo"
              onChange={(e) => {
                setTodo(e.target.value);
                // clearElem(e.target);
              }}
            />
            <Button
              variant="contained"
              sx={{
                fontSize: "18px",
                padding: "10px 30px",
                fontweight: "bolder",
              }}
              onClick={() => {
                add();
              }}
              startIcon={<AddIcon />}
            >
              Add Todo
            </Button>
          </Box>

          <Box marginTop="30px" marginBottom="60px">
            <Divider color="error" />
          </Box>

          <Box>
            {listOfTodos.map((e, i) => (
              <Box
                sx={{
                  padding: "20px",
                  margin: "20px 0px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                key={i}
              >
                {e.todo}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      </div>
   
    )
}

export default ToDoApp
