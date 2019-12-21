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
  },
  {
    img: "https://www.mon-code.net/logo/rabbitmq.png",
    title: "MQTT"
  }
]

// Experience Info
const experience = [
  {
    date: "October 2019 – December 2019",
    title: "Virtual Software Engineering Experience",
    desc: "Utilized JPMC’s Perspective software to analyze graphical data and output usable information in a graphical web application",
    logo: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
    site: "assets/jpmorgan_info.html"
  },
  {
    date: "September 2019 - Present",
    title: "Teaching Assistant",
    desc: "Mentor first-year students in semester-long design projects for introductory cornerstone engineering course, EG1003 Intro to Engineering and Design",
    logo: "img/eg_logo.png",
    site: "assets/egta_info.html"
  },
  {
    date: "Feburary 2019 - Present",
    title: "Computer Science Peer Tutor",
    desc: "Tutor undergraduate students in Intro to Programming and Problem Solving (CS 1114) and Data Structures and Algorithms (CS 1134)",
    logo: "https://engineering.nyu.edu/sites/default/files/2019-01/tandon_long_color.png",
    site: "assets/cstutor_info.html"
  },
  {
    date: "May 2019 - August 2019",
    title: "Research Intern",
    desc: "Assisted in NSF-Funded research project to develop robot-based learning system to teach middle-school geometry",
    logo: "https://levittown-tribune.com/wp-content/uploads/2016/07/Nurse_062916B.jpg",
    site: "assets/research_info.html"
  },
  {
    date: "January 2019 - May 2019",
    title: "Project Manager",
    desc: "Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud",
    logo: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    site: "assets/rad_info.html"
  }
]

// Project Info
const projects = [
  {
    title: "Trivia Me This",
    logo: "https://img.icons8.com/plasticine/100/000000/questions.png",
    date: "October 2019",
    link: "assets/trivia_me_this_info.html",
    desc: "Implemented Google Cloud with Firebase, AutoVision ML, Storage, Directions API, and Speech Services to develop assistive navigation technology"
  },
  {
    title: "SiteSeer",
    logo: "http://makerspace.engineering.nyu.edu/wp-content/uploads/2019/05/Mini-Grant-1.jpg",
    date: "January 2019 – May 2019",
    link: "assets/siteseer_info.html",
    desc: "Developed a web application for the Capital One Software Engineering Summit in Winter 2020. Utilized HTML, CSS, Python/Django, and Javascript to develop a Jeopardy-style web application"
  }
]

// Activities Info
const activities = [
  {
    title: "HackNYU Tech Team",
    desc: "Worked in a team of other NYU students to create a website for registration for HackNYU 2020 Hackathon",
    logo: "img/hacknyu-logo.png",
    site: "http://hacknyu.org/"
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
    desc: "Highly selective one-week training program at Capital One headquarters in McLean, VA",
    logo: "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/co.png",
    company: "Capital One",
    time: "January 2020",
    site: "assets/casummit_info.html"
  }
]
