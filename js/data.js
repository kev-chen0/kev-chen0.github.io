// Portfolio Info
const portfolios = [

]

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
    img: "https://cloud.google.com/images/social-icon-google-cloud-1200-630.png",
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
  },
  {
    img: "https://lh3.googleusercontent.com/2AsGaXxuibavh2eE507dMrcNyRn09ALo_0upJGjcvDe-SwQL3G3hhpqY2HFJ7kHKeevLkjaHmwoxZVcbJCsDWA=w640-h480-p",
    title: "Machining Tools",
    subtitle: "Experienced with 3D printing, CAD, laser cutting"
  },
  {
    img: "https://secure.meetupstatic.com/photos/event/1/8/7/8/highres_475266264.jpeg",
    title: "IBM Cloud",
    subtitle: "Familiar with using IBM Cloud in iOS app development in Swift"
  }
]

// Experience Info
const experience = [
  {
    head_image: "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/co.png",
    category_title: "Incoming Software Engineering Intern",
    real_title: "Capital One",
    link_name: "Technology Intern Program",
    demo_link: "https://campus.capitalone.com/technology-program?id=internship",
    site: "",
    long_description: ["Attended selective one-week program at Capital One headquarters, January 2020"],
    short_description: "",
    date: "June 2020 - Present",

    tab_name: "capitalone",
    logo: "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/co.png",
    pictures: [],
  },
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/eg_logo.png?alt=media&token=01819bd3-8b24-410f-bcea-1a06e2c699f4",
    category_title: "Teaching Assistant",
    real_title: "Engineering & Design",
    link_name: "EG1003 Course",
    demo_link: "https://eg.poly.edu/staffimages.php?staff=ta",
    site: "",
    long_description: ["Work with students in first year engineering course", "Mentor first-year students in semester-long design projects for introductory cornerstone engineering course, EG1003 Intro to Engineering and Design", "Teach basic engineering concepts such as micro-controllers, digital logic, CAD, etc."],
    short_description: "Work with students in first year engineering course",
    date: "September 2019 - Present",

    tab_name: "eg1003",
    logo: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/eg_logo.png?alt=media&token=01819bd3-8b24-410f-bcea-1a06e2c699f4",
    pictures: ["https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/eg_logo.png?alt=media&token=01819bd3-8b24-410f-bcea-1a06e2c699f4", "https://manual.eg.poly.edu/images/thumb/9/9b/BDR_Course1-1-.jpg/1200px-BDR_Course1-1-.jpg", "https://manual.eg.poly.edu/images/c/c2/Labelled-mrr-super-correct.jpg"],
  },
  {
    head_image: "https://nyunews.com/wp-content/uploads/2018/11/Jun-Chen-via-nyu.edu_.jpg",
    category_title: "Software Development Intern",
    real_title: "NYU Holodeck Project",
    link_name: "Holodeck",
    demo_link: "https://www.nyu.edu/about/news-publications/publications/alumni-magazine/spring-2018/features/welcome-to-the-holodeck.html",
    site: "",
    long_description: ["Research Poster Link~https://drive.google.com/file/d/1zrOeFhpE9dras_V5jy0ven2E1ugefBr-/view", "Worked on NYU Holodeck Project to create an immersive, collaborative, virtual/ physical research environment providing unparalleled tools for research collaborations, intellectual exploration, and creative output", " Collaborated with investigators in NSF-funded research project to develop robotic learning system using OptiTrack, Python, iOS application, and MQTT broker, in collaboration with the NYU Holodeck Project", "Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture at NYU-X lab"],
    short_description: "Worked on NYU Holodeck Project to create an immersive, collaborative, virtual/ physical research environment providing unparalleled tools for research collaborations, intellectual exploration, and creative output",
    date: "May 2019 - August 2019",

    tab_name: "nyux",
    logo: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/nyu-x.png?alt=media&token=9a7b610d-8427-4df9-9971-669517f45a80",
    pictures: ["https://nyunews.com/wp-content/uploads/2018/11/Jun-Chen-via-nyu.edu_.jpg", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/nyu-x.png?alt=media&token=9a7b610d-8427-4df9-9971-669517f45a80"],
  },
  {
    head_image: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
    category_title: "Software Engineering Experience",
    real_title: "JP Morgan Chase & Co",
    link_name: "Software Engineering Experience",
    demo_link: "https://drive.google.com/file/d/1Ymdl_Vf2ax2rFHbA_LYKF_JbNHsgIDv0/view?usp=sharing",
    site: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
    long_description: ["Participated in JP Morgan Chase's online internship experience", "Utilized JPMC's Perspective software to analyze graphical data and output usable information in a graphical web application"],
    short_description: "Participated in JP Morgan Chase's online internship experience",
    date: "October 2019 – December 2019",

    tab_name: "jpmorgan",
    logo: "https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png",
    pictures: ["https://cd.foundation/wp-content/uploads/sites/78/2019/08/Logo-JPMorgan-Chase-2018.png", "https://camo.githubusercontent.com/f69d1132e2984e2a97209fc21520e9812c464873/68747470733a2f2f70657273706563746976652e66696e6f732e6f72672f696d672f64656d6f5f736d616c6c2e676966"],
  },
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/makerspace_rad.jpg?alt=media&token=41600153-9861-43bb-8741-29e07f69c08e",
    category_title: "Project Manager",
    real_title: "SiteSeer",
    link_name: "Project Folder",
    demo_link: "https://drive.google.com/drive/folders/1U-yyWOkJXzUdYX6WLRdEcKGQGR0_xiCT?usp=sharing",
    site: "",
    long_description: ["Project Presentation Link~https://drive.google.com/open?id=1mgdCk0yXF2Kuy028lika3NxHvgnxBdtq", "Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud", "Managed 10-week design project by preparing milestone presentations, weekly reports, and demo video"],
    short_description: "Freshman Design Project. Developed assistive navigation technology for visually impaired individuals by implementing Raspberry Pi, Python, and Google Cloud",
    date: "January 2019 - May 2019",

    tab_name: "siteseer",
    logo: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    pictures: ["https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/FinalProjectSchedule.png?alt=media&token=2eec4879-1e62-4590-886b-2486f0896991", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/makerspace_rad.jpg?alt=media&token=41600153-9861-43bb-8741-29e07f69c08e", "https://media-exp1.licdn.com/media-proxy/ext?w=1024&h=605&f=n&hash=mHm%2FF7cxCCVlFUvksu8iBLN9t4s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi7LcCJeLH1rEATeS8DjQBkLeq1SDLiGo65fYvsfopzjpPlLcb5agYUbhl4lWdI"],
  }
]

