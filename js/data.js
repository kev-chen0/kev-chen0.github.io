const about_description = ["I am a rising second-year student, majoring in Computer Science, at NYU School of Engineering. I aspire to combine my passions in programming and engineering by exploring fields such as IoT and robotics. During my free time, I enjoy creating projects relating to social good and the community using IoT with Arduino/Raspberry Pi and Google Cloud along with iOS app development.",
"Last semester, I worked on multiple hackathon projects and developed an assistive technology to increase the accessibility of navigation for blind individuals, winning the best use of Google Cloud."]

const skills = [
  {
    img: "http://pluspng.com/img-png/raspberry-pi-png-raspberry-pi-2-model-b-1560.png",
    title: "Raspberry Pi"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png",
    title: "Arduino"
  },
  {
    img: "https://news.bitcoin.com/wp-content/uploads/2018/06/880593_media_512x512-300x300.png",
    title: "Github"
  },
  {
    img: "http://ziobron.net/media/blogs/blog/quick-uploads/p38/_evocache/python-logo.png/fit-520x390.png?mtime=1462471735",
    title: "Python"
  },
  {
    img: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/super_cloud.png",
    title: "Google Cloud"
  },
  {
    img: "https://www.londonappbrewery.com/wp-content/uploads/2015/09/xcode-development-icon.png",
    title: "iOS App Development"
  },
  {
    img: "https://www.softexia.com/wp-content/uploads/2017/04/Java-logo.png",
    title: "Java"
  },
  {
    img: "https://apprendre-a-coder.com/wp/wp-content/uploads/2019/01/swift.png",
    title: "Swift"
  },
  {
    img: "https://www.lifewire.com/thmb/zLLj2KX23akNiw1i3ndWRs4KUBc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/WindowsBlueLogo-5774fe3b5f9b58587534ed22.png",
    title: "Windows"
  },
  {
    img: "http://icons.iconarchive.com/icons/ampeross/smooth/256/Apple-Finder-icon.png",
    title: "macOS"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    title: "Firebase"
  },
]

const experience = [
  {
    date: "May 2019 - Present",
    title: "Undergraduate Research Intern",
    desc: "Summer Undergraduate Research Intern at NYU Rory Meyers College of Nursing Mentors: Dr. Win Burleson and Dr. Jeremy Rowe and Gustavo de Oliveira Almeida • Collaborate on assistive technology for dementia by integrating Raspberry Pi and computer vision • Developed functioning interface for robotic-assisted geometry system using Python & MQTT and improved research efficiency by 30% by designing iOS mobile application and integrating RabbitMQ • Led research project to develop robotic based learning system using OptiTrack motion capture system and Python to teach geometry to middle-school children at NYU-X Lab. • Worked on additional research project to develop computer vision system for individuals with dementia at NYU College of Nursing.",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFDeOVQn-KX0Q/company-logo_400_400/0?e=1571875200&v=beta&t=aH0A64DH70Ms8ytLU6KaXFuJua7bZNbA1oHNQr5dEQg"
  },
  {
    date: "January 2019 - May 2019",
    title: "Project Manager",
    desc: "EG1003 RAD Design Project (SiteSeer) • Developed cost-effective, wearable device to improve accessibility of travel for the blind/visually impaired • Developed efficient navigation algorithm of assistive technology for visually impaired by implementing Raspberry Pi, Python, and Google Cloud • Organized a team of two engineering students in a semester-long ideation project • Managed 10-week design project by preparing milestone presentations, weekly reports, and demo video",
    logo: "./assets/siteseer_logo.png"
  },
  {
    date: "May 2019 - Present",
    title: "Teaching Assistant",
    desc: "NYU Poly EG1003 Intro to Engineering and Design. EG1003 is an introductory engineering course for first-year students consisting of lectures, lab experiments, and recitation presentations on all fields of engineering. In addition to the coursework, students work on a semester-long project with a team of students.",
    logo: "./assets/eg_logo.png"
  },
  {
    date: "Feburary 2019 - Present",
    title: "Computer Science Tutor",
    desc: "Tutor undergraduate students in Computer Science: Intro to Programming and Problem Solving (CS 1114) for 3 hrs/week in a semester • Answer questions / prepare students for exams and review fundamentals of computer programming and its underlying principles using the Python programming language.",
    logo: "data:image/png;base64,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"
  }
]

