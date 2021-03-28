// AOS
AOS.init({duration: 1000})

document.querySelectorAll(".project").forEach(function (el) {
  var size = "width/700"

  if(window.location.hostname == "huis.noort.be") {
    var figure = el.querySelector("figure")
    var imgUrl = cleanBgImg(figure.style.backgroundImage)
    imgUrl = "https://img.imageboss.me/van-noortstraat-15b/" + size + "/" + imgUrl

    figure.style.backgroundImage = "url(" + imgUrl +")"
  }

  el.addEventListener("click", function (e) {
    var figure = e.currentTarget.querySelector("figure")
    var imgUrl = cleanBgImg(figure.style.backgroundImage).replace(size, "cdn")
    window.open(imgUrl)
  })
})

jQuery(document).ready(function ($) {
  "use strict"

  // Animsition
  $(".animsition").animsition()

  // Scrollax
  $.Scrollax()

  // Smooth scroll
  var $root = $("html, body")

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 40,
      },
      500
    )

    return false
  })

  // Show menu
  if ($(window).width() > 768) {
    $("body").removeClass("menu-open")
    $(".js-templateux-menu").css("display", "block")
  }
  // Window Resize
  $(window).resize(function () {
    var $this = $(this)
    $(".js-templateux-menu li").removeClass("staggard")
    $(".js-toggle-menu").removeClass("is-active")
    if ($this.width() > 768) {
      $("body").removeClass("menu-open")
      $(".js-templateux-menu").css("display", "block")
    } else {
      if ($this.width() < 768) {
        $(".js-templateux-menu").css("display", "none")
      }
    }
  })

  // Hamburger Button
  $(".js-toggle-menu").on("click", function (e) {
    e.preventDefault()

    var $this = $(this)

    if ($("body").hasClass("menu-open")) {
      $this.removeClass("is-active")
      $("body").removeClass("menu-open")
      $(".js-templateux-menu li").removeClass("staggard")
    } else {
      $this.addClass("is-active")
      $("body").addClass("menu-open")

      $(".js-templateux-menu li").each(function (k) {
        var $this = $(this)
        setTimeout(function () {
          $this.addClass("staggard")
        }, 100 * k)
      })
    }

    if ($(".templateux-menu").is(":visible")) {
      $(".js-templateux-menu").fadeOut(300)
    } else {
      $(".js-templateux-menu").fadeIn(300)
    }
  })

  var cleanBgImg = function(val) {
    return val.slice(4, -1).replace(/"/g, "")
  }
})

