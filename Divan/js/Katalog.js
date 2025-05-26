const isMobile = {
    Android :function(){
    return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
    return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
    return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
    return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
    return (
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows())
    },
    };
    
    if(isMobile.any()){
    document.body.classList.add("touch");
    }else{
    document.body.classList.add("pc");
    }
    
    const burgerBtn = document.querySelector('.header-burger-menu-btn');
    const burgerMenu = document.querySelector('.header-burger-menu');
    
    function burgerShow(){
    burgerMenu.classList.toggle("active");
    document.body.classList.toggle("locked");
    }
    burgerBtn.addEventListener("click", burgerShow);
    


const langArrow = document.querySelector('.header-arrowBot');
const choseLang = document.querySelector('.header-language');
const langPopup = document.querySelector('.header-lang-popUp');
const langArea = document.querySelector('.header-lang-chose')

function arrowRotate(){
    choseLang.classList.toggle("active");
    langPopup.classList.toggle("active");
}

langArea.addEventListener("mouseenter", arrowRotate);
langArea.addEventListener("mouseleave", arrowRotate);

//ФИЛЬТР =========================================================================

const filterArea = document.querySelector('.filter-chose');
const filterArrow = document.querySelector('.filter-chose-arrow')

function filtArrowRotate(){
filterArrow.style.transform = 'rotate(180deg)';
}

function filtArrowRotateBack(){
    filterArrow.style.transform = 'rotate(0deg)';
    }

filterArea.addEventListener("mouseenter", filtArrowRotate);
filterArea.addEventListener("mouseleave", filtArrowRotateBack);
filterArea.addEventListener("click", filtArrowRotate);
filterArea.addEventListener("click", filtArrowRotateBack);


const filterTitleArea = document.querySelector('.filter-value-all-row');
const filterTitleArrow = document.querySelector('.filter-popup-value-all-img');
const filterPopUpAll = document.querySelector('.filter-popup-all');

function filterTitleArrowRotate(){
filterTitleArrow.classList.toggle("active");
filterPopUpAll.classList.toggle("active");
}

filterTitleArea.addEventListener("click", filterTitleArrowRotate);

const filterPopup = document.querySelector('.filter-popup');

function menuPopupShow(){
filterPopup.classList.toggle("active");
}

filterArea.addEventListener("click", menuPopupShow);

// GRID=============================================================================

const activeFirstGrid = document.querySelector('.filter-grid-img.firstPos.active');
const passiveFirstGrid = document.querySelector('.filter-grid-img.firstPos.passive');
const activeSecGrid = document.querySelector('.filter-grid-img.secPos.active');
const passiveSecGrid = document.querySelector('.filter-grid-img.secPos.passive');


const firstPosGrid = document.querySelectorAll('.filter-grid-img.firstPos');
const secPosGrid = document.querySelectorAll('.filter-grid-img.secPos');

function switchGridsToSec(){
firstPosGrid.forEach((e)=>{
    e.style.display = 'none'
})
secPosGrid.forEach((e)=>{
    e.style.display = 'block'
})

};

function switchGridsToFirst(){
    secPosGrid.forEach((e)=>{
        e.style.display = 'none'
    })
    firstPosGrid.forEach((e)=>{
        e.style.display = 'block'
    })
}

passiveFirstGrid.addEventListener("click", switchGridsToSec);
passiveSecGrid.addEventListener("click", switchGridsToFirst);

const productCard = document.querySelectorAll('.card');

passiveFirstGrid.addEventListener("click", ()=>{
    productCard.forEach((e)=>{
      
        e.classList.remove("more");
        e.classList.add("wide");
    })
})
passiveSecGrid.addEventListener("click", ()=>{
    productCard.forEach((e)=>{
        e.classList.remove("wide");
        e.classList.add("more");
    })
})

// MENU=====================================================================
const filterPopUp = document.querySelector('.filter-popup');
const notAv = document.querySelector('.card-no-value');


const sofaMainChoser = document.querySelector('.menu-card.sofa');
const armchMainChoser = document.querySelector('.menu-card.armch');
const chairMainChoser = document.querySelector('.menu-card.chair');
const bedMainChoser = document.querySelector('.menu-card.bed');
const matMainChoser = document.querySelector('.menu-card.mat');
const pufMainChoser = document.querySelector('.menu-card.puf');
const exMainChoser = document.querySelector('.menu-card.ex');


const sofaAddChoser = document.querySelector('.filter-popup-value.sofa');
const armchAddChoser = document.querySelector('.filter-popup-value.armch');
const chairAddChoser = document.querySelector('.filter-popup-value.chair');
const bedAddChoser = document.querySelector('.filter-popup-value.bed');
const matAddChoser = document.querySelector('.filter-popup-value.mat');
const pufAddChoser = document.querySelector('.filter-popup-value.puf');
const exAddChoser = document.querySelector('.filter-popup-value.ex');

