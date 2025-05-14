/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Nihar Patel",
  title: "Hi, I'm Nihar",
  subTitle: emoji(
    "A passionate Software Developer specializing in Machine Learning and Data Science. I thrive on solving complex problems and building impactful solutions using cutting-edge technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sMTcw-9EG0bIte_Zt3S1RxyFWQZ6WaHO/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/niharpatel1999",
  linkedin: "https://www.linkedin.com/in/niharpatel1999/",
  gmail: "npatel69@asu.edu",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "Machine Learning | Data Science | Software Development",
  skills: [
    emoji("⚡ Build scalable, production-ready models for deep learning and statistical applications."),
    emoji("⚡ Leverage expertise in Computer Vision and Data Science to deliver innovative solutions."),
    emoji("⚡ Create end-to-end, data-driven systems tailored to client needs.")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASUlogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2021 - May 2023",
      descBullets: [
        "Studied Mobile Computing, Data-Intensive Systems for ML, and Information Assurance.",
        "Planned coursework in Knowledge Representation, Data Mining, and Deep Learning.",
        "Worked as a TA for Algorithms and Research Aide under Professor Li."
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/gtuLOGO.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2017 - July 2021",
      descBullets: [
        "Mastered core CS topics: Data Structures, Algorithms, DBMS, and Operating Systems.",
        "Completed online courses in Deep Learning, Data Science, and NLP.",
        "Published 3 conference papers on computer vision and yield estimation."
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Machine Learning", progressPercentage: "80%" },
    { Stack: "Python", progressPercentage: "70%" },
    { Stack: "Data Science", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work Experience Section (Updated with Amazon Job)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Engineer",
      company: "Amazon",
      // companylogo: require("./assets/images/amazonLogo.png"), // Add Amazon logo to assets
      date: "December 2023 – Present",
      descBullets: [
        "Design and develop scalable software solutions to enhance Amazon’s infrastructure and services.",
        "Collaborate with cross-functional teams to implement features, leveraging AWS and modern development practices."
      ] // Placeholder details; update with specifics if desired
    },
    {
      role: "Graduate Student Assistant",
      company: "Arizona State University",
      companylogo: require("./assets/images/ASUlogo.png"),
      date: "December 2021 – May 2023", // Adjusted end date to reflect graduation
      descBullets: [
        "Enhanced Neural ODEs and LSTMs for video decoding, improving accuracy by 5% over state-of-the-art models.",
        "Developed continuous-time behavior capture for complex entity tracking."
      ]
    },
    {
      role: "Computer Vision Intern",
      company: "Arihant Satiate",
      companylogo: require("./assets/images/ASlogo.png"),
      date: "April 2020 – July 2020",
      descBullets: [
        "Deployed a Flask-based system on AWS (EC2, S3) for multi-request handling.",
        "Optimized CNNs for COVID-19 classification, achieving 97% accuracy on 5,000 X-ray images."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Silver Touch Technologies",
      companylogo: require("./assets/images/STlogo.png"),
      date: "March 2020 – June 2020",
      descBullets: [
        "Built a video-to-text summary system using CNNs for object detection and LSTM for captioning.",
        "Integrated deep learning to generate concise video descriptions."
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Projects 📝",
  subtitle: "Academic and Personal Projects That Define My Expertise",
  projects: [
    {
      image: require("./assets/images/irass.webp"),
      projectName: "Image Recognition as a Service",
      projectDesc: "Designed an auto-scaling image recognition service using AWS EC2, SQS, and S3, reducing response time by over 1 minute with load balancing.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/niharpatel1999/image-recognition-service" }
      ]
    },
    {
      image: require("./assets/images/yeuap.jpeg"),
      projectName: "Yield Estimation using Agricultural Parameters",
      projectDesc: "Developed a crop yield prediction system using 5 years of data across 6 crops, with a user-friendly app for input and estimation.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/niharpatel1999/yield-estimation" }
      ]
    },
    {
      image: require("./assets/images/sgts.webp"),
      projectName: "Smart Garbage Tracking System",
      projectDesc: "Customized object tracking for garbage detection in CCTV footage (62% precision), integrated with Flask for automated email alerts.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/niharpatel1999/smart-garbage-tracking" }
      ]
    },
    {
      image: require("./assets/images/ddfrs.jpeg"),
      projectName: "Disease Detection from Retinal Scans",
      projectDesc: "Built a CNN-based system to detect 7 diseases from retinal scans (85% accuracy), with a web app for probability prediction.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/niharpatel1999/disease-detection-retinal" }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Key Achievements and Recognitions",
  achievementsCards: [
    {
      title: "Deep Learning Specialization",
      subtitle: "Completed a 5-course specialization.",
      image: require("./assets/images/dlai.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/18ivfnUpiKePh6xZtoRz8iMTl_6_VXAvU/view?usp=sharing" }
      ]
    },
    {
      title: "Data Visualization with Tableau Specialization",
      subtitle: "Mastered Tableau across 5 courses.",
      image: require("./assets/images/ucdavis.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1VdSPdGILc1rnNFrB9AJEyATRupN9hV_L/view?usp=sharing" }
      ]
    },
    {
      title: "Machine Learning by Stanford",
      subtitle: "Completed Andrew Ng’s renowned course.",
      image: require("./assets/images/stanford.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1awpvXaEty8kPfxL_rr3B_cbG3Ztg6X2R/view?usp=sharing" }
      ]
    },
    {
      title: "Deep Learning Specialization (IITM)",
      subtitle: "Completed a 13-course specialization.",
      image: require("./assets/images/iitm.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/12thrxKWnk5Bs564O7pVPhndDE0UYIiwW/view?usp=sharing" }
      ]
    }
  ],
  display: true
};

// Blogs, Talks, Podcast, Twitter (unchanged)
const blogSection = { /* unchanged */ };
const talkSection = { /* unchanged */ };
const podcastSection = { /* unchanged */ };
const twitterDetails = { /* unchanged */ };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in a project or just want to connect? Reach out!",
  number: "+1 480-524-5498",
  email_address: "npatel69@asu.edu"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};