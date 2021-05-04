
const
    mainImages=document.querySelectorAll('.slider-main-image'),
    carouselImages=document.querySelectorAll('.slider-carousel-image'),
    carousel=document.getElementById('carousel'),
    prev=document.getElementById('arrow-left'),
    next=document.getElementById('arrow-right'),
    imageWidth=carouselImages[0].offsetWidth,
    prevMobile=document.getElementById('arrow-mobile-left'),
    nextMobile=document.getElementById('arrow-mobile-right'),
    numberOfImages=mainImages.length - 1,
    prevRev=document.getElementById('reviews-arrow-left'),
    nextRev=document.getElementById('reviews-arrow-right'),
    RevImages=document.querySelectorAll('.reviews-carousel-image');
let
    index=0,
    i=0,
    j=0,
    k=0;

//функция активного изображения
const activeImage = n =>{
    for(image of mainImages){
        image.classList.remove('active');
    }
    mainImages[n].classList.add('active');
}
//Отслеживание нажатия на правую конопку мобильной версии слайдера
nextMobile.addEventListener('click',()=>{
    if (j<numberOfImages)
        j++;
    else
        j=0;
    activeImage(j);
})
//Отслеживание нажатия на левую конопку мобильной версии слайдера
prevMobile.addEventListener('click',()=>{
    if (j>0)
        j--;
    else
        j=numberOfImages;
    activeImage(j);
})
//Отслеживание нажатия на слайд из карусели
carouselImages.forEach((item,imageIndex) => {
    item.addEventListener('click',()=>{
        index = imageIndex;
        activeImage(index);
    })
})

//Отслеживаем клик по правой кнопке карусели
next.addEventListener('click',()=>{
    if (carouselImages.length-i > 4){
        carouselImages[i].style.display = 'none';
        i++;
        prev.style.display = 'block';
        if (carouselImages.length-i == 4){
            next.style.display = 'none';
        }
    }
})

//Отслеживаем клик по левой кнопке карусели
prev.addEventListener('click',()=>{
    if (i > 0){
        i--;
        carouselImages[i].style.display = 'block';
        next.style.display = 'block';
        if(i==0){
            prev.style.display = 'none';
        }
    }
})

//Отслеживаем клик по правой кнопке карусели отзывов
nextRev.addEventListener('click',()=>{
    if (RevImages.length-k > 3){
        RevImages[k].style.display = 'none';
        k++;
        prevRev.style.display = 'block';
        if (RevImages.length-k == 3){
            nextRev.style.display = 'none';
        }
    }
})

//Отслеживаем клик по левой кнопке карусели отзывов
prevRev.addEventListener('click',()=>{
    if (k > 0){
        k--;
        RevImages[k].style.display = 'block';
        console.log(RevImages[k], 'block');
        nextRev.style.display = 'block';
        if(k==0){
            prevRev.style.display = 'none';
        }
    }
})