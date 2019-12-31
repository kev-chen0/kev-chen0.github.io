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
  },
  {
    img: "https://qautomationhome.files.wordpress.com/2019/05/rest_api.png",
    title: "RESTApi",
    subtitle: "Experienced with RESTful services in developing web and mobile applications"
  }
]

// Experience Info
const experience = [
  {
    head_image: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
    category_title: "Software Engineering Experience",
    real_title: "JP Morgan Chase & Co",
    link_name: "Software Engineering Experience",
    demo_link: "https://drive.google.com/file/d/1Ymdl_Vf2ax2rFHbA_LYKF_JbNHsgIDv0/view?usp=sharing",
    site: "",
    long_description: ["Participated in JP Morgan Chase's online internship experience", "Utilized JPMC's Perspective software to analyze graphical data and output usable information in a graphical web application"],
    short_description: "Participated in JP Morgan Chase's online internship experience",
    date: "October 2019 – December 2019",

    tab_name: "jpmorgan",
    logo: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
  },
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/eg_logo.png?alt=media&token=01819bd3-8b24-410f-bcea-1a06e2c699f4",
    category_title: "Teaching Assistant",
    real_title: "Intro to Engineering & Design",
    link_name: "EG1003 Course",
    demo_link: "https://eg.poly.edu/staffimages.php?staff=ta",
    site: "",
    long_description: ["Work with students in first year engineering course", "Mentor first-year students in semester-long design projects for introductory cornerstone engineering course, EG1003 Intro to Engineering and Design"],
    short_description: "Work with students in first year engineering course",
    date: "September 2019 - Present",

    tab_name: "eg1003",
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

    tab_name: "trio",
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

    tab_name: "nyux",
    logo: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/nyu-x.png?alt=media&token=9a7b610d-8427-4df9-9971-669517f45a80",
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

    tab_name: "siteseer",
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
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/hacknyu-logo.png?alt=media&token=ff19dd5c-1a74-46c9-9cb2-3f97b40fdf0c",
    category_title: "HackNYU Tech Team",
    real_title: "",
    link_name: "HackNYU Website",
    demo_link: "https://hacknyu.org/",
    site: "https://hacknyu.org/",
    long_description: ["Highly selective one-week technical program at Capital One headquarters", "Culminated in a rigorous hackathon and technical interview with Capital One engineers", "Participated in soft-skills training and technical sessions in iOS, Android, Web Development, AWS, Bot Development, Hardware, and Machine Learning"],
    short_description: "Worked in a team of other NYU students to create a website for registration for HackNYU 2020 Hackathon",
    date: "October 2019 - Present",
  },
  {
    head_image: "https://s18798.pcdn.co/vip/wp-content/uploads/sites/7678/2018/11/SelfDriveLogo-768x316.png",
    category_title: "NYU Self Drive",
    real_title: "Perception Sub-Team",
    link_name: "NYU VIP",
    demo_link: "https://wp.nyu.edu/vip/nyu-self-drive/",
    site: "",
    long_description: ["At its core, this project-based course aims to create research teams that will be at the forefront of designing and prototyping technological advances in the ever growing field of self-driving cars", "Perception Team involves learning and working with computer vision (Pytorch) to develop a working prototype of a self-driving vehicle", "This is a project that can involve quite diverse set of talents. We had a very humble start last year with a scrap golf cart and managed to win a very prestigious competition for autonomous vehicles. This exemplifies the potentials of team work at New York University."],
    short_description: "At its core, this project-based course aims to create research teams that will be at the forefront of designing and prototyping technological advances in the ever growing field of self-driving cars",
    date: "September 2019 - Present",
  }
]

// Awards Info
const awards = [
  {
    org: "TechFestival Hackathon",
    title: "Overall Hackathon Winner & Best Use of Google Cloud (AutoVision ML, Speech Services, Firebase, Maps API, Storage)",
    image: "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/apple-icon.png",
    date: "March 2019"
  },
  {
    org: "EG1003 RAD Project​​",
    title: "Nick Russo Award Winner for Outstanding Design (Freshman Engineering Project)",
    image: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    date: "May 2019"
  },
  {
    org: "FIRST Robotics Inspire Award​",
    title: "Advanced to NYC Robotics Championships & Strong STEM Community Outreach",
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
