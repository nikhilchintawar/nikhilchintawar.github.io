import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from "uuid";

import "./project.styles.css";

const Project = ({id}) => {
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
        <div id={id}>
            <h2>PROJECTS</h2>
            <div className="project">
          {
              githubData.map(data => {
                  return (
                    <div key={uuidv4()} className="github-project-card">
                        <h3 className="github-project-title">{data.name}</h3>
                        <p className="github-project-description">{data.description}</p>
                        <div className="github-project-link">
                            <a href={data.html_url} target="_blank" rel="noopener noreferrer"><span className="github-project-source">SOURCE CODE</span></a>
                            <a href={data.homepage} target="_blank" rel="noopener noreferrer"><span className="github-project-source">SEE LIVE</span></a>
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