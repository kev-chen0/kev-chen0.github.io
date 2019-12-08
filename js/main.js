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
		outer_div.classList = "col-md-4"
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
  list.map(job => {
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
		name_span.innerText = job.title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		// description_p.innerText = job.desc

    let description_lst = job.desc.split("•")
    let list = document.createElement("ul")
    list.classList = "description-box lead"

    description_lst.forEach(function(d){
      let x = document.createElement("li")
      x.append(d)
      list.append(x)
    })

		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-cogs"
		sub_icon_span.append(i_tag)
    content_div.append(list)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

		jobs.append(testimonial_div)

		// let outer_div = document.createElement("div")
		// let work_div = document.createElement("div")
		// let lightbox = document.createElement("a")
		// let img_div = document.createElement("div")
		// let work_img = document.createElement("img")
		// outer_div.classList = "col-md-4 fix_center"
		// work_div.classList = "service-box"
		// lightbox.href = job.logo
		// lightbox.setAttribute("data-lightbox", "gallery-mf")
		// img_div.classList = "work-img"
		// work_img.src = job.logo
		// work_img.classList = "img-fluid"
		// work_img.width = "200"
		// work_img.height = "200"
		// img_div.append(work_img)
    //
		// let content_div = document.createElement("div")
		// let row_div = document.createElement("div")
		// let col1_div = document.createElement("div")
		// let title_h = document.createElement("h2")
		// let more_div = document.createElement("div")
		// let skill_span = document.createElement("span")
		// let date_span = document.createElement("span")
		// content_div.classList = "work-content"
		// row_div.classList = "row"
		// col1_div.classList = "col-sm-8"
		// title_h.classList = "w-title"
		// title_h.innerText = job.title
		// more_div.classList = "w-more"
		// skill_span.classList = "w-ctegory"
		// skill_span.innerText = job.site
		// date_span.classList = "w-date"
		// date_span.innerText = job.date
		// more_div.append(skill_span)
		// more_div.append(" / ")
		// more_div.append(date_span)
		// col1_div.append(title_h)
		// col1_div.append(more_div)
    //
		// let col2_div = document.createElement("div")
		// let like_div = document.createElement("div")
		// // let button_div = document.createElement("div")
		// let button_span = document.createElement("span")
		// col2_div.classList = "col-sm-4"
		// like_div.classList = "w-like"
		// button_span.classList = "ion-ios-plus-outline"
		// like_div.append(button_span)
		// col2_div.append(like_div)
    //
		// row_div.append(col1_div)
		// row_div.append(col2_div)
		// content_div.append(row_div)
    //
		// lightbox.append(img_div)
		// lightbox.append(content_div)
    //
		// work_div.append(lightbox)
    //
		// outer_div.append(work_div)
    //
    // jobs.append(outer_div)
  })
}

// Loading Projects
const loadProjects = (list) => {
  list.map(project => {
    let testimonial_div = document.createElement("div")
		testimonial_div.classList = "testimonial-box"

		let author_div = document.createElement("div")
		let award_img = document.createElement("img")
		let name_span = document.createElement("span")
		author_div.classList = "author-test"
		award_img.classList = "b-shadow-a"
		award_img.src = project.logo
		award_img.width = "100"
		award_img.height = "100"
		name_span.classList = "author"
		name_span.innerText = project.title
		author_div.append(award_img)
		author_div.append(name_span)

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = project.link
		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-bolt"
		sub_icon_span.append(i_tag)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

		projs.append(testimonial_div)

		// let outer_div = document.createElement("div")
		// let work_div = document.createElement("div")
		// let lightbox = document.createElement("a")
		// let img_div = document.createElement("div")
		// let work_img = document.createElement("img")
		// outer_div.classList = "col-md-4"
		// work_div.classList = "service-box"
		// lightbox.href = project.logo
		// lightbox.setAttribute("data-lightbox", "gallery-mf")
		// img_div.classList = "work-img"
		// work_img.src = project.logo
		// work_img.classList = "img-fluid"
		// work_img.width = "200"
		// work_img.height = "200"
		// img_div.append(work_img)
    //
		// let content_div = document.createElement("div")
		// let row_div = document.createElement("div")
		// let col1_div = document.createElement("div")
		// let title_h = document.createElement("h2")
		// let more_div = document.createElement("div")
		// let skill_span = document.createElement("span")
		// let date_span = document.createElement("span")
		// content_div.classList = "work-content"
		// row_div.classList = "row"
		// col1_div.classList = "col-sm-8"
		// title_h.classList = "w-title"
		// title_h.innerText = project.title
		// more_div.classList = "w-more"
		// skill_span.classList = "w-ctegory"
		// skill_span.innerText = project.link
		// date_span.classList = "w-date"
		// date_span.innerText = project.date
		// more_div.append(skill_span)
		// more_div.append(" / ")
		// more_div.append(date_span)
		// col1_div.append(title_h)
		// col1_div.append(more_div)
    //
		// let col2_div = document.createElement("div")
		// let like_div = document.createElement("div")
		// // let button_div = document.createElement("div")
		// let button_span = document.createElement("span")
		// col2_div.classList = "col-sm-4"
		// like_div.classList = "w-like"
		// button_span.classList = "ion-ios-plus-outline"
		// like_div.append(button_span)
		// col2_div.append(like_div)
    //
		// row_div.append(col1_div)
		// row_div.append(col2_div)
		// content_div.append(row_div)
    //
		// lightbox.append(img_div)
		// lightbox.append(content_div)
    //
		// work_div.append(lightbox)
    //
		// outer_div.append(work_div)
    //
    // projs.append(outer_div)
  })
}

