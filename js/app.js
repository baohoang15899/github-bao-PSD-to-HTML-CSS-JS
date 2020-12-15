let menuBtn = document.querySelector('.fa-bars')
let mobileMenu = document.querySelector('.header__content-menu')
let menu = document.querySelector('.header')
let counter = document.querySelectorAll('.counter__content-number')
let counterSection = document.querySelector('.counter')
let slideContent = document.querySelectorAll('.slide__content-group')
let slideCircle = document.querySelectorAll('.slideCircle__content-group')
let nextBtn = document.querySelector('.slide__content-next')
let backBtn = document.querySelector('.slide__content-back')
let nextBtnCir = document.querySelector('.slideCircle__content-next')
let backBtnCir = document.querySelector('.slideCircle__content-back')
let img = document.querySelectorAll('.img')
let modalContent = document.querySelector('.modal__content')
let modalWrap = document.querySelector('.modal')
let body = document.querySelector('body')
let iconS = document.querySelectorAll('.icons')
//------------------------------------slide default--------------------------

let slideIndex = 0
slideContent[slideIndex].style.display="flex"

let slideCir = 0
slideCircle[slideCir].style.display="flex"
//-------------------------------------Galleries-----------------------------
let galleries = [
    {
        src:'img/gallery1.png'
    },
    {
        src:'img/gallery3.png'
    },
    {
        src:'img/gallery6.png'
    },
    {
        src:'img/gallery2.png'
    },
    {
        src:'img/gallery5.png'
    },
    {
        src:'img/gallery4.png'
    },
    {
        src:'img/gallery7.png'
    },
]
///-----------------------------------Function-------------------------------

let main = {
    init:function(){
        this.menu()
        this.counter()
        this.slide()
        this.slideCircle()
        this.modal()
    },

    menu:()=>{
        menuBtn.addEventListener('click',()=>{
            mobileMenu.classList.toggle('show')
        })
        window.addEventListener('scroll',()=>{
            if (scrollY > 0) {
                menu.classList.add('show')
            }
            else{
                menu.classList.remove('show')
            }
        })
    },

    counter:()=>{
        let height = window.innerHeight
        window.addEventListener("scroll",()=>{
            let pos = counterSection.getBoundingClientRect().top
            if (height > pos*1.1) {
                    counter.forEach(count=>{
                        let update = () =>{
                            let data = parseInt(count.getAttribute("data"))
                            let speed = 1
                            let number = parseInt(count.innerText)
                            if (number < data) {
                                number = number+ speed
                                setTimeout(update,65)
                                count.innerText = number
                            }
                        }
                        update()   
                    })
            }
        })
    },

    slide:()=>{
        nextBtn.addEventListener("click",()=>{
            slideIndex++
            slideContent.forEach(slide=>{
                slide.style.display="none"
            })
            if (slideIndex > slideContent.length-1) {
                slideIndex = 0
                slideContent[slideIndex].style.display="flex"
                return
            }
            slideContent[slideIndex].style.display="flex"

        })

        backBtn.addEventListener("click",()=>{
            slideIndex--
            slideContent.forEach(slide=>{
                slide.style.display="none"
            })
            if (slideIndex < 0) {
                slideIndex = slideContent.length-1
                slideContent[slideIndex].style.display="flex"
                return
            }
            slideContent[slideIndex].style.display="flex"
        })
    },

    modal:()=>{
        img.forEach((img,index)=>{
            img.addEventListener("click",()=>{
                let clicked = galleries[index].src
                modalContent.src = clicked
                modalWrap.classList.add('show')
            })
        })
        modalWrap.addEventListener('click',(e)=>{
            let clicked = e.target
            if (clicked === modalWrap) {
                modalWrap.classList.remove('show')
            }
        })
    },

    slideCircle:()=>{
        nextBtnCir.addEventListener("click",()=>{
            slideCir++
            slideCircle.forEach(slide=>{
                slide.style.display="none"
            })
            if (slideCir > slideCircle.length-1) {
                slideCir = 0
                slideCircle[slideCir].style.display="flex"
                return
            }
            slideCircle[slideCir].style.display="flex"

        })

        backBtnCir.addEventListener("click",()=>{
            slideCir--
            slideCircle.forEach(slide=>{
                slide.style.display="none"
            })
            if (slideCir< 0) {
                slideCir = slideCircle.length-1
                slideCircle[slideCir].style.display="flex"
                return
            }
            slideCircle[slideCir].style.display="flex"
        })
    },
}

iconS.forEach(icon=>{
    icon.addEventListener("click",()=>{
        iconS.forEach(icon=>{
            icon.classList.remove('show')
        })
        icon.classList.add('show')
    })
})

main.init()