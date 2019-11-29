// Element variables
const about = document.getElementById("about")
const expertise = document.getElementById("skill-cont")
const jobs = document.getElementById("job-cont")
const projs = document.getElementById("project-cont")
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

// Loading experience
const loadJobs = (list) => {
  list.map(job => {
		let outer_div = document.createElement("div")
		let work_div = document.createElement("div")
		let lightbox = document.createElement("a")
		let img_div = document.createElement("div")
		let work_img = document.createElement("img")
		outer_div.classList = "col-md-4"
		work_div.classList = "work-box"
		lightbox.href = job.logo
		lightbox.setAttribute("data-lightbox", "gallery-mf")
		img_div.classList = "work-img"
		work_img.src = job.logo
		work_img.classList = "img-fluid"
		work_img.width = "200"
		work_img.height = "200"
		img_div.append(work_img)

		let content_div = document.createElement("div")
		let row_div = document.createElement("div")
		let col1_div = document.createElement("div")
		let title_h = document.createElement("h2")
		let more_div = document.createElement("div")
		let skill_span = document.createElement("span")
		let date_span = document.createElement("span")
		content_div.classList = "work-content"
		row_div.classList = "row"
		col1_div.classList = "col-sm-8"
		title_h.classList = "w-title"
		title_h.innerText = job.title
		more_div.classList = "w-more"
		skill_span.classList = "w-ctegory"
		skill_span.innerText = job.site
		date_span.classList = "w-date"
		date_span.innerText = job.date
		more_div.append(skill_span)
		more_div.append(" / ")
		more_div.append(date_span)
		col1_div.append(title_h)
		col1_div.append(more_div)

		let col2_div = document.createElement("div")
		let like_div = document.createElement("div")
		// let button_div = document.createElement("div")
		let button_span = document.createElement("span")
		col2_div.classList = "col-sm-4"
		like_div.classList = "w-like"
		button_span.classList = "ion-ios-plus-outline"
		like_div.append(button_span)
		col2_div.append(like_div)

		row_div.append(col1_div)
		row_div.append(col2_div)
		content_div.append(row_div)

		lightbox.append(img_div)
		lightbox.append(content_div)

		work_div.append(lightbox)

		outer_div.append(work_div)

    jobs.append(outer_div)
  })
}

// Loading PROJECTS
const loadProjects = (list) => {
  list.map(project => {
		let outer_div = document.createElement("div")
		let work_div = document.createElement("div")
		let lightbox = document.createElement("a")
		let img_div = document.createElement("div")
		let work_img = document.createElement("img")
		outer_div.classList = "col-md-4"
		work_div.classList = "work-box"
		lightbox.href = project.logo
		lightbox.setAttribute("data-lightbox", "gallery-mf")
		img_div.classList = "work-img"
		work_img.src = project.logo
		work_img.classList = "img-fluid"
		work_img.width = "200"
		work_img.height = "200"
		img_div.append(work_img)

		let content_div = document.createElement("div")
		let row_div = document.createElement("div")
		let col1_div = document.createElement("div")
		let title_h = document.createElement("h2")
		let more_div = document.createElement("div")
		let skill_span = document.createElement("span")
		let date_span = document.createElement("span")
		content_div.classList = "work-content"
		row_div.classList = "row"
		col1_div.classList = "col-sm-8"
		title_h.classList = "w-title"
		title_h.innerText = project.title
		more_div.classList = "w-more"
		skill_span.classList = "w-ctegory"
		skill_span.innerText = project.link
		date_span.classList = "w-date"
		date_span.innerText = project.date
		more_div.append(skill_span)
		more_div.append(" / ")
		more_div.append(date_span)
		col1_div.append(title_h)
		col1_div.append(more_div)

		let col2_div = document.createElement("div")
		let like_div = document.createElement("div")
		// let button_div = document.createElement("div")
		let button_span = document.createElement("span")
		col2_div.classList = "col-sm-4"
		like_div.classList = "w-like"
		button_span.classList = "ion-ios-plus-outline"
		like_div.append(button_span)
		col2_div.append(like_div)

		row_div.append(col1_div)
		row_div.append(col2_div)
		content_div.append(row_div)

		lightbox.append(img_div)
		lightbox.append(content_div)

		work_div.append(lightbox)

		outer_div.append(work_div)

    projs.append(outer_div)
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
  loadAwards(awards)
  loadSummits(summits)
}

main();

(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