// Project Info
const projects = [
  {
    head_image: "https://github.com/kevin-chen/SwiftUI-Tutorials/raw/master/calculator.png",
    category_title: "SwiftUI Tutorials - Calculator App",
    real_title: "iOS Calculator App",
    link_name: "GitHub Project",
    demo_link: "https://github.com/kevin-chen/SwiftUI-Tutorials",
    site: "",
    long_description: ["Learning SwiftUI through various tutorials", "Calculator App", "Maps UI"],
    short_description: "",
    date: "February 2020",

    tab_name: "ioscalculator",
    categories: "iOS",
    pictures: ["https://github.com/kevin-chen/SwiftUI-Tutorials/raw/master/calculator.png", "https://github.com/kevin-chen/SwiftUI-Tutorials/raw/master/park-map.png"],
  },
  {
    head_image: "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.48.01%20AM.png",
    category_title: "MaxBack",
    real_title: "Capital One Software Engineering Summit Hackathon",
    link_name: "Live Application",
    demo_link: "https://capitaloneses2020.herokuapp.com/",
    site: "",
    long_description: ["<a target='_blank' href='https://github.com/kevin-chen/CapitalOne-SES-Hackathon'>Hackathon Project</a>", "<a target='_blank' href='https://docs.google.com/presentation/d/1V7vmx8XlHF_xF9rxd-3_x28iWT4014zT6cxX6pWawTs/edit?usp=sharing'>Presentation</a>", "Developed app that helps users maximize cash back rewards by selecting the best credit card to use based on geographic location/store type and current cashback rewards rotation", "Highly selective one-week technical program at Capital One headquarters", "Culminated in a rigorous hackathon and technical interview with Capital One engineers"],
    short_description: "Developed a web application for the Capital One Software Engineering Summit in Winter 2020",
    date: "January 2020",

    tab_name: "maxback",
    categories: "Web Python",
    pictures: ["https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.48.01%20AM.png", "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2012.02.45%20PM.png", "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.51.11%20AM.png", "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.51.21%20AM.png", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/summit_hackathon.JPG?alt=media&token=81f0b110-6e45-4f40-9bd3-1a6607fe659f"],
  },
  {
    head_image: "https://img.icons8.com/plasticine/100/000000/questions.png",
    category_title: "Trivia Me This",
    real_title: "Trivia Web Application",
    link_name: "Live Web Application",
    demo_link: "http://trivia.kev-chen.me/",
    site: "",
    long_description: ["Developed a web application for the Capital One Software Engineering Summit in Winter 2020", "Utilized HTML, CSS, Python/Django, and Javascript to develop a Jeopardy-style web application"],
    short_description: "Developed a web application for the Capital One Software Engineering Summit in Winter 2020",
    date: "October 2019",

    tab_name: "triviame",
    categories: "Web Python",
    pictures: ["https://img.icons8.com/plasticine/100/000000/questions.png", "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/Features/overview.gif", "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/Journey/seventh.png"],
  },
  {
    head_image: "https://makerspace.engineering.nyu.edu/wp-content/uploads/2019/05/Mini-Grant-1.jpg",
    category_title: "SiteSeer",
    real_title: "First Year Engineering Project",
    link_name: "MakerSpace Article",
    demo_link: "https://makerspace.engineering.nyu.edu/designlab/personal-navigator/",
    site: "",
    long_description: ["Developed disability friendly application for those with vision impairments to navigate indepedently", "Implemented Google Cloud with Firebase, AutoVision ML, Storage, Directions API, and Speech Services to develop assistive navigation technology", "<div class='fix_center intro intro-single route'><iframe width='420' height='100%' class='intro intro-single' src='https://www.youtube.com/embed/WR3HkmROxYw'></iframe></div>"],
    short_description: "Developed disability friendly application for those with vision impairments to navigate indepedently",
    date: "January 2019 - May 2019",

    tab_name: "siteseer",
    categories: "Python Arduino iOS",
    pictures: ["https://makerspace.engineering.nyu.edu/wp-content/uploads/2019/05/Mini-Grant-1.jpg", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/FinalProjectSchedule.png?alt=media&token=2eec4879-1e62-4590-886b-2486f0896991", "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/IMG_9416.jpg", "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/flowchart.png", "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/app_1.png", "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/youtubeLive.gif"],
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

    tab_name: "parstagram",
    categories: "iOS",
    pictures: ["https://i.pinimg.com/originals/4f/01/49/4f0149647a160a47217615866f5469c4.png", "https://github.com/kc3585/Parstagram/raw/master/insta2.gif", "https://github.com/kc3585/Parstagram/raw/master/insta.gif"],
  },
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tag_robot.png?alt=media&token=0ee6b808-c540-4348-adf7-c20b607a5d1a",
    category_title: "Tangible Activities for Geometry",
    real_title: "Tangible Activities for Geometry",
    link_name: "NYU Article",
    demo_link: "https://www.nyu.edu/about/news-publications/news/2016/june/grade-school-students-teach-a-robot-to-help-themselves-learn-geometry.html",
    site: "",
    long_description: ["Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture in NYU Holodeck Project", "Worked with investigators in NSF-funded research project to develop robotic learning system using OptiTrack, Python, iOS application, and MQTT broker, in collaboration with the NYU Holodeck Project", "Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture at NYU-X lab"],
    short_description: "Developed functioning interface for robotic-assisted geometry system using Python & MQTT by designing iOS mobile application and integrating RabbitMQ and OptiTrack Motion Capture in NYU Holodeck Project",
    date: "May 2019 – August 2019",

    tab_name: "tagx",
    categories: "Python iOS",
    pictures: ["https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tag_robot.png?alt=media&token=0ee6b808-c540-4348-adf7-c20b607a5d1a", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tag_ground.jpg?alt=media&token=edaf9801-bf64-4a8c-a15c-aaefbc8d6615", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tag_app.png?alt=media&token=4b1aca1e-fab5-4bd1-8b44-ce92123a039c", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tag_mqtt.png?alt=media&token=b90192bd-08fa-4887-b00b-5a55cd38e05f", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tag_opitrack.png?alt=media&token=26e22e5e-e7f1-4142-9d78-9d36d6dfe395", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/srposter.png?alt=media&token=0ed60b14-97e0-413c-a55c-e2c8024cdcd9"],
  },
  {
    head_image: "https://github.com/kevin-chen/tech-stack/blob/master/distance-opencv/Lip.jpg?raw=true",
    category_title: "Automated Mouth Moment",
    real_title: "Automated Mouth Moment",
    link_name: "GitHub",
    demo_link: "https://github.com/kevin-chen/tech-stack/tree/master/distance-opencv",
    site: "",
    long_description: ["Utilized OpenCV to measure distance between upper and lower lips", "Programmed Arduino using servos to mimic mouth movement"],
    short_description: "Utilized OpenCV to measure distance between upper and lower lips",
    date: "September 2019 - December 2019",

    tab_name: "mouth",
    categories: "Python OpenCV",
    pictures: ["https://github.com/kevin-chen/tech-stack/blob/master/distance-opencv/Lip.jpg?raw=true", ],
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

    tab_name: "rccar",
    categories: "Arduino",
    pictures: ["https://github.com/kevin-chen/Arduino-Bluetooth-Car/blob/master/IMG_5796.jpg?raw=true", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/rc_Car.jpg?alt=media&token=2fd45920-abc1-4f37-a74f-29ebe9dcf3fe"],
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

    tab_name: "pvz",
    categories: "Java",
    pictures: ["https://github.com/kevin-chen/Plants-Vs.-Zombies/blob/master/gamePlay.png?raw=true", "https://github.com/kevin-chen/Plants-Vs.-Zombies/raw/master/plants.gif"],
  },
  {
    head_image: "https://github.com/kevin-chen/Pong-iOS-App/blob/master/pong.gif?raw=true",
    category_title: "Ping Pong",
    real_title: "Ping Pong iOS App",
    link_name: "GitHub",
    demo_link: "https://github.com/kev-chen0/Pong-iOS-App",
    site: "",
    long_description: ["Ping Pong Game on iOS App, Features: 2-Player and Computer", "Proof of concept  iOS game with the addition of user screens and background music"],
    short_description: "Ping Pong Game on iOS App, Features: 2-Player and Computer",
    date: "December 2018",

    tab_name: "pingpong",
    categories: "iOS",
    pictures: ["https://github.com/kevin-chen/Pong-iOS-App/blob/master/pong.gif?raw=true"],
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

    tab_name: "tictac",
    categories: "Python",
    pictures: ["https://github.com/kevin-chen/Tic-Tac-Toe/blob/master/tic-tac-toe.gif?raw=true"],
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

    tab_name: "ftcrobotics",
    categories: "Java OpenCV",
    pictures: ["https://github.com/kevin-chen/Artificial-Intelligence-FTC-Robotics-12178/blob/master/robot.jpg?raw=true", "https://media-exp1.licdn.com/media-proxy/ext?w=600&h=800&f=n&hash=guWY6jFOSCLVBF5j%2BPxkk6QajDI%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpecTafOCloEBEcCwJjQBkKu21STHhQ464LI7nKdx4jJfsLMH5agYUbhl4j3lK6w", "https://media-exp1.licdn.com/media-proxy/ext?w=800&h=600&f=n&hash=0uuW1wZsqHk9ln4KZDTKLN47nQU%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjoLM-Ncbegp0AXenoDjQA7e-m1SWToE47uI4i8fY8k2MXhIZn5agYUbhl4j3lK6w"],
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
    long_description: ["Worked in a team of other NYU students to create a website for registration for HackNYU 2020 Hackathon", "Developed registration for over 500 students using Quill"],
    short_description: "Worked in a team of other NYU students to organize HackNYU 2020 Hackathon",
    date: "October 2019 - Present",
    tab_name: "hacknyu",
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
    tab_name: "selfdrive",
  }
]

// Awards Info
const awards = [
  {
    head_image: "https://cloud.google.com/images/social-icon-google-cloud-1200-630.png",
    category_title: "TechFestival Hackathon",
    real_title: "Hackathon",
    link_name: "April 2019",
    demo_link: "https://devpost.com/software/walkerbuddy",
    site: "",
    long_description: ["Overall Hackathon Winner & Best Use of Google Cloud (AutoVision ML, Speech Services, Firebase, Maps API, Storage)"],
    short_description: "Overall Hackathon Winner & Best Use of Google Cloud (AutoVision ML, Speech Services, Firebase, Maps API, Storage)",
    date: "March 2019",
    tab_name: "techfestival",

    pictures: ["https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tech_fes_demo.jpg?alt=media&token=3fb3f6ea-51ac-493b-ba28-38070e5aeb90", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tech_fes_end.jpg?alt=media&token=da4aa4ad-2a3e-4bfe-9247-10bc93f7625b"],
  },
  {
    head_image: "https://github.com/kc3585/SiteSeer-EG1003/raw/master/Extras/logo.png",
    category_title: "EG1003 RAD Project",
    real_title: "",
    link_name: "MakerSpace Article",
    demo_link: "http://makerspace.engineering.nyu.edu/designlab/personal-navigator/",
    site: "",
    long_description: ["Nick Russo Award Winner for Outstanding Design (Freshman Engineering Project)"],
    short_description: "Nick Russo Award Winner for Outstanding Design (Freshman Engineering Project)",
    date: "May 2019",
    tab_name: "egrad",

    pictures: ["https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/tandon.jpg?alt=media&token=867afd97-2ea2-4a19-a4c4-e191abc4f0ef"],
  },
  {
    head_image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/FIRST_Logo.svg/1200px-FIRST_Logo.svg.png",
    category_title: "FIRST Robotics Inspire Award",
    real_title: "FTC Robotics",
    link_name: "FIRST NYC",
    demo_link: "https://www.nycfirst.org/programs/ftc",
    site: "",
    long_description: ["Advanced to NYC Robotics Championships & Strong STEM Community Outreach"],
    short_description: "Advanced to NYC Robotics Championships & Strong STEM Community Outreach",
    date: "January 2018",
    tab_name: "firstinspire",

    pictures: ["https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/ftc_robot_win.jpg?alt=media&token=41032364-eec3-44a4-b21a-55d9a0822894", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/robot.jpg?alt=media&token=bb345d35-f755-4bdb-a572-919ca0081353", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/ftc_12178.jpg?alt=media&token=44fca2cc-451f-4557-9bd5-64775c892cc7"],
  }
]

// Summit Info
const summits = [
  {
    head_image: "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/c1-interview.jpg?alt=media&token=1f2a2fb3-0d35-41a2-b936-d167c54ffb7b",
    category_title: "Software Engineering Summit",
    real_title: "Summit",
    link_name: "Capital One",
    demo_link: "https://campus.capitalone.com/summits/",
    site: "",
    long_description: ["<a target='_blank' href='https://github.com/kevin-chen/CapitalOne-SES-Hackathon'>Hackathon Project</a>", "<a target='_blank' href='https://capitaloneses2020.herokuapp.com/'>Live App</a>", "<a target='_blank' href='https://docs.google.com/presentation/d/1V7vmx8XlHF_xF9rxd-3_x28iWT4014zT6cxX6pWawTs/edit?usp=sharing'>Presentation</a>", "Highly selective one-week technical program at Capital One headquarters", "Culminated in a rigorous hackathon and technical interview with Capital One engineers", "Participated in soft-skills training and technical sessions in iOS, Android, Web Development, AWS, Bot Development, Hardware, and Machine Learning"],
    short_description: "Highly selective one-week technical program at Capital One headquarters in McLean, VA",
    date: "January 2020",

    logo: "https://github.com/kevin-chen/trivia-web-app/raw/master/trivia/static/trivia/assets/co.png",
    company: "Capital One",
    tab_name: "c1summit",
    pictures: ["https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/summit_group.JPG?alt=media&token=022072c2-73be-4abb-b292-741f0bba6d6f", "https://firebasestorage.googleapis.com/v0/b/web-port-folio.appspot.com/o/summit_hackathon.JPG?alt=media&token=81f0b110-6e45-4f40-9bd3-1a6607fe659f", "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.48.01%20AM.png", "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.51.11%20AM.png", "https://github.com/kevin-chen/CapitalOne-SES-Hackathon/raw/master/Screen%20Shot%202020-01-13%20at%2011.51.21%20AM.png"],
  }
]