const sofaBurgerChoser = document.querySelector('.header-burger-item.sofa');
const armchBurgerChoser = document.querySelector('.header-burger-item.armch');
const chairBurgerChoser = document.querySelector('.header-burger-item.chair');
const bedBurgerChoser = document.querySelector('.header-burger-item.bed');
const matBurgerChoser = document.querySelector('.header-burger-item.mat');
const pufBurgerChoser = document.querySelector('.header-burger-item.puf');
const exBurgerChoser = document.querySelector('.header-burger-item.ex');

const sofacard = document.querySelectorAll('.card.sofa');
const chaircard = document.querySelectorAll('.card.chair');
const armchcard = document.querySelectorAll('.card.armch');
const bedcard = document.querySelectorAll('.card.bed');
const matcard = document.querySelectorAll('.card.mat');
const pufcard = document.querySelectorAll('.card.puf');
const excard = document.querySelectorAll('.card.ex');

const menuCTitle = document.querySelectorAll('.menu-card-title');
const menuCards = document.querySelectorAll('.menu-card')



function sofaShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card sofa' && e.className !== 'card sofa wide' && e.className !== 'card sofa more'){
            e.style.display = 'none';
        }
    })
    
    notAv.style.display = 'none'
    const sofaArr = Array.from(sofacard);
    console.log(sofaArr);
        if(sofaArr.length == 0){
            notAv.style.display = 'block'
        }
}
function chairShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card chair' && e.className !== 'card chair wide' && e.className !== 'card chair more'){
            e.style.display = 'none';
        }
    })

    notAv.style.display = 'none'
    const chairArr = Array.from(chaircard);
        if(chairArr.length == 0){
            notAv.style.display = 'block'
        }
            
}
function armchShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card armch' && e.className !== 'card armch wide' && e.className !== 'card armch more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const armchArr = Array.from(armchcard);
        if(armchArr.length == 0){
            notAv.style.display = 'block'
        }
}
function bedShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card bed' && e.className !== 'card bed wide' && e.className !== 'card bed more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const bedArr = Array.from(bedcard);
        if(bedArr.length == 0){
            notAv.style.display = 'block'
        }
}
function matShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card mat' && e.className !== 'card mat wide' && e.className !== 'card mat more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const matArr = Array.from(matcard);
        if(matArr.length == 0){
            notAv.style.display = 'block'
        }
}
function pufShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card puf' && e.className !== 'card puf wide' && e.className !== 'card puf more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const pufArr = Array.from(pufcard);
        if(pufArr.length == 0){
            notAv.style.display = 'block'
        }
}
function exShow(){
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card ex' && e.className !== 'card ex wide' && e.className !== 'card ex more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const exArr = Array.from(excard);
        if(exArr.length == 0){
            notAv.style.display = 'block'
        }
}


function sofaShowBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card sofa' && e.className !== 'card sofa wide' && e.className !== 'card sofa more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const sofaArr = Array.from(sofacard);
    console.log(sofaArr);
        if(sofaArr.length == 0){
            notAv.style.display = 'block'
        }
}
function chairShowBurger(){
    notAv.style.display = 'none'
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card chair' && e.className !== 'card chair wide' && e.className !== 'card chair more'){
            e.style.display = 'none';
        }
    })

    notAv.style.display = 'none'
    const chairArr = Array.from(chaircard);
        if(chairArr.length == 0){
            notAv.style.display = 'block'
        }
            
}
function armchShowBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card armch' && e.className !== 'card armch wide' && e.className !== 'card armch more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const armchArr = Array.from(armchcard);
        if(armchArr.length == 0){
            notAv.style.display = 'block'
        }
}
function bedShowBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card bed' && e.className !== 'card bed wide' && e.className !== 'card bed more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const bedArr = Array.from(bedcard);
        if(bedArr.length == 0){
            notAv.style.display = 'block'
        }
}
function matShowBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card mat' && e.className !== 'card mat wide' && e.className !== 'card mat more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const matArr = Array.from(matcard);
        if(matArr.length == 0){
            notAv.style.display = 'block'
        }
}
function pufShowBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card puf' && e.className !== 'card puf wide' && e.className !== 'card puf more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const pufArr = Array.from(pufcard);
        if(pufArr.length == 0){
            notAv.style.display = 'block'
        }
}
function exShowBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    notAv.style.display = 'none'
    productCard.forEach((e)=>{
        e.style.display = 'flex';
        if(e.className !== 'card ex' && e.className !== 'card ex wide' && e.className !== 'card ex more'){
            e.style.display = 'none';
        }
    })
    notAv.style.display = 'none'
    const exArr = Array.from(excard);
        if(exArr.length == 0){
            notAv.style.display = 'block'
        }
}

sofaMainChoser.addEventListener("click", sofaShow);
sofaAddChoser.addEventListener("click", sofaShow);
sofaBurgerChoser.addEventListener("click", sofaShowBurger);

