// Element variables
const about = document.getElementById("about")
const expertise = document.getElementById("skill-cont")
const jobsTab = document.getElementById("v-pills-tab")
const jobsContent = document.getElementById("v-pills-tabContent")
const projs = document.getElementById("project-cont")
const activity = document.getElementById("activities-cont")
const awardCont = document.getElementById("testimonial-mf")
const summitCont = document.getElementById("summit-cont")

// Loading skills
const loadSkills = (list) => {
  list.map(skill => {
		let outer_div = document.createElement("div")
		let service_div = document.createElement("div")
		let circle_div = document.createElement("div")
		let circle_span = document.createElement("span")
		let circle_img = document.createElement("img")
		outer_div.classList = "services-block"
		service_div.classList = "service-box"
		circle_div.classList = "service-ico"
		// circle_span.classList = "ico-circle"

		circle_img.style = "max-width: 80px;"
		circle_img.classList = "skill-circle"
		circle_img.src = skill.img
		// circle_span.append(circle_img)
		circle_div.append(circle_img)

		let content_div = document.createElement("div")
		let title_h = document.createElement("h2")
		content_div.classList = "service-content"

		title_h.classList = "s-title"
		title_h.innerText = skill.title
		content_div.append(title_h)

    let subtitle_h = document.createElement("p")
    // subtitle_h.classList = "service-content"
    subtitle_h.innerText = skill.subtitle
    content_div.append(subtitle_h)

		service_div.append(circle_div)
		service_div.append(content_div)
		outer_div.append(service_div)

		expertise.append(outer_div)
  })
}

// Loading Experience
const loadJobs = (list) => {
  var count = 0;
  list.map(job => {
    // Tabs
    let a_tag = document.createElement("a")
    if (count == 0) a_tag.classList = "nav-link active"
    else a_tag.classList = "nav-link"
    a_tag.id = "v-pills-" + job.tab_name + "-tab"
    a_tag.setAttribute("data-toggle", "pill")
    a_tag.setAttribute("href", "#v-pills-" + job.tab_name)
    a_tag.setAttribute("role", "tab")
    a_tag.setAttribute("aria-controls", "v-pills-" + job.tab_name)
    if (count == 0) a_tag.setAttribute("aria-selected", "true")
    else a_tag.setAttribute("aria-selected", "false")
    a_tag.innerText = job.real_title
		jobsTab.append(a_tag)

    //Content
    let outer_div = document.createElement("div")
    if (count == 0) outer_div.classList = "tab-pane fade show active"
    else outer_div.classList = "tab-pane fade"
    outer_div.id = "v-pills-" + job.tab_name
    outer_div.setAttribute("role", "tabpanel")
    outer_div.setAttribute("aria-labelledby", "v-pills-" + job.tab_name + "-tab")

    let sec = document.createElement("section")
    sec.classList = "blog-wrapper"
    sec.id = "blog"

    let contain_div = document.createElement("div")
    contain_div.classList = "container"

    let post_div = document.createElement("div")
    post_div.classList = "post-meta"

    let h_tag = document.createElement("h1")
    h_tag.classList = "article-title"
    h_tag.innerText = job.category_title

    let img = document.createElement("img")
    img.src = job.logo
    img.classList = "iconSize"

    let date = document.createElement("ul")
    let dateli = document.createElement("li")
    let datea = document.createElement("a")
    datea.innerText = job.date
    dateli.append(datea)
    date.append(dateli)

    post_div.append(h_tag)
    post_div.append(img)
    post_div.append(date)

    let description = document.createElement("ul")
    for (i = 0; i < job.long_description.length; i++) {
      let li_elem = document.createElement("li")
      if (job.long_description[i].includes("https")) {
        let aTAG = document.createElement("a")
        aTAG.setAttribute("target", "_blank")
        aTAG.setAttribute("href", job.long_description[i].split('~')[1])
        aTAG.innerText = job.long_description[i].split('~')[0]
        li_elem.append(aTAG)
      }
      else {
        li_elem.append(job.long_description[i])
      }
      description.append(li_elem)
    }

    let carousel_pictures = document.createElement("div")
    carousel_pictures.classList = "experience-carousel owl-carousel owl-theme"

    for (let pic in job.pictures) {
      let carousel_work = document.createElement("div")
      carousel_work.classList = "work-box"
      let carousel_a = document.createElement("a")
      carousel_a.setAttribute("data-fancybox", "gallery")
      carousel_a.setAttribute("data-src", job.pictures[pic])
      let carousel_div_img = document.createElement("div")
      carousel_div_img.classList = "work-img"
      let carousel_img = document.createElement("img")
      carousel_img.src = job.pictures[pic]
      carousel_img.classList = "img-fluid imgSize"
      carousel_div_img.append(carousel_img)
      carousel_a.append(carousel_div_img)
      carousel_work.append(carousel_a)
      carousel_pictures.append(carousel_work)
    }

    contain_div.append(post_div)
    contain_div.append(description)
    contain_div.append(carousel_pictures)

    sec.append(contain_div)

    outer_div.append(sec)

    jobsContent.append(outer_div)

    count += 1;
  })
}

