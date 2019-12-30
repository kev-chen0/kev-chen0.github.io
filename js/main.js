// Element variables
const about = document.getElementById("about")
const expertise = document.getElementById("skill-cont")
const jobs = document.getElementById("job-cont")
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
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "experience" + count;

    a_tag.setAttribute("data-fancybox", "")
    a_tag.setAttribute("data-type", "iframe")
    if (job.site != "") a_tag.setAttribute("data-src", job.site)
    else a_tag.setAttribute("data-src", "assets/info-template.html" + queryString)

    let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = job.logo
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = job.category_title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = job.short_description
    let date_p = document.createElement("p")
    date_p.innerText = job.date
    date_p.classList = "description lead"

		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-cogs"
		sub_icon_span.append(i_tag)
    content_div.append(date_p)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

    a_tag.append(testimonial_div)

		jobs.append(a_tag)

    count += 1;
  })
}

// Loading Projects
const loadProjects = (list) => {
  var count = 0;
  list.map(project => {
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "projects" + count;

    a_tag.setAttribute("data-fancybox", "")
    a_tag.setAttribute("data-type", "iframe")
    if (project.site != "") a_tag.setAttribute("data-src", project.link)
    else a_tag.setAttribute("data-src", "assets/info-template.html" + queryString)

    let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = project.head_image
		award_img.width = "200"
		award_img.height = "200"
		name_span.classList = "author"
		name_span.innerText = project.category_title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = project.short_description
    let date_p = document.createElement("p")
    date_p.innerText = project.date
    date_p.classList = "description lead"

		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-bolt"
		sub_icon_span.append(i_tag)
    content_div.append(date_p)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

    a_tag.append(testimonial_div)

		projs.append(a_tag)

    count += 1;
  })
}

// Loading Activities
const loadActivities = (list) => {
  var count = 0;
  list.map(activities => {
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "activities" + count;

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
		award_img.src = activities.logo
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = activities.title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = activities.desc
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
  list.map(award => {
		let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = award.image
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = award.org
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
		description_p.innerText = award.title
		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-trophy"
		sub_icon_span.append(i_tag)
    content_div.append(date_p)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

		awardCont.append(testimonial_div)
  })
}

const loadSummits = (list) => {
  var count = 0;
	list.map(summit => {
    let a_tag = document.createElement("a")
    var queryString = "?info=" + "summits" + count;

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
  // loadJobs(experience)
  // loadProjects(projects)
  loadActivities(activities)
  loadAwards(awards)
  loadSummits(summits)
}

main();
