$(document).ready(function () {
  $('.sidenav').sidenav()
  AOS.init()
  //Scrolling
  $('.js-hook--about').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#about').offset().top - 50,
      },
      1000
    )
  })

  $('.js-hook--home').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#home').offset().top,
      },
      1000
    )
  })

  $('.js-hook--skills').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#skills').offset().top - 50,
      },
      1000
    )
  })

  $('.js-hook--demos').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#demos').offset().top - 50,
      },
      1000
    )
  })

  $('.js-hook--education').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#education').offset().top - 50,
      },
      1000
    )
  })

  $('.js-hook--references').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#references').offset().top - 50,
      },
      1000
    )
  })

  $('.js-hook--experience').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#experience').offset().top - 50,
      },
      1000
    )
  })

  $('.js-hook--contact').click(function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $('#contact').offset().top - 50,
      },
      1000
    )
  })
})
