import "./App.css";
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledTextField } from "./components/StyledTextField";
import { StyledButton } from "./components/StyledButton";
import { StyledHeader } from "./components/StyledHeader";
import { StyledDashboard } from "./components/StyledDashboard";
import { StyledDrawer } from "./components/StyledDrawer";
import SearchIcon from "@mui/icons-material/Search";
import LogoWhite from "../src/assets/logo-white.png";
import ProfilePicture from "../src/assets/profile-picture.png";
import BrandImage from "../src/assets/brand-image.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employeeId, setEmployeeId] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: "",
      name: "",
      salary: "",
      age: "",
      image: "",
      annual_salary: ""
    },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
        .get("api/employees")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          setOpenDialog(true);
        });
  }, []);

  const handleSearch = () => {
    if (employeeId !== "") {
      axios
        .get("api/employee/" + employeeId)
        .then((res) => {
          if (res.data.name === "Not Found") {
            setErrorMessage("There is no Employee registered under this ID");
            setOpenDialog(true);
          } else {
            setEmployees([res.data]);
          }
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          setOpenDialog(true);
        });
    } else {
      axios
        .get("api/employees")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          setOpenDialog(true);
        });
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="App">
      <StyledHeader
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box></Box>
        <img style={{ height: "70%" }} src={LogoWhite} alt="brand" />
        <Box></Box>
      </StyledHeader>
      <Box
        sx={{
          width: "100%",
          height: "92vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <StyledDrawer variant="permanent">
          <Toolbar />
          <img
            style={{
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "5%",
              marginBottom: "5%",
            }}
            src={BrandImage}
            alt="nieves-development"
          ></img>
          <Avatar
            alt="Gabriel Nieves"
            src={ProfilePicture}
            sx={{
              width: 75,
              height: 75,
              marginRight: "auto",
              marginLeft: "auto",
              boxShadow: 3,
              marginTop: "15px",
              marginBottom: "10px",
            }}
          />
          <Typography
            sx={{ fontSize: "22px", fontWeight: "600", color: "#747474" }}
          >
            Gabriel Nieves Cosson
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#747474" }}>
            gabrielnieves2000@gmail.com
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#747474" }}>
            (+57) 312 424 1847
          </Typography>
          <Box sx={{ height: "20px" }}></Box>
          <Divider />

          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem key={"Account"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon></AccountCircleIcon>
                  </ListItemIcon>
                  <ListItemText primary={"My Account"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Dashboard"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon></DashboardIcon>
                  </ListItemIcon>
                  <ListItemText primary={"Dashboard"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Employees"} disablePadding>
                <ListItemButton selected>
                  <ListItemIcon>
                    <BadgeIcon></BadgeIcon>
                  </ListItemIcon>
                  <ListItemText primary={"Employees List"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Settings"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon></SettingsIcon>
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </StyledDrawer>

        <StyledDashboard>
          <Typography
            sx={{
              fontSize: "30px",
              color: "#747474",
              fontWeight: "600",
              marginBottom: "1%",
              marginTop: "2%",
            }}
          >
            Employees List
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "50px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <StyledTextField
              variant="outlined"
              label="Employee ID"
              type="number"
              value={employeeId}
              onChange={(x) => setEmployeeId(x.target.value)}
            />
            <StyledButton
              variant="contained"
              onClick={handleSearch}
              startIcon={<SearchIcon />}
            >
              Search
            </StyledButton>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", color: "#747474" }}>
                    Employee ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#747474" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#747474" }}>
                    Salary
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#747474" }}>
                    Age
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#747474" }}>
                    Profile Image
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#747474" }}>
                    Annual Salary
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow
                    key={employee.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {employee.id}
                    </TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.salary}</TableCell>
                    <TableCell>{employee.age}</TableCell>
                    <TableCell>{employee.image}</TableCell>
                    <TableCell>{employee.annual_salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledDashboard>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle id="alert-dialog-title">{"Request Failed"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {errorMessage}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
}

export default App;
