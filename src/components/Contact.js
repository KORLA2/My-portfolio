import React,{useRef} from "react";
import styled, { keyframes } from "styled-components";
import Powers from "./Power";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import Particle from "./Particle";
import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3l8tt4l",
        "__ejs-test-mail-service__",
        form.current,
        "cTOjjkFuf2DlEUxss"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    }


  return (
    <div>
      <Powers />
      <Particle />

      <Main>
        <Box
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ type: "spring", duration: 0.3 }}
          style={{ left: "2vw" }}
        >
          <form  ref={form} onSubmit={sendEmail}>
            <ul>
              <li
             
              >
                <input type="text" name="Name" placeholder="Name" required />
              </li>
              <li>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your email"
                />
              </li>
              <li>
                <textarea
                  placeholder="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </li>

              <Button variant="contained" color="secondary" type="submit">
                Send
              </Button>
            </ul>
          </form>
        </Box>

        <Box
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "50%", opacity: 1 }}
          transition={{ type: "spring", duration: 0.3 }}
          style={{ left: "4vw" }}
        ></Box>
      </Main>
    </div>
  );
};

export default Contact;

let Main = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    circle farthest-side,
    hsla(143, 75%, 50%, 0.438),
    hsla(151, 19%, 76%, 0.438)
  );

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 2s ease;
`;

let float = keyframes`
0%{
  transform:translateY(-10px);
}
50%{
  transform:translateY(15px) translateX(15px);

}
100%{
  transform:translateY(-10px) ;


}
`;
let Box = styled(motion.div)`
  text-align: center;
  transition: 2s ease;
  position: relative;
  border: 2px solid black;

li{

    list-style: none;
    margin-bottom:30px;

}
    input{

        border:2px solid white;
    }

  div {
    position: relative;
    animation: ${float} 4s ease infinite;
  }
  &:hover {
    color: white;
    border: 2px solid white;

    background: black;
  }
`;
let Hero = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
