// console.log(timeline)

const about = document.getElementById("about")
const expertise = document.getElementById("skill-cont")
const jobs = document.getElementById("job-cont")
const projs = document.getElementById("project-cont")
const portfolioTimeline = document.getElementById("timeline")
const awardCont = document.getElementById("award-cont")

const loadAbout = (description) => {
  description.map(line => {
    let text = document.createElement("h5")
    about.append(document.createElement("br"))
    about.append(line)
    about.append(document.createElement("br"))
  })
}

const loadSkills = (list) => {
  list.map(skill => {
    let div = document.createElement("div")
    let title = document.createElement("h6")
    let img = document.createElement("img")
    div.classList = "col-sm-3 skill text-center"
    img.src = skill.img
    title.innerText = skill.title
    div.append(img)
    div.append(title)
    expertise.append(div)
  })
}

const loadJobs = (list) => {
  list.map(job => {
    let div = document.createElement("div")
    let date = document.createElement("div")
    let img = document.createElement("div")
    let desc = document.createElement("div")
    let title = document.createElement("div")

    div.classList = "job-display col-sm-6 col-md-4 col-lg-3 text-center"
    date.classList = "exp-date text-center mt-4"
    img.classList = "company-logo"
    title.classList = "role-title text-center"
    desc.classList = "desc text-left mt-3"
    img.style.backgroundImage = "url("+job.logo+")"
    // title.innerText = job.title
    title.innerHTML = "<strong>" + job.title + "</strong"
    date.innerText = job.date
    desc.innerText = job.desc


    div.append(img)
    div.append(date)
    div.append(title)
    div.append(desc)

    jobs.append(div)
  })
}

const loadProjects = (list) => {

  list.map(project => {
    let div = document.createElement("div")
    div.classList = "row project"

    let image = document.createElement("div")
    let pic_container = document.createElement("div")
    let picture = document.createElement("div")

    pic_container.classList = "container-fluid text-right mr-5"
    picture.style.backgroundImage = "url(\"" + project.image + "\")" //url('assets/bloxxers.png')"
    //picture.style.backgroundPosition = "center"
    picture.style.height = "420px"
    //picture.style.width = "600px"
    picture.style.maxHeight = "420px"
    picture.style.backgroundSize = "cover"
    picture.style.backgroundRepeat = "no-repeat"
    picture.style.width = "320px"

    pic_container.append(picture)
    image.append(pic_container)

    let description = document.createElement("div")
    let info = document.createElement("div")
    let skills = document.createElement("div")

    info.classList = "info"
    let strong = document.createElement("strong")
    strong.classList = "corp"
    let h5 = document.createElement("h4")
    h5.classList = "title"
    h5.innerHTML= "<strong>" + project.title + "</strong"
    info.append(h5)
    skills.classList = "meta mb-1"

    let platform_skills = document.createElement("SPAN")
    platform_skills.classList = "platforms"
    let icon1 = document.createElement("i")
    icon1.classList = "fas fa-laptop-code"
    platform_skills.append(icon1)
    platform_skills.append(" " + project.skills)

    let location = document.createElement("SPAN")
    location.classList = "ml-3 link"
    let icon2 = document.createElement("i")
    icon2.classList = "far fa-arrow-alt-circle-right"
    let link = document.createElement("a")
    link.href = project.link
    link.target = "_blank"
    link.append(" " + project.link)
    location.append(icon2)
    location.append(link)

    skills.append(platform_skills)
    skills.append(location)
    info.append(skills)

    let words_container = document.createElement("p")
    words_container.style.fontSize = "16px"
    words_container.classList = "description"
    let words = document.createTextNode(project.description)

    words_container.appendChild(words)
    info.append(words_container)

    description.append(info)

    div.append(image)
    div.append(description)

    if (project["video"] in project) {
      let frame = document.createElement("frame");
      frame.width = "560"
      frame.height = "315"
      frame.src = project.video
      frame.frameborder = "0"
      frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frame.allowfullscreen = "true"
      div.append(frame)
    }

    projs.append(div)
  })

    // // image, title, skills, description
    // //Example
    // <div class="row project">
    //
    //   <div class="">
    //
    //     <div class="container-fluid text-right mr-5">
    //       <div style="background-image: url('assets/bloxxers.png');height:420px;max-height:420px;background-size: cover;background-repeat:no-repeat;width:320px;"></div>
    //     </div>
    //
    //   </div>
    //
    //   <div class="">
    //
    //     <div class="info">
    //       <h5 class="title"><strong class="corp">ROBLOX:</strong> Bloxxers</h5>
    //
    //       <div class="meta mb-1">
    //         <span class="platforms"><i class="fas fa-mobile-alt"></i> iOS | Android | PC</span>
    //         <span class="ml-3 link"><i class="far fa-arrow-alt-circle-right"></i> <a href="https://www.roblox.com/games/672301689/Bloxxers-Alpha-HIATUS" target="_blank">www.roblox.com</a></span>
    //       </div>
    //
    //       <p class="description">
    //         Bloxxers is a 2.5D multiplayer online brawler with <strong>over 2000 players</strong> and raving reviews from its audience. Players can play as their favorite ROBLOXian, cartoon/anime/show character, or a real-life icon. It has been a hit sensation in the ROBLOX community in its Alpha and will hopefully to be featured by ROBLOX itself. Bloxxers is a game solely created by Mohammed Ajao who has the alias of AbstractCode. For proof of verification, please email AbstractCode on ROBLOX or ask for code snippets if you are an admissions or recruiting personnel. The game was solely developed by me with assets credited to volunteers.
    //       </p>
    //
    //     </div>
    //   </div>
    //
    // </div>
}

