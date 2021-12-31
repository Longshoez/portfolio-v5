const pageSections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.navLink')
const scrollableContainer = document.querySelector('.content')

const observer = new IntersectionObserver(
    entries =>{
        entries.forEach(entry =>{                             
            entry.target.classList.toggle("activeNavLink", entry.isIntersecting)             
        })
    }
)


pageSections.forEach(sections => {
    observer.observe(sections)
},{
    treshold: 0.25,
    root: scrollableContainer
})