// Skills Info
const skills = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
    title: "Python"
  },
  {
    img: "https://cdn.pixabay.com/photo/2014/05/07/15/19/django-339744_960_720.png",
    title: "Django"
  },
  {
    img: "https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
    title: "HTML/CSS"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    title: "C++"
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
    img: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/super_cloud.png",
    title: "Google Cloud"
  },
  {
    img: "https://www.londonappbrewery.com/wp-content/uploads/2015/09/xcode-development-icon.png",
    title: "iOS App Development"
  },
  {
    img: "https://pluspng.com/img-png/raspberry-pi-png-raspberry-pi-2-model-b-1560.png",
    title: "Raspberry Pi"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png",
    title: "Arduino"
  },
  {
    img: "https://i2.wp.com/boffosocko.com/wp-content/uploads/2014/09/Git_icon.svg_.png?fit=1024%2C1024&ssl=1",
    title: "Git"
  },
  {
    img: "https://www.lifewire.com/thmb/zLLj2KX23akNiw1i3ndWRs4KUBc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/WindowsBlueLogo-5774fe3b5f9b58587534ed22.png",
    title: "Windows"
  },
  {
    img: "https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png",
    title: "macOS"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    title: "Firebase"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    title: "AWS"
  },
  {
    img: "https://www.linuxjournal.com/sites/default/files/styles/360_250/public/nodeimage/story/bash-icon_0.png?itok=JZG6p4sq",
    title: "Bash"
  }
]

// Experience Info
const experience = [
  {
    date: "September 2019 - Present",
    title: "Teaching Assistant",
    desc: "NYU Poly EG1003 Intro to Engineering and Design. EG1003 is an introductory engineering course for first-year students consisting of lectures, lab experiments, and recitation presentations on all fields of engineering. In addition to the coursework, students work on a semester-long project with a team of students. • Work with first-year students in Open Lab sessions for introductory cornerstone engineering course (EG1003) • Mentor 3-student groups on semester-long design projects (Rapid Assembly and Design Challenge)",
    logo: "img/eg_logo.png",
    site: "https://eg.poly.edu"
  },
  {
    date: "Feburary 2019 - Present",
    title: "Computer Science Tutor",
    desc: "Tutor undergraduate students in Computer Science: Intro to Programming and Problem Solving (CS 1114) for 3 hrs/week in a semester • Answer questions / prepare students for exams and review fundamentals of computer programming and its underlying principles using the Python programming language.",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFDeOVQn-KX0Q/company-logo_200_200/0?e=2159024400&v=beta&t=MkBnM2cAin9CU6hONzNllpHhD5DJObFQ04Qrn6q5ZFE",
    site: "https://engineering.nyu.edu/academics/support-services/undergraduate-services/trio-scholars-program"
  },
  {
    date: "May 2019 - August 2019",
    title: "Research Intern",
    desc: "Summer Undergraduate Research Intern at NYU Rory Meyers College of Nursing Mentors: Dr. Win Burleson and Dr. Jeremy Rowe and Gustavo de Oliveira Almeida • Collaborated on assistive technology for dementia by integrating Raspberry Pi and computer vision • Developed functioning interface for robotic-assisted geometry system using Python & MQTT and improved research efficiency by 30% by designing iOS mobile application and integrating RabbitMQ • Led research project to develop robotic based learning system using OptiTrack motion capture system and Python to teach geometry to middle-school children at NYU-X Lab. • Worked on additional research project to develop computer vision system for individuals with dementia at NYU College of Nursing.",
    logo: "http://www.nyu-x.org/uploads/1/2/4/4/12448586/4952977.png",
    site: "http://www.nyu-x.org"
  },
  {
    date: "January 2019 - May 2019",
    title: "Project Manager",
    desc: "EG1003 RAD Design Project (SiteSeer) • Developed cost-effective, wearable device to improve accessibility of travel for the blind/visually impaired • Developed efficient navigation algorithm of assistive technology for visually impaired by implementing Raspberry Pi, Python, and Google Cloud • Organized a team of two engineering students in a semester-long ideation project • Managed 10-week design project by preparing milestone presentations, weekly reports, and demo video",
    logo: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    site: "https://github.com/kevin-chen/SiteSeer-EG1003"
  }
]

const projects = [
  {
    title: "Trivia Me This",
    logo: "https://img.icons8.com/plasticine/100/000000/questions.png",
    date: "October 2019",
    link: "http://trivia.kev-chen.me"
  },
  {
    title: "SiteSeer",
    logo: "https://media.licdn.com/dms/image/C4D12AQGPoSjQPvz2ZA/article-cover_image-shrink_720_1280/0?e=1580342400&v=beta&t=lgAX1ZhIszsYSOVvulTKpI73EANZFOGy0Jmoq1Auz38",
    date: "January 2019 – May 2019",
    link: "https://www.linkedin.com/pulse/first-year-design-project-disability-friendly-navigation-kevin-chen"
  }
]

// Awards Info
const awards = [
  {
    org: "TechFestival Hackathon",
    title: "Overall Hackathon Winner & Best Use of Google Cloud",
    image: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/apple-icon.png"
  },
  {
    org: "EG1003 RAD Project​​",
    title: "Nick Russo Award Winner for Outstanding Design",
    image: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png"
  },
  {
    org: "FIRST Robotics Inspire Award​",
    title: "Advanced to NYC Championships & Strong Outreach for STEM",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/FIRST_Logo.svg/1200px-FIRST_Logo.svg.png"
  }
]

// Summit Info
const summits = [
  {
    category: "Tech",
    title: "Software Engineering Summit",
    background: "https://media.bizj.us/view/img/11119861/cap-one-entrance*750xx2048-1152-0-192.jpg",
    description: "Highly selective one-week program at Capital One headquarters. Participated in soft-skills training and technical sessions in iOS, Android, Web Development, AWS, Bot Development, Hardware, and Machine Learning",
    logo: "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/co.png",
    company: "Capital One",
    time: "January 2020"
  }
]
