export {default as C } from  './C.png'
export { default as Dsalgo } from "./Dsalgo.jpg";
export { default as Git } from "./GitvsGithub.png";
export { default as Linux } from "./linuximg.png";
export { default as Problem } from "./problemsolving.jpg";
export { default as Js } from "./Javascript.png";
export { default as front } from "./frontend.png";
export { default as Devops } from "./devops.jpg";
export { default as  Aws} from "./aws.jpg";
export { default as react } from "./react.png";



// import * as React from "react";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";
// import { green } from "@mui/material/colors";
// import Button from "@mui/material/Button";
// import Fab from "@mui/material/Fab";
// import CheckIcon from "@mui/icons-material/Check";
// import SaveIcon from "@mui/icons-material/Save";

// export default function CircularIntegration() {
//   const [loading, setLoading] = React.useState(false);
//   const [success, setSuccess] = React.useState(false);
//   const timer = React.useRef();

//   const buttonSx = {
//     ...(success && {
//       bgcolor: green[500],
//       "&:hover": {
//         bgcolor: green[700],
//       },
//     }),
//   };

//   React.useEffect(() => {
//     return () => {
//       clearTimeout(timer.current);
//     };
//   }, []);

//   const handleButtonClick = () => {
//     if (!loading) {
//       setSuccess(false);
//       setLoading(true);
//       timer.current = window.setTimeout(() => {
//         setSuccess(true);
//         setLoading(false);
//       }, 2000);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", alignItems: "center" }}>
//       <Box sx={{ m: 1, position: "relative" }}>
//         <Fab
//           aria-label="save"
//           color="primary"
//           sx={buttonSx}
//           onClick={handleButtonClick}
//         >
//           {success ? <CheckIcon /> : <SaveIcon />}
//         </Fab>
//         {loading && (
//           <CircularProgress
//             size={68}
//             sx={{
//               color: green[500],
//               position: "absolute",
//               top: -6,
//               left: -6,
//               zIndex: 1,
//             }}
//           />
//         )}
//       </Box>
//       <Box sx={{ m: 1, position: "relative" }}>
//         <Button
//           variant="contained"
//           sx={buttonSx}
//           disabled={loading}
//           onClick={handleButtonClick}
//         >
//           Accept terms
//         </Button>
//         {loading && (
//           <CircularProgress
//             size={24}
//             sx={{
//               color: green[500],
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               marginTop: "-12px",
//               marginLeft: "-12px",
//             }}
//           />
//         )}
//       </Box>
//     </Box>
//   );
// }