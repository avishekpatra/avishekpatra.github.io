// Mock data for Avishek Patra's portfolio
export const mockData = {
  personal: {
    name: "Avishek Patra",
    title: "Lead Engineer | ADAS & Autonomous Driving Specialist | Perception Stack Architect",
    location: "Berlin, Germany",
    nationality: "Indian",
    languages: ["English", "Hindi", "German (B1)"],
    family: "Married with 1 child",
    email: "avishekpatra.rwth@gmail.com",
    phone: "+49 176 5548 6123",
    instagram: "@thewanderingchubbies",
    googleScholar: "https://scholar.google.com/citations?user=7Qi-vVEAAAAJ&hl=en"
  },
  
  about: {
    summary: "Electrical Engineer with over 7 years of experience in radar, camera, and LiDAR-based systems for next-generation ADAS and Autonomous Driving solutions.",
    highlight: "Currently serving as Lead Engineer at Magna Electronics, specializing in ego modeling, perception stack development, and ASPICE-compliant workflows for cutting-edge automotive technologies."
  },

  experience: [
    {
      id: 1,
      company: "Magna Electronics",
      position: "Lead Engineer",
      period: "2022 – Present",
      location: "Berlin, Germany",
      responsibilities: [
        "Leading perception stack development for next-gen ADAS systems",
        "Architecting ego modeling solutions for autonomous vehicles",
        "Implementing ASPICE-compliant development workflows",
        "Managing cross-functional teams for radar and camera integration"
      ]
    },
    {
      id: 2,
      company: "Aptiv",
      position: "Software Algorithm Engineer & Product Owner",
      period: "2020 – 2022",
      location: "Germany",
      responsibilities: [
        "Developed advanced perception algorithms for autonomous driving",
        "Led product roadmap for ADAS software solutions",
        "Collaborated with hardware teams on sensor fusion implementations",
        "Managed agile development processes for critical safety systems"
      ]
    },
    {
      id: 3,
      company: "Altran / Capgemini",
      position: "ADAS Consultant",
      period: "2018 – 2020",
      location: "Germany",
      responsibilities: [
        "Provided technical consulting for major automotive OEMs",
        "Designed and implemented ADAS testing frameworks",
        "Optimized sensor calibration and validation processes",
        "Delivered training programs on functional safety standards"
      ]
    },
    {
      id: 4,
      company: "RWTH Aachen University",
      position: "Research Assistant",
      period: "2013 – 2017",
      location: "Aachen, Germany",
      responsibilities: [
        "Conducted research on radio tomography and localization systems",
        "Developed algorithms for wireless sensor networks",
        "Published research papers in IEEE conferences",
        "Supervised undergraduate students in research projects"
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "M.Sc. in Electrical Engineering",
      institution: "RWTH Aachen University",
      period: "2013 – 2017",
      location: "Aachen, Germany",
      grade: "1.5 GPA (German system)",
      specialization: "Communications and Signal Processing"
    },
    {
      id: 2,
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "West Bengal University of Technology (WBUT)",
      period: "2009 – 2013",
      location: "India",
      grade: "8.7/10",
      specialization: "Electronics and Communication"
    }
  ],

  skills: {
    technical: ["C", "C++", "Python", "MATLAB", "Simulink", "ROS", "OpenCV", "PCL"],
    tools: ["Vector CANoe", "JIRA", "Git", "DOORS", "Polarion", "Confluence", "Jenkins", "Docker"],
    competencies: ["ASPICE", "SCRUM/SAFe", "DFMEA", "ISO 26262", "System Architecture", "Perception Algorithms", "Sensor Fusion", "Functional Safety"]
  },

  certifications: [
    {
      id: 1,
      name: "Project Management Professional (PMP)",
      status: "Ongoing",
      year: "2024"
    },
    {
      id: 2,
      name: "IEEE-IFIP Best Paper Finalist",
      status: "Awarded",
      year: "2013"
    },
    {
      id: 3,
      name: "Winner - Self-Driving Vehicle Design Competition",
      status: "Awarded", 
      year: "2009"
    }
  ],

  projects: [
    {
      id: 1,
      name: "ULLA-X Localization System",
      description: "Advanced radio tomography system for indoor localization using wireless sensor networks",
      technologies: ["MATLAB", "C++", "Wireless Sensors"],
      videoUrl: "https://example.com/ulla-x-demo",
      type: "Research Project"
    },
    {
      id: 2,
      name: "Perception Stack Architecture",
      description: "Complete perception pipeline for autonomous vehicles integrating radar, camera, and LiDAR data",
      technologies: ["C++", "ROS", "OpenCV", "PCL"],
      type: "Industry Project"
    },
    {
      id: 3,
      name: "Radio Tomography Demo",
      description: "Real-time demonstration of radio frequency based imaging and localization",
      technologies: ["Python", "MATLAB", "RF Systems"],
      videoUrl: "https://example.com/radio-tomo-demo",
      type: "Research Demo"
    }
  ],

  photography: {
    description: "Passionate about travel and street photography, capturing moments from around the world.",
    instagramUrl: "https://instagram.com/thewanderingchubbies",
    featured: [
      "Travel Photography",
      "Street Photography", 
      "Automotive Photography",
      "Technology Documentation"
    ]
  }
};