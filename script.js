var swiper = new Swiper(".mySwiper",{
    slidesPerVien: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop:true,
    breakpoints:{
        991:{
            slidesPerVien:4
        }
    }
})