// Loading Activities
const loadActivities = (list) => {
  list.map(activities => {
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

		activity.append(testimonial_div)
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

		let content_div = document.createElement("div")
		let description_p = document.createElement("p")
		let sub_icon_span = document.createElement("span")
		let i_tag = document.createElement("i")
		description_p.classList = "description lead"
		description_p.innerText = award.title
		sub_icon_span.classList = "comit"
		i_tag.classList = "fa fa-trophy"
		sub_icon_span.append(i_tag)
		content_div.append(description_p)
		content_div.append(sub_icon_span)

		testimonial_div.append(author_div)
		testimonial_div.append(content_div)

		awardCont.append(testimonial_div)
  })
}

const loadSummits = (list) => {
	list.map(summit => {
		let outer_div = document.createElement("div")
		outer_div.classList = "col-md-4"
		let cardblog_div = document.createElement("div")
		cardblog_div.classList = "card card-blog"
		let cardimg_div = document.createElement("div")
		cardimg_div.classList = "card-img"
		let big_img = document.createElement("img")
		big_img.classList = "img-fluid"
		big_img.src = summit.background
		cardimg_div.append(big_img)

		let cardbody_div = document.createElement("div")
		cardbody_div.classList = "card-body"
		let cardbox_div = document.createElement("div")
		cardbox_div.classList = "card-category-box"
		let cardcate_div = document.createElement("div")
		cardcate_div.classList = "card-category"
		let cate_h = document.createElement("h6")
		cate_h.classList = "category"
		cate_h.innerText = summit.category
		cardcate_div.append(cate_h)
		cardbox_div.append(cardcate_div)

		let title_h = document.createElement("h3")
		title_h.classList = "card-title"
		title_h.innerText = summit.title
		let desc_p = document.createElement("p")
		desc_p.classList = "card-description"
		desc_p.innerText = summit.description

		cardbody_div.append(cardbox_div)
		cardbody_div.append(title_h)
		cardbody_div.append(desc_p)

		let cardfooter_div = document.createElement("div")
		cardfooter_div.classList = "card-footer"
		let author_div = document.createElement("div")
		author_div.classList = "post-author"
		let company_img = document.createElement("img")
		company_img.src = summit.logo
		company_img.classList = "avatar rounded-circle"
		let company_span = document.createElement("span")
		company_span.classList = "author"
		company_span.innerText = " " + summit.company
		author_div.append(company_img)
		author_div.append(company_span)
		let date_div = document.createElement("div")
		date_div.classList = "post-date"
		let date_span = document.createElement("span")
		date_span.classList = "ion-ios-clock-outline"
		date_div.append(date_span)
		date_div.append(" " + summit.time)
		cardfooter_div.append(author_div)
		cardfooter_div.append(date_div)

		cardblog_div.append(cardimg_div)
		cardblog_div.append(cardbody_div)
		cardblog_div.append(cardfooter_div)

		outer_div.append(cardblog_div)

		summitCont.append(outer_div)
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
