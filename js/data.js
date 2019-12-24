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
    head_image: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
    category_title: "Software Engineering Experience",
    real_title: "Software Engineer",
    link_name: "JP Morgan Chase",
    demo_link: "https://drive.google.com/file/d/1Ymdl_Vf2ax2rFHbA_LYKF_JbNHsgIDv0/view?usp=sharing",
    site: "",
    long_description: ["Participated in JP Morgan Chase's online internship experience", "Utilized JPMC's Perspective software to analyze graphical data and output usable information in a graphical web application"],
    short_description: "Participated in JP Morgan Chase's online internship experience",
    date: "October 2019 – December 2019",
  },
  {
    head_image: "https://github.com/kevin-chen/kevin-chen.github.io/blob/master/img/eg_logo.png?raw=true",
    category_title: "Teaching Assistant",
    real_title: "Intro to Engineering and Design",
    link_name: "EG1003 Course",
    demo_link: "https://eg.poly.edu/staffimages.php?staff=ta",
    site: "",
    long_description: ["Work with students in first year engineering course", "Mentor first-year students in semester-long design projects for introductory cornerstone engineering course, EG1003 Intro to Engineering and Design"],
    short_description: "Work with students in first year engineering course",
    date: "September 2019 - Present",
  },
  {
    head_image: "https://engineering.nyu.edu/sites/default/files/2019-01/tandon_long_color.png",
    category_title: "Computer Science Peer Tutor",
    real_title: "TRIO Scholars Program",
    link_name: "TRIO",
    demo_link: "https://engineering.nyu.edu/academics/support-services/undergraduate-services/trio-scholars-program",
    site: "",
    long_description: ["Tutor undergraduate students in Intro to Programming and Problem Solving (CS 1114) and Data Structures and Algorithms (CS 1134)", "Answer questions / prepare students for exams in fundamentals of computer programming and its underlying principles using the Python programming language for 3 hrs/week in a semester"],
    short_description: "Tutor undergraduate students in Intro to Programming and Problem Solving (CS 1114) and Data Structures and Algorithms (CS 1134)",
    date: "Feburary 2019 - Present",
  },
  {
    head_image: "http://holodeck.nyu.edu/images/p51_final-deckimage.jpg?crc=4138249261",
    category_title: "Research Intern",
    real_title: "NYU Holodeck Project",
    link_name: "Holodeck",
    demo_link: "https://www.nyu.edu/about/news-publications/publications/alumni-magazine/spring-2018/features/welcome-to-the-holodeck.html",
    site: "",
    long_description: ["Worked on NYU Holodeck Project to create an immersive, collaborative, virtual/ physical research environment providing unparalleled tools for research collaborations, intellectual exploration, and creative output", " Collaborated with investigators in NSF-funded research project to develop robotic learning system using OptiTrack, Python, iOS application, and MQTT broker, in collaboration with the NYU Holodeck Project"],
    short_description: "Worked on NYU Holodeck Project to create an immersive, collaborative, virtual/ physical research environment providing unparalleled tools for research collaborations, intellectual exploration, and creative output",
    date: "May 2019 - August 2019",
  },
  {
    head_image: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    category_title: "Project Manager",
    real_title: "SiteSeer",
    link_name: "Project Folder",
    demo_link: "https://drive.google.com/drive/folders/1U-yyWOkJXzUdYX6WLRdEcKGQGR0_xiCT?usp=sharing",
    site: "",
    long_description: ["Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud", "Managed 10-week design project by preparing milestone presentations, weekly reports, and demo video"],
    short_description: "Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud",
    date: "January 2019 - May 2019",
  }
]

// Project Info
const projects = [
  {
    head_image: "https://img.icons8.com/plasticine/100/000000/questions.png",
    category_title: "Trivia Me This",
    real_title: "Trivia Web Application",
    link_name: "Live Web Application",
    demo_link: "http://trivia.kev-chen.me/",
    site: "",
    long_description: ["Developed a web application for the Capital One Software Engineering Summit in Winter 2020", "Utilized HTML, CSS, Python/Django, and Javascript to develop a Jeopardy-style web application"],
    short_description: "Developed a web application for the Capital One Software Engineering Summit in Winter 2020",
    date: "October 2020",
  },
  {
    head_image: "http://makerspace.engineering.nyu.edu/wp-content/uploads/2019/05/Mini-Grant-1.jpg",
    category_title: "SiteSeer",
    real_title: "First Year Engineering Project",
    link_name: "MakerSpace Article",
    demo_link: "http://makerspace.engineering.nyu.edu/designlab/personal-navigator/",
    site: "",
    long_description: ["Developed disability friendly application for those with vision impairments to navigate indepedently", "Implemented Google Cloud with Firebase, AutoVision ML, Storage, Directions API, and Speech Services to develop assistive navigation technology", "<div class='fix_center intro intro-single route'> <iframe width='2000px'; height='1000px'; class='intro intro-single' src='https://www.youtube.com/embed/WR3HkmROxYw'></iframe></div>"],
    short_description: "Developed disability friendly application for those with vision impairments to navigate indepedently",
    date: "January 2019 – May 2019",
  }
]

// Activities Info
const activities = [
  {
    title: "HackNYU Tech Team",
    desc: "Worked in a team of other NYU students to create a website for registration for HackNYU 2020 Hackathon",
    logo: "img/hacknyu-logo.png",
    site: "https://hacknyu.org/",
    //
    // head_image: "../img/hacknyu-logo.png",
    // category_title: "HackNYU Tech Team",
    // real_title: "",
    // link_name: "Capital One",
    // demo_link: "https://campus.capitalone.com/summits/",
    // site: "",
    // long_description: ["Highly selective one-week technical program at Capital One headquarters", "Culminated in a rigorous hackathon and technical interview with Capital One engineers", "Participated in soft-skills training and technical sessions in iOS, Android, Web Development, AWS, Bot Development, Hardware, and Machine Learning"],
    // short_description: "Highly selective one-week technical program at Capital One headquarters",
    // date: "January 2020",
    //
    // logo: "img/hacknyu-logo.png",
    // company: "Capital One",
  }
]

// Awards Info
const awards = [
  {
    org: "TechFestival Hackathon",
    title: "Overall Hackathon Winner & Best Use of Google Cloud",
    image: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/apple-icon.png",
    date: "March 2019"
  },
  {
    org: "EG1003 RAD Project​​",
    title: "Nick Russo Award Winner for Outstanding Design",
    image: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    date: "May 2019"
  },
  {
    org: "FIRST Robotics Inspire Award​",
    title: "Advanced to NYC Championships & Strong Outreach for STEM",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/FIRST_Logo.svg/1200px-FIRST_Logo.svg.png",
    date: "January 2018"
  }
]

// Summit Info
const summits = [
  {
    head_image: "https://media.bizj.us/view/img/11119861/cap-one-entrance*750xx2048-1152-0-192.jpg",
    category_title: "Software Engineering Summit",
    real_title: "Sumitter",
    link_name: "Capital One",
    demo_link: "https://campus.capitalone.com/summits/",
    site: "",
    long_description: ["Highly selective one-week technical program at Capital One headquarters", "Culminated in a rigorous hackathon and technical interview with Capital One engineers", "Participated in soft-skills training and technical sessions in iOS, Android, Web Development, AWS, Bot Development, Hardware, and Machine Learning"],
    short_description: "Highly selective one-week technical program at Capital One headquarters",
    date: "January 2020",

    logo: "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/co.png",
    company: "Capital One",
  }
]
