window.addEventListener("scroll", function () {
    var header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 0)
})

// if (localStorage.getItem('theme') == 'dark')
//     setDarkMode(true)

// function setDarkMode(isDark) {
//     if (isDark) {
//         document.body.setAttribute('id', 'darkmode')
//         localStorage.setItem('theme', 'dark')
//     } else {
//         document.body.setAttribute('id', '')
//         localStorage.removeItem('theme')
//     }
// }