// Loading Projects
const loadProjects = (list) => {
  var count = 0;
  list.map(project => {
    // Images: 31.28W X 23.46H
    let firstDiv = document.createElement("div")
    firstDiv.classList = "col-lg-4 col-md-6 portfolio-thumbnail all " + project.categories
    if (!project.categories.includes("Python")) firstDiv.style = "display: none"

    let workDiv = document.createElement("div")
    workDiv.classList = "work-box"

    let a_tag = document.createElement("a")
    var queryString = "?info=" + "projects-" + count;

    a_tag.setAttribute("data-fancybox", "")
    a_tag.setAttribute("data-type", "iframe")
    if (project.site != "") a_tag.setAttribute("data-src", project.link)
    else a_tag.setAttribute("data-src", "assets/info-template.html" + queryString)

    let imgDiv = document.createElement("div")
    imgDiv.classList = "work-img"

    // let img = document.createElement("img")
    // img.src = project.head_image
    // img.classList = "img-fluid imgSize"

    let carousel_pictures = document.createElement("div")
    carousel_pictures.classList = "project-carousel owl-carousel owl-theme"

    for (let pic in project.pictures) {
      let carousel_work = document.createElement("div")
      carousel_work.classList = "work-box"
      let carousel_a = document.createElement("a")
      carousel_a.setAttribute("data-fancybox", "gallery")
      carousel_a.setAttribute("data-src", project.pictures[pic])
      let carousel_div_img = document.createElement("div")
      carousel_div_img.classList = "work-img"
      let carousel_img = document.createElement("img")
      carousel_img.src = project.pictures[pic]
      carousel_img.classList = "img-fluid imgSize"
      carousel_div_img.append(carousel_img)
      carousel_a.append(carousel_div_img)
      carousel_work.append(carousel_a)
      carousel_pictures.append(carousel_work)
    }

    imgDiv.append(carousel_pictures)

    let contentDiv = document.createElement("div")
    contentDiv.classList = "work-content"

    let rowDiv = document.createElement("div")
    rowDiv.classList = "row"

    let colDiv = document.createElement("div")
    colDiv.classList = "col-sm-10 text-left"
    let hTag = document.createElement("h2")
    hTag.classList = "w-title"
    hTag.innerText = project.category_title

    let moreDiv = document.createElement("div")
    moreDiv.classList = "w-more"
    let cSpan = document.createElement("span")
    cSpan.classList = "w-ctegory"
    cSpan.innerText = project.categories
    let dateSpan = document.createElement("span")
    dateSpan.classList = "w-date"
    dateSpan.innerText = project.date
    moreDiv.append(cSpan)
    moreDiv.append(" / ")
    moreDiv.append(dateSpan)
    // moreDiv.innerText = cSpan + "/" + dateSpan

    colDiv.append(hTag)
    colDiv.append(moreDiv)

    let col2Div = document.createElement("div")
    col2Div.classList = "col-sm-2"
    let wDiv = document.createElement("div")
    wDiv.classList = "w-like"
    let iconSpan = document.createElement("span")
    iconSpan.classList = "ion-ios-plus-outline"
    wDiv.append(iconSpan)
    col2Div.append(wDiv)

    rowDiv.append(colDiv)
    rowDiv.append(col2Div)

    contentDiv.append(rowDiv)

    a_tag.append(imgDiv)
    a_tag.append(contentDiv)

    workDiv.append(a_tag)

    firstDiv.append(workDiv)

    projs.append(firstDiv)

    count += 1;
  })
}

// Loading Activities
const loadActivities = (list) => {
  var count = 0;
  list.map(activities => {
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "activities-" + count;

    a_tag.setAttribute("data-fancybox", "")
    a_tag.setAttribute("data-type", "iframe")
    if (activities.site != "") a_tag.setAttribute("data-src", activities.site)
    else a_tag.setAttribute("data-src", "assets/info-template.html" + queryString)

		let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = activities.head_image
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = activities.category_title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = activities.short_description
		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-graduation-cap"
		sub_icon_span.append(i_tag)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

    a_tag.append(testimonial_div)

		activity.append(a_tag)

    count += 1;
  })
}

// Loading Awards
const loadAwards = (list) => {
  var count = 0;
  list.map(award => {
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "awards-" + count;

    a_tag.setAttribute("data-fancybox", "")
    a_tag.setAttribute("data-type", "iframe")
    if (award.site != "") a_tag.setAttribute("data-src", award.site)
    else a_tag.setAttribute("data-src", "assets/info-template.html" + queryString)

		let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = award.head_image
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = award.category_title
		author_div.append(award_img)
		author_div.append(name_span)

    let date_p = document.createElement("p")
    date_p.innerText = award.date
    date_p.classList = "description lead"

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = award.short_description
		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-trophy"
		sub_icon_span.append(i_tag)
    content_div.append(date_p)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

    a_tag.append(testimonial_div)

		awardCont.append(a_tag)

    count += 1;
  })
}

const loadSummits = (list) => {
  var count = 0;
	list.map(summit => {
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "summits-" + count;

    a_tag.setAttribute("data-fancybox", "")
    a_tag.setAttribute("data-type", "iframe")
    if (summit.site != "") a_tag.setAttribute("data-src", summit.site)
    else a_tag.setAttribute("data-src", "assets/info-template.html" + queryString)

    let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = summit.logo
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = summit.company + " " + summit.category_title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText =  summit.date
		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-briefcase"

    let info_p = document.createElement("p")
    info_p.classList = "description lead"
		info_p.innerText = summit.short_description

		sub_icon_span.append(i_tag)
		content_div.append(description_p)
    content_div.append(info_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

    a_tag.append(testimonial_div)

		summitCont.append(a_tag)

    count += 1;
	})
}

// Main Call
const main = () => {
  loadSkills(skills)
  loadJobs(experience)
  loadProjects(projects)
  loadActivities(activities)
  loadAwards(awards)
  loadSummits(summits)
}

main();