const loadTimeline = (info) => {
  info.map((event, index) => {
    let div = document.createElement("div")
    let secondDiv = document.createElement("div")
    let infoDiv = document.createElement("div")
    let title = document.createElement("h3")
    let subtitle = document.createElement("p")
    let desc = document.createElement("p")
    let location = document.createElement("p")

    let icon = document.createElement("div")
    let iconFont = document.createElement("i")

    icon.classList = "icon"
    iconFont.classList = "fa fa-graduation-cap"

    div.classList = "ee-container"
    secondDiv.classList = "line-container"

    title.classList = "container-title"
    title.style.color = "black"
    subtitle.classList = "container-subtitle"
    desc.classList = "container-desc"
    location.classList = "container-location"

    title.innerText = event.title
    subtitle.innerText = event.subtitle
    desc.innerText = event.desc
    location.innerText = event.location

    infoDiv.append(title)
    infoDiv.append(subtitle)
    infoDiv.append(desc)
    infoDiv.append(location)

    icon.append(iconFont)

    div.append(secondDiv)
    if(index % 2 === 0) {
      infoDiv.classList = "info info-right"

      let indicator = document.createElement("div")
      let date = document.createElement("span")
      let bolden = document.createElement("strong")
      let bubble = document.createElement("span")

      date.append(bolden)
      indicator.append(bubble)
      indicator.append(date)

      bolden.innerText = event.date

      indicator.classList = "right-line date-left date-range-indication"
      date.classList = "date-range"
      bubble.classList = "bubble"

      secondDiv.append(infoDiv)
      secondDiv.append(icon)
      secondDiv.append(indicator)

    } else {
      infoDiv.classList = "info info-left"

      let indicator = document.createElement("div")
      let date = document.createElement("span")
      let bolden = document.createElement("strong")
      let bubble = document.createElement("span")

      date.append(bolden)
      indicator.append(date)
      indicator.append(bubble)

      bolden.innerText = event.date

      indicator.classList = "left-line date-right date-range-indication"
      date.classList = "date-range"
      bubble.classList = "bubble"

      secondDiv.append(indicator)
      secondDiv.append(icon)
      secondDiv.append(infoDiv)
    }

    portfolioTimeline.append(div)
  })
}

const loadAwards = (list) => {
  list.map(award => {
    let div = document.createElement("div")
    let inner = document.createElement("div")
    let org = document.createElement("span")
    let details = document.createElement("h5")
    let br = document.createElement("BR")

    div.classList = "award col-md-4 col-lg-3"
    inner.classList = "container-fluid"
    org.classList = "org"
    details.classList = "details"
    details.style.fontFamily = "Poppins"

    details.innerText = award.title
    org.innerText = award.org

    inner.append(org)
    inner.append(br)
    inner.append(details)
    div.append(inner)
    awardCont.append(div)
  })
}

const main = () => {
  loadAbout(about_description)
  loadSkills(skills)
  loadJobs(experience)
  // loadProjects(projects)
  loadAwards(awards)
  loadTimeline(timeline)
}

main()