const awards = [
  {
    org: "TechFestival Hackathon",
    title: "Hackathon Winner & Best Use of Google Cloud"
  },
  {
    org: "EG1003 RAD Project​ (SiteSeer)​",
    title: "Nick Russo Award Winner for Outstanding Design"
  },
  {
    org: "FIRST Robotics Inspire Award​",
    title: "Advanced to NYC Championships & Strong Outreach for FIRST Robotics"
  }
]

const projects = [
  // "assets/bloxxers.png" or "www"
  {
    image: "http://makerspace.engineering.nyu.edu/wp-content/uploads/2019/05/Mini-Grant-1.jpg",
    title: "SiteSeer: Visually Impaired Navigator",
    skills: "Raspberry Pi • Python • Google Cloud",
    link: "www.nyu.edu",
    description: "Course Engineering Project • SiteSeer is a cost-effective application that improves the accessibility of travel for the visually impaired to navigate in the urban environment. Those who are visually impaired will find it difficult to complete what may be perceived as simple tasks by those who are not disabled such as crossing streets, finding directions, and safely reaching one’s destination. This project directly addresses the demand for more disability-friendly applications for the blind. • Configured Google Cloud & Camera/Sensors to operate on Raspberry Pi to provide feedback such as using image recognition and learning by utilizing Google APIs to provide directions and write an algorithm • Created iOS App: to obtain GPS location from the phone, provide live-feed, speech services (speech-to-text to get destination from user, text-to-speech to give user instructions)",
    video: "https://www.youtube.com/embed/6Ao1gqjm5do"
  },
  {
    image: "https://www.nyu.edu/content/nyu/en/about/news-publications/news/2016/june/grade-school-students-teach-a-robot-to-help-themselves-learn-geometry/jcr:content/page/image.img.620.high.jpg/1471387584497.jpg",
    title: "Tangible Activities for Geometry: NYU-X",
    skills: "Motion Capture, MQTT Networking, iOS app",
    link: "www.nyu-x.org",
    description: "Research Project • Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture at NYU-X lab."
  },
  {
    image: "https://github.com/kevin-c0/Pong-iOS-App/raw/master/pong.gif",
    title: "Ping Pong Game: iOS Bootcamp App",
    skills: "Swift",
    link: "www.github.com",
    description: "Proof of concept iOS game in Swift with features: 2-Player and Computer and background music. The pong game was created using SpriteKit in Xcode and is developed in Game template. Developed to explore new iOS features such as background music and multi-touch on iOS devices."
    }
]

const timeline = [
  {
    date: "Sep 2014 - Jun 2018",
    title: "High School",
    subtitle: "",
    desc: "",
    location: "New York, USA"
  },
  {
    date: "February 2018",
    title: "FIRST Tech Challenge Inspire Award",
    subtitle: "FTC NYC Championships",
    desc: "",
    location: "New York, USA"
  },
  {
    date: "September 2018 - May 2022",
    title: "Pursuing Bachelors in Computer Science",
    subtitle: "New York University",
    desc: "Tandon School of Engineering",
    location: "New York, USA"
  },
  {
    date: "January 2019 - May 2019",
    title: "SiteSeer EG1003 Project",
    subtitle: "Best Use of Google Cloud",
    desc: "",
    location: "New York, USA"
  },
  {
    date: "May 2019 - Aug 2019",
    title: "Undergraduate Research Intern",
    subtitle: "NYU-X Lab",
    desc: "",
    location: "New York, USA"
  }
]
