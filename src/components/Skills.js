import React from 'react'
import styled from 'styled-components'
import Code from '@material-ui/icons/Code'
import  Design  from "@material-ui/icons/DeveloperBoard";
import Powers from './Power'
import {motion} from 'framer-motion'
import Particle from './Particle'
import './Skills.css'
import { CircularProgress } from '@material-ui/core';
import {C ,Dsalgo,Js ,Problem,Git,Linux,react,front,Devops,Aws,opensrc} from '../images/export'
import Loader from 'react-loaders';
import { useState } from 'react';
import { green } from "@material-ui/core/colors";
import { useEffect } from 'react';


const Skills = () => {
let [loading,setLoading]=useState(1);


useEffect(()=>{

setTimeout(()=>{setLoading(0)},2000)

},[])

console.log(loading)
  return (
    <Cont>
      {loading ? (
        <CircularProgress
          size={68}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      ) : (
        ""
      )}

      <Powers />

      <Particle />

      {!loading ? (
        <Main>
          <Box
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ type: "spring", duration: 0.3 }}
            // style={{ left: "2vw" }}
            className="box1"
          >
            <Title>
              <Code />
              <h2>Competetive Programming</h2>
            </Title>

            <h3>I enjoy ,Love Coding</h3>

            <div className="cube">

              <div className="cubespin">
            
                <div className=" face face1">
                  <img src={C} alt="" />
                </div>
                <div className=" face face2">
                  <img src={Js} alt="" />
                </div>
                <div className=" face face3">
                  <img src={Dsalgo} alt="" />
                </div>
                <div className="face face4">
                  <img src={Git} alt="" />
                </div>
                <div className="face face5">
                  <img src={Problem} alt="" />
                </div>
                <div className="face face6">
                  <img src={Linux} alt="" />
                </div>
              </div>
            </div>
          </Box>

          <Box
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ type: "spring", duration: 0.3 }}
            style={{ left: "4vw" }}
            className="box2"
          >
            <Title>
              <Design />
              <h2>FrontendDevelopment</h2>
            </Title>

            <h3>I enjoy bringing new ideas into life</h3>

            <div className="cube">
              <div className="cubespin">
                <div className=" face face1">
                  <img src={front} alt="" />
                </div>
                <div className=" face face2">
                  <img src={react} alt="" />
                </div>
                <div className=" face face3">
                  <img src={Devops} alt="" />
                </div>
                <div className="face face4">
                  <img src={Aws} alt="" />
                </div>
                <div className="face face5">
                  <img src={Linux} alt="" />
                </div>
                <div className="face face6">
                  <img src={opensrc} alt="" />
                </div>
              </div>
            </div>
          </Box>
        </Main>
      ) : (
        ""
      )}
    </Cont>
  );
}

export default Skills

let Cont = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    circle farthest-side,
    hsla(111, 22%, 50%, 0.438),
    hsla(165, 53%, 73%, 0.438)
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

let Main = styled.div`
  width: 100vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 2s ease;
  padding: 2vw;

`;


let Box = styled(motion.div)`
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
    border: 2px solid white;
  }

  padding: 2vw;

  border: 2px solid black;
  text-align: center;
  transition: all 2s ease;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .cube {
    
    width:150px;
    height: 150px;
  }

  margin-right: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit:contain;
  }
`;let Title=styled.div`

display:flex;
justify-content:space-evenly;
align-items:center;
`

