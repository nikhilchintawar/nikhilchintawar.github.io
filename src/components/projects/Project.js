import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from "uuid";
import { Link } from 'react-router-dom';

import "./project.styles.css";

const Project = () => {
    const [githubData, setGithubData] = useState([])

    const fetchGithubRepos = async() =>{
        try{
            const {data} = await Axios.get('https://api.github.com/users/nikhilchintawar/repos');
            
            const reposWithUrl = data.filter(filterData => {
              return filterData.homepage !== null;
            })

            console.log(reposWithUrl)
            setGithubData(reposWithUrl)

        }catch(error){
            console.log(error)
        }       
    } 

    useEffect(() => {
        fetchGithubRepos()
    },[])

    return (
        <div>
          <Link to='/' className="header">
              <span className="logo-container">Nikhil Chintawar</span>
              <span className="options">Homepage</span>
          </Link>
            <h2 className="title">PROJECTS</h2>
            <div className="project">
          {
              githubData.map(data => {
                  return (
                    <div key={uuidv4()} className="github-project-card">
                        <h3 className="github-project-title">{data.name}</h3>
                        <p className="github-project-description">{data.description}</p>
                        <div className="github-project-link">
                            <Link to={data.html_url} target="_blank" rel="noopener noreferrer"><span className="github-project-source">SOURCE CODE</span></Link>
                            <Link to={data.homepage} target="_blank" rel="noopener noreferrer"><span className="github-project-source">SEE LIVE</span></Link>
                        </div>
                    </div>
                      
                  )
              })
          }
          </div>
        </div>
    );
};

export default Project;