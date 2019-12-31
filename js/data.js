// Skills Info
const skills = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
    title: "Python",
    subtitle: "Experienced with Python utilized in multiple projects implementing APIs, OpenCV, Django, and Multi-Threading"
  },
  {
    img: "https://cdn.pixabay.com/photo/2014/05/07/15/19/django-339744_960_720.png",
    title: "Django",
    subtitle: "Utilized Django and Flask for web applications such as trivia and to-do list"
  },
  {
    img: "https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
    title: "HTML/CSS",
    subtitle: "Familiar with HTML & CSS to develop personal website and web applications"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    title: "C++",
    subtitle: "Used C++ with data structures and algorithms"
  },
  {
    img: "https://www.softexia.com/wp-content/uploads/2017/04/Java-logo.png",
    title: "Java",
    subtitle: "Utilized Java in developing games such as mock Plants vs. Zombies"
  },
  {
    img: "https://apprendre-a-coder.com/wp/wp-content/uploads/2019/01/swift.png",
    title: "Swift",
    subtitle: "Experienced with Swift in developing iOS applications for personal projects and bootcamp course"
  },
  {
    img: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/super_cloud.png",
    title: "Google Cloud",
    subtitle: "Experienced with Google Cloud services such as App Engine, Firebase, AutoVision ML, Storage, Maps API, and Speech Services"
  },
  {
    img: "https://www.londonappbrewery.com/wp-content/uploads/2015/09/xcode-development-icon.png",
    title: "iOS App Development",
    subtitle: "Experienced with iOS services such as Apple Speech Recognition and CoreML"
  },
  {
    img: "https://pluspng.com/img-png/raspberry-pi-png-raspberry-pi-2-model-b-1560.png",
    title: "Raspberry Pi",
    subtitle: "Utilized Raspberry Pi for projects such as a disability friendly application for those with vision impairments to navigate indepedently"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png",
    title: "Arduino",
    subtitle: "Experienced with Arduino to create projects such as RC Car, Robot Arm, and Light Saber"
  },
  {
    img: "https://i2.wp.com/boffosocko.com/wp-content/uploads/2014/09/Git_icon.svg_.png?fit=1024%2C1024&ssl=1",
    title: "Git",
    subtitle: "Familiar with Git techniques such as committing, merging, pull requests"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    title: "Firebase",
    subtitle: "Utilized services such as Real-Time Database, Storage, and Authentication to develop IoT projects"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    title: "AWS",
    subtitle: "Familiar with services such as IoT MQTT and Alexa"
  },
  {
    img: "https://www.linuxjournal.com/sites/default/files/styles/360_250/public/nodeimage/story/bash-icon_0.png?itok=JZG6p4sq",
    title: "Bash",
    subtitle: "Experienced with Linux command line functions"
  },
  {
    img: "https://www.mon-code.net/logo/rabbitmq.png",
    title: "MQTT",
    subtitle: "Experienced with MQTT networking protocol and RabbitMQ for IoT projects"
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

    logo: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
  },
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/eg_logo.png?alt=media&token=01819bd3-8b24-410f-bcea-1a06e2c699f4",
    category_title: "Teaching Assistant",
    real_title: "Intro to Engineering and Design",
    link_name: "EG1003 Course",
    demo_link: "https://eg.poly.edu/staffimages.php?staff=ta",
    site: "",
    long_description: ["Work with students in first year engineering course", "Mentor first-year students in semester-long design projects for introductory cornerstone engineering course, EG1003 Intro to Engineering and Design"],
    short_description: "Work with students in first year engineering course",
    date: "September 2019 - Present",

    logo: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/eg_logo.png?alt=media&token=01819bd3-8b24-410f-bcea-1a06e2c699f4",
  },
  {
    head_image: "https://engineering.nyu.edu/sites/default/files/styles/content_header_default_1x/public/2018-10/born-anywhere.jpg?h=d1cb525d&itok=Wk6AUyLs",
    category_title: "Computer Science Peer Tutor",
    real_title: "TRIO Scholars Program",
    link_name: "TRIO",
    demo_link: "https://engineering.nyu.edu/academics/support-services/undergraduate-services/trio-scholars-program",
    site: "",
    long_description: ["Tutor undergraduate students in Intro to Programming and Problem Solving (CS 1114) and Data Structures and Algorithms (CS 1134)", "Answer questions / prepare students for exams in fundamentals of computer programming and its underlying principles using the Python programming language for 3 hrs/week in a semester"],
    short_description: "Tutor undergraduate students in Intro to Programming and Problem Solving (CS 1114) and Data Structures and Algorithms (CS 1134)",
    date: "Feburary 2019 - Present",

    logo: "https://engineering.nyu.edu/sites/default/files/styles/content_header_default_1x/public/2018-10/born-anywhere.jpg?h=d1cb525d&itok=Wk6AUyLs",
  },
  {
    head_image: "https://nyunews.com/wp-content/uploads/2018/11/Jun-Chen-via-nyu.edu_.jpg",
    category_title: "Research Intern",
    real_title: "NYU Holodeck Project",
    link_name: "Holodeck",
    demo_link: "https://www.nyu.edu/about/news-publications/publications/alumni-magazine/spring-2018/features/welcome-to-the-holodeck.html",
    site: "",
    long_description: ["Worked on NYU Holodeck Project to create an immersive, collaborative, virtual/ physical research environment providing unparalleled tools for research collaborations, intellectual exploration, and creative output", " Collaborated with investigators in NSF-funded research project to develop robotic learning system using OptiTrack, Python, iOS application, and MQTT broker, in collaboration with the NYU Holodeck Project"],
    short_description: "Worked on NYU Holodeck Project to create an immersive, collaborative, virtual/ physical research environment providing unparalleled tools for research collaborations, intellectual exploration, and creative output",
    date: "May 2019 - August 2019",

    logo: "data:image/png;base64,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",
  },
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/makerspace_rad.jpg?alt=media&token=41600153-9861-43bb-8741-29e07f69c08e",
    category_title: "Project Manager",
    real_title: "SiteSeer",
    link_name: "Project Folder",
    demo_link: "https://drive.google.com/drive/folders/1U-yyWOkJXzUdYX6WLRdEcKGQGR0_xiCT?usp=sharing",
    site: "",
    long_description: ["Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud", "Managed 10-week design project by preparing milestone presentations, weekly reports, and demo video"],
    short_description: "Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud",
    date: "January 2019 - May 2019",

    logo: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
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

    categories: "Web"
  },
  {
    head_image: "http://makerspace.engineering.nyu.edu/wp-content/uploads/2019/05/Mini-Grant-1.jpg",
    category_title: "SiteSeer",
    real_title: "First Year Engineering Project",
    link_name: "MakerSpace Article",
    demo_link: "http://makerspace.engineering.nyu.edu/designlab/personal-navigator/",
    site: "",
    long_description: ["Developed disability friendly application for those with vision impairments to navigate indepedently", "Implemented Google Cloud with Firebase, AutoVision ML, Storage, Directions API, and Speech Services to develop assistive navigation technology", "<div class='fix_center intro intro-single route'><iframe width='420' height='100%' class='intro intro-single' src='https://www.youtube.com/embed/WR3HkmROxYw'></iframe></div>"],
    short_description: "Developed disability friendly application for those with vision impairments to navigate indepedently",
    date: "January 2019 - May 2019",

    categories: "Python Arduino iOS"
  },
  {
    head_image: "https://github.com/kevin-chen/Artificial-Intelligence-FTC-Robotics-12178/blob/master/robot.jpg?raw=true",
    category_title: "FTC Robotics",
    real_title: "Autonomous Robot",
    link_name: "Robot Code",
    demo_link: "https://github.com/kev-chen0/Artificial-Intelligence-FTC-Robotics-12178",
    site: "",
    long_description: ["The robot functions through remote control activity through Wi-Fi Direct. More importantly, the robot can autonomously function on its own through the camera, with color sensors and pictograph decryption. Additionally, it moves autonomously by placing a cube in the selected column based on the decryption."],
    short_description: "The robot functions through remote control activity through Wi-Fi Direct. More importantly, the robot can autonomously function on its own through the camera, with color sensors and pictograph decryption. Additionally, it moves autonomously by placing a cube in the selected column based on the decryption.",
    date: "September 2016 - June 2018",

    categories: "Java OpenCV"
  },
  {
    head_image: "https://i.pinimg.com/originals/4f/01/49/4f0149647a160a47217615866f5469c4.png",
    category_title: "Parstagram",
    real_title: "iOS Bootcamp",
    link_name: "GitHub",
    demo_link: "https://github.com/kevin-chen/Parstagram",
    site: "",
    long_description: ["This is an Instagram clone with a custom Parse backend that allows a user to post photos, view a global photos feed, and add comments!"],
    short_description: "This is an Instagram clone with a custom Parse backend that allows a user to post photos, view a global photos feed, and add comments!",
    date: "March 2019",

    categories: "iOS"
  },
  {
    head_image: "https://github.com/kevin-chen/Arduino-Bluetooth-Car/blob/master/IMG_5796.jpg?raw=true",
    category_title: "Bluetooth RC Car",
    real_title: "Bluetooth/3D Printed RC Car",
    link_name: "GitHub",
    demo_link: "https://github.com/kevin-chen/Arduino-Bluetooth-Car",
    site: "",
    long_description: ["Bluetooth controlled car built with popsicle sticks and controlled by an app", "Utilized motors, LEDs, and distance sensors to autonomously maneuver; designed using 3D designed parts"],
    short_description: "Bluetooth controlled car built with popsicle sticks and controlled by an app",
    date: "February 2018 – May 2018",

    categories: "Arduino"
  },
  {
    head_image: "https://github.com/kevin-chen/Plants-Vs.-Zombies/blob/master/gamePlay.png?raw=true",
    category_title: "Plants Vs. Zombies Game",
    real_title: "Plants Vs. Zombies Game",
    link_name: "GitHub",
    demo_link: "https://github.com/kev-chen0/Plants-Vs.-Zombies",
    site: "",
    long_description: ["Side-scrolling game. Defend the base from zombies coming from the right. Players strategically place objects to help defend the base. Full game w/ start, help, game, and end screens"],
    short_description: "Side-scrolling game. Defend the base from zombies coming from the right. Players strategically place objects to help defend the base. Full game w/ start, help, game, and end screens",
    date: "April 2017 – June 2017",

    categories: "Java"
  },
  {
    head_image: "https://github.com/kevin-chen/Tic-Tac-Toe/blob/master/tic-tac-toe.gif?raw=true",
    category_title: "Tic-Tac-Toe",
    real_title: "Tic-Tac-Toe",
    link_name: "GitHub",
    demo_link: "https://github.com/kevin-chen/Tic-Tac-Toe",
    site: "",
    long_description: ["Final Project (Intro to Python) using Python's Turtle and Tkinter modules", "Developed challenging AI to play against, scoreboards, and UI"],
    short_description: "Final Project (Intro to Python) using Python's Turtle and Tkinter modules",
    date: "November 2018 - December 2018",

    categories: "Python"
  },
  {
    head_image: "https://raw.githubusercontent.com/kevin-chen/v1/master/assets/tag.png?token=AKG5RNXNZQTEO7DBBTGGAZC6COKYQ",
    category_title: "Tangible Activities for Geometry",
    real_title: "Tangible Activities for Geometry",
    link_name: "NYU Article",
    demo_link: "https://www.nyu.edu/about/news-publications/news/2016/june/grade-school-students-teach-a-robot-to-help-themselves-learn-geometry.html",
    site: "",
    long_description: ["Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture in NYU Holodeck Project"],
    short_description: "Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture in NYU Holodeck Project",
    date: "May 2019 – August 2019",

    categories: "Python iOS"
  },
  {
    head_image: "https://github.com/kevin-chen/tech-stack/blob/master/distance-opencv/Lip.jpg?raw=true",
    category_title: "Automated Mouth Moment",
    real_title: "Automated Mouth Moment",
    link_name: "GitHub",
    demo_link: "https://github.com/kevin-chen/Lip-Detection-OpenCV",
    site: "",
    long_description: ["Utilized OpenCV to measure distance between upper and lower lips", "Programmed Arduino using servos to mimic mouth movement"],
    short_description: "Utilized OpenCV to measure distance between upper and lower lips",
    date: "September 2019 - December 2019",

    categories: "Python OpenCV"
  },
  {
    head_image: "https://github.com/kevin-chen/Pong-iOS-App/blob/master/pong.gif?raw=true",
    category_title: "Ping Pong",
    real_title: "Automated Mouth Moment",
    link_name: "GitHub",
    demo_link: "https://github.com/kev-chen0/Pong-iOS-App",
    site: "",
    long_description: ["Ping Pong Game on iOS App, Features: 2-Player and Computer", "Proof of concept  iOS game with the addition of user screens and background music"],
    short_description: "Ping Pong Game on iOS App, Features: 2-Player and Computer",
    date: "December 2018",

    categories: "iOS"
  },
]

// Activities Info
const activities = [
  {
    title: "HackNYU Tech Team",
    desc: "Worked in a team of other NYU students to create a website for registration for HackNYU 2020 Hackathon",
    logo: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/hacknyu-logo.png?alt=media&token=ff19dd5c-1a74-46c9-9cb2-3f97b40fdf0c",
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