chairMainChoser.addEventListener("click", chairShow);
chairAddChoser.addEventListener("click", chairShow);
chairBurgerChoser.addEventListener("click", chairShowBurger);

armchMainChoser.addEventListener("click", armchShow);
armchAddChoser.addEventListener("click", armchShow);
armchBurgerChoser.addEventListener("click", armchShowBurger);

bedMainChoser.addEventListener("click", bedShow);
bedAddChoser.addEventListener("click", bedShow);
bedBurgerChoser.addEventListener("click", bedShowBurger);

matMainChoser.addEventListener("click", matShow);
matAddChoser.addEventListener("click", matShow);
matBurgerChoser.addEventListener("click", matShowBurger);

pufMainChoser.addEventListener("click", pufShow);
pufAddChoser.addEventListener("click", pufShow);
pufBurgerChoser.addEventListener("click", pufShowBurger);

exMainChoser.addEventListener("click", exShow);
exAddChoser.addEventListener("click", exShow);
exBurgerChoser.addEventListener("click", exShowBurger);

const showAllCards = document.querySelector('.main-view-all');
const showAllCardsBurger = document.querySelector('.header-burger-item.all');

function showAll(){
    productCard.forEach((e)=>{
        e.style.display= 'flex'
    })
}
function showAllBurger(){
    document.body.classList.toggle("locked");
    burgerMenu.classList.toggle("active");
    productCard.forEach((e)=>{
        e.style.display= 'flex'
    })
}

showAllCards.addEventListener("click", showAll);
showAllCardsBurger.addEventListener("click", showAllBurger);

// FORM AND CHECKBOX==================================================================
const formButton = document.querySelector('.send-form');
const myCheckbox = document.querySelector('.checkbox')
const formResult = document.querySelector('.ask-result');
const askForm = document.querySelector('.ask-form');
const askcard = document.querySelector('.ask-card');

const secondButton = document.querySelector('.send-secform')
const secformResult = document.querySelector('.ask-result.sec');
const secaskForm = document.querySelector('.ask-form.sec');
const secaskcard = document.querySelector('.ask-card.sec');
const warning = document.querySelector('.ask-warning');
const fillWarning = document.querySelector('.ask-fill-warning');

formButton.addEventListener("click", ()=>{
    valid = true;
    if(myCheckbox.checked !== true){
        formButton.disable;
        warning.classList.add("show");

    }
    else if(myCheckbox.checked){
        askForm.classList.add("passive");
        formResult.classList.add("active");
        askcard.classList.toggle("completed")

    }
    
   
})

const formPopUp = document.querySelector('.popup');
const footerConsult = document.querySelector('.footer-personal')

footerConsult.addEventListener("click", ()=>{
    formPopUp.classList.toggle("active");
})



secondButton.addEventListener("click", ()=>{
        formPopUp.classList.add("active");
        secaskForm.classList.add("passive");
        secformResult.classList.add("active");
        secaskcard.classList.toggle("completed");
        setTimeout(()=>{
            formPopUp.classList.remove("active");
        },2000);
})

// FOOTER HREF ======================================================================
const inst = document.querySelector('.footer-media-item.inst');
const fb = document.querySelector('.footer-media-item.fb');

function instHref(){
    location.href = 'https://instagram.com/krammerkkk?igshid=YmMyMTA2M2Y=';
}
function fbHref(){
    location.href = 'https://vk.com/shecallsmebladee';
}

inst.addEventListener("click", instHref);
fb.addEventListener("click", fbHref);

// LIVESEARCH ==============================================================================================

const searchInput = document.querySelector('.search');

searchInput.oninput = function(){
    let vall = this.value.trim();
    let val = vall.toUpperCase();

    let items = document.querySelectorAll('.card-title')
    const cardimgs =  document.querySelectorAll('.card-img');
    
    if(val != ''){
        items.forEach((elem)=>{
                if(elem.innerText.search(val) == -1){
                    elem.classList.remove("hide");
                    elem.classList.add("hide");
                    let firstParent = elem.parentNode;
                    let card = firstParent.parentNode;
                    if(elem.classList.contains("hide")){
                        card.classList.add("hide");
                    }
                }
        })
    }
    else if(val == ''){
        items.forEach((elem)=>{
            elem.classList.remove("hide");
            let firstParent = elem.parentNode;
                    let card = firstParent.parentNode;
                    card.classList.remove("hide");
                    
        })
    }
}

let test = document.querySelector('.card-title');
let par = test.parentNode;
let par2 = par.parentNode;
console.log(par2);

// TEL==============================================================================

const mobphone = document.querySelector('.header-mobile-phone');
const phone = document.querySelector('.header-item.phone');

function call(){
    location.href = 'tel:+375292196736';
}

phone.addEventListener("click", call);
mobphone.addEventListener("click", call);
