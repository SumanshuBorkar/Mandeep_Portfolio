import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PagesProject.css';
import SixthFloor from '../images/Frame 1.png';
import smokee from '../images/SMOKEE.png';
import lonely from '../images/Lonely.png';
import cybershiva from '../images/CyberShiva.png';
import experiment from '../images/Experiment.png';
import nude from '../images/Nude.png';
import vision from "../images/Vision.png"
import woods from "../images/Frame 6.png"
import smoking from "../images/smokeing.png"
import asteral from "../images/astral.png"

const PagesProject = () => {
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: "छट्टी मंजिल", image: SixthFloor, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 2, name: "SMOKEE", image: smokee, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 3, name: "Lonely", image: lonely,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 4, name: "Cyber Shiva", image: cybershiva ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 5, name: "Experiment", image: experiment ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 6, name: "Anastatia", image: nude ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 7, name: "Into the woods", image: woods ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 8, name: "Solitude", image: smoking ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 6, name: "Vision", image: vision ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    { id: 6, name: "Astral", image: asteral ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quaerat maiores quidem voluptatem doloremque hic. Commodi, molestias dolore deleniti nisi dolores eum dolorem sint nam repellendus, quo autem, hic earum?"
    },
    
  ];

  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => navigate("/projectDetails", { state: project })}
          className="item"
        >
          <img style={{maxWidth:"30vw"}} src={project.image} alt={project.name} />
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PagesProject;
