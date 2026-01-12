import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// TypeWriter component renders text one character at a time with an optional delay
function TypeWriter({ text, speed = 80, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let timeoutId;
    let intervalId;
    // Start after optional delay
    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        setDisplayed(text.substring(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);
  return (
    <span>
      {displayed}
      <span className="cursor" />
    </span>
  );
}

function App() {
  // Data arrays for dynamic rendering
  const skillsData = [
    {
      category: 'Programming',
      items: ['Python','Java','SQL','C','MatLab','R']
    },
    {
      category: 'Data Analysis & Visualization',
      items: ['Power BI','Tableau','Excel','Pandas','SciPy','Matplotlib']
    },
    {
      category: 'Machine Learning Frameworks',
      items: ['TensorFlow/Keras','PyTorch','Hugging Face','Scikit-learn']
    },
    {
      category: 'Natural Language Processing',
      items: ['NLTK','SpaCy','Hugging Face Transformers']
    },
    {
      category: 'Agentic AI Development',
      items: ['LangChain','CrewAI','Llama-Index','Microsoft AutoGen']
    },
    {
      category: 'Deployment & Version Control',
      items: ['Git','Docker','Kubernetes','HuggingFace Spaces']
    }
  ];

  const projectsData = [
    {
      title: 'Melanoma Skin Cancer Detection',
      date: 'May 2024',
      description: 'Developed a melanoma skin cancer detection system using an ensemble of deep learning architectures, combining MobileNet, VGG19, and DenseNet121 to improve robustness and generalization in image classification. Achieved an overall classification accuracy of 85%. Deployed the trained model as a production-ready application using Flask for the backend API and containerized with Docker, enabling scalable, portable, and reproducible deployment across environments.'
    },
    {
      title: 'FashionTrendML: Women’s Clothing Trend Analysis & Visualization',
      date: 'July 2024',
      description: 'Developed FashionTrendML, a women’s clothing trend analysis pipeline using Python and machine learning to model sales, review, and seasonal features. Built supervised trend-forecasting models that achieved a 20% reduction in RMSE compared to a moving-average baseline. Applied NLP techniques on customer reviews, reaching an 82% F1-score, and used K-Means clustering to segment products, improving intra-cluster cohesion. Deployed insights via an interactive Power BI dashboard to support inventory planning and data-driven marketing decisions.'
    },
    {
      title: 'RAG-based PDF Summarizer Chatbot',
      date: 'Dec 2024',
      description: 'Built a PDF Summarizer Chatbot with a Retrieval-Augmented Generation (RAG) architecture to enable accurate document analysis and question answering. Implemented a document processing pipeline using LangChain embeddings and the OpenAI API to chunk, embed, and index PDF content for semantic retrieval. Integrated a vector-based retrieval layer to ground responses in source documents, reducing hallucinations and improving answer faithfulness, with >90% source attribution accuracy and a 35% reduction in irrelevant responses compared to a vanilla LLM baseline.'
    },
    {
      title: 'CogniClaim – Agentic RAG Claims Assistance',
      date: 'Sept 2025',
      description: 'Developed a Claims Assistance Chatbot using a Retrieval-Augmented Generation (RAG) and agentic architecture to support end-to-end insurance claims processing. The system leveraged document-grounded retrieval to guide users through claim requirements and answer policy-specific queries, achieving >90% response grounding. Implemented an agentic workflow to orchestrate multi-step tasks such as document validation, claim summarization, and rule-based checks, reducing manual review effort by 40%. Built an insurer-side dashboard to generate structured claim summaries and decision artifacts, incorporating an AI validation layer to flag missing documents and inconsistencies, improving approval/rejection turnaround time by 30%.'
    }
  ];

  const experiencesData = [
    {
      title: 'Duty Manager – Anno Santo Hotel',
      period: 'Jan 2025 – Present | Remote',
      bullets: [
        'Managed KPIs, schedules, and performance reports using MS Office, advanced Excel trackers, and Slack to coordinate cross-department operations.',
        'Built Power BI dashboards and Excel reports to monitor performance metrics and visualize insights for management.',
        'Handled phone/email communications professionally, ensuring smooth collaboration across teams and departments.',
        'Applied basic troubleshooting and data-driven problem-solving to resolve operational issues quickly.',
        'Developed and maintained technical documentation for workflows and procedures, improving cross-team collaboration and knowledge sharing.'
      ]
    },
    {
      title: 'Data Scientist – Webshark Web Services',
      period: 'Jun 2021 – Jul 2023 | Remote',
      bullets: [
        'Developed and fine-tuned machine learning models using PyTorch, improving lead scoring and user conversion prediction accuracy by 20–30% across client digital platforms.',
        'Applied Hugging Face Transformers (BERT-based models) for sentiment analysis, content classification, and keyword intent modeling, enabling data-driven SEO and marketing optimization.',
        'Designed scalable data preprocessing and feature engineering pipelines using Python (Pandas, NumPy), supporting analytics on high-volume web traffic and campaign datasets.',
        'Integrated ML outputs into business analytics dashboards and A/B testing workflows, directly influencing product and marketing decisions and improving campaign ROI by ~15%.',
        'Collaborated cross-functionally with web developers, product managers, and digital marketing teams to translate analytical insights into production-ready features and client deliverables.'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'MSc in Computer Science (Artificial Intelligence)',
      institution: 'National College of Ireland',
      period: '2023–2024',
      details: 'Result: 2.1'
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: 'Savitribai Phule Pune University',
      period: '2019–2022',
      details: 'GPA: 9.0'
    }
  ];

  // State for expanding project cards
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  // initialise particles engine
  const particlesInit = async (main) => {
    // Loads all necessary plugins for tsparticles instance
    await loadFull(main);
  };
  // configuration for moving particle background
  const particlesOptions = {
    background: {
      color: {
        value: '#0d1117'
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      // Align particle colour with the primary colour of the terminal theme
      color: { value: '#39ff14' },
      links: {
        color: '#39ff14',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      collisions: { enable: true },
      move: {
        directions: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 45
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };
  return (
    <div className="App">
      <header className="hero" id="home">
        {/* Animated particles background */}
        <Particles
          id="tsparticles"
          className="particles-background"
          init={particlesInit}
          options={particlesOptions}
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1><TypeWriter text="Bhagyalakshmi Bichchal" speed={100} /></h1>
          <p><TypeWriter text="Data Scientist | Deep Learning, AI & Data Science Enthusiast" speed={60} /></p>
          <div className="social-links">
            {/* Replace the hrefs below with your actual profiles */}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto:bhagyabichchal@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="about-section">
        <h2><TypeWriter text="About Me" speed={80} /></h2>
        <p>
          Data Scientist with 2+ years of experience building end-to-end data and machine learning solutions across
          analytics, computer vision, and natural language processing. Strong background in data collection,
          cleaning, validation, and exploratory data analysis (EDA), with hands-on experience developing Deep
          Learning and Retrieval-Augmented Generation (RAG) systems for real-world applications including
          medical image classification, document intelligence, and conversational AI. Proficient in SQL, Python,
          PyTorch, Power BI, and Excel, with a proven ability to translate complex models into production-ready
          APIs, dashboards, and decision-support tools. An effective collaborator with cross-functional teams,
          focused on delivering measurable impact through model performance improvements, process optimization,
          and clear technical documentation.
        </p>
      </section>

      <section id="skills" className="skills-section">
        <h2><TypeWriter text="Skills" speed={80} /></h2>
        <div className="skills-grid">
          {skillsData.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <h3>{skill.category}</h3>
              <ul>
                {skill.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2><TypeWriter text="Projects" speed={80} /></h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => {
            const isExpanded = idx === expandedProjectIndex;
            return (
              <div
                key={idx}
                className={`project-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setExpandedProjectIndex(isExpanded ? null : idx)}
              >
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
                {isExpanded && <p>{project.description}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2><TypeWriter text="Experience" speed={80} /></h2>
        <div className="experience-grid">
          {experiencesData.map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <span>{job.period}</span>
              <ul>
                {job.bullets.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="education-section">
        <h2><TypeWriter text="Education" speed={80} /></h2>
        <div className="education-grid">
          {educationData.map((deg, idx) => (
            <div key={idx} className="degree-card">
              <h3>{deg.degree}</h3>
              <span>{deg.institution} | {deg.period}</span>
              <p>{deg.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2><TypeWriter text="Contact" speed={80} /></h2>
        <p>Let's connect! Feel free to reach me via email or LinkedIn.</p>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:bbichchal@gmail.com">bbichchal@gmail.com</a></li>
          <li><strong>Phone:</strong> +353 892128290</li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/bbichchal" target="_blank" rel="noreferrer">linkedin.com/in/bbichchal</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Bhagyalakshmi09" target="_blank" rel="noreferrer">github.com/Bhagyalakshmi09</a></li>
        </ul>
        <a className="btn" href="resume.pdf" download>Download Resume</a>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bhagyalakshmi Bichchal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
