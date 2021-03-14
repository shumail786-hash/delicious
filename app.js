// Adding class on Scroll on Nav Bar 
var nav = document.querySelector('.scroll-nav')
console.log(nav);
window.addEventListener('scroll', () => {
    nav.classList.toggle('sticknav', window.scrollY > 50)
})
// Inner HTML of Menu Buttons
var inner = document.querySelector('.inner')
var all = document.querySelector('.all')
var starters = document.querySelector('.starters')
var salads = document.querySelector('.salads')
var special = document.querySelector('.speciality')
all.addEventListener('click', () => {
    inner.innerHTML = `
            <div class="row" style="margin-left: 3%;">
                <div class="col-md-5 mt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Lobster Bisque
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..........................................</span>
                            $5.95 <br>
                    </h5>
                    <p>Lorem Ipsum Dolar</p>

                </div>
                <div class="col-md-5 pt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Bread barrel
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..............................................</span>
                            $6.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
            </div>

            <div class="row mt-4" style="margin-left: 3%;">
                <div class="col-md-5 mt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Crab Cake
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..................................................</span>
                            $7.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
                <div class="col-md-5 pt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Caesar Selections
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">......................................</span>
                            $8.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
            </div>

            <div class="row mt-4" style="margin-left: 3%;">
                <div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Mozzarella Stick
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">........................................</span>
                            $9.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
                <div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Greek Salad
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">...............................................</span>
                            $4.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
            </div>
            <div class="row mt-4" style="margin-left: 3%;">
                <div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Spinach Salad
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">............................................</span>
                            $9.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
                <div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Lobster Roll
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">...............................................</span>
                            $9.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
            </div>
            <div class="row mt-4" style="margin-left: 3%;">
                <div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Lobster Bisque
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">...........................................</span>
                            $12.5
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
                <div class="col-md-5">
                    <h5 class="d-none">
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Lobster Bisque
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..........................................</span>
                            $15
                    </h5>
                    <p class="d-none">Lorem Ipsum Dolar</p>
                </div>
            </div>
    `
})
// Starters button 
starters.addEventListener('click', () => {
    inner.innerHTML = `
            <div class="row" style="margin-left: 3%;">
                <div class="col-md-5 mt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Lobster Bisque
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..........................................</span>
                            $5.95 <br>
                    </h5>
                    <p>Lorem Ipsum Dolar</p>

                </div>
                <div class="col-md-5 pt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Bread barrel
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..............................................</span>
                            $6.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
            </div>
            <div class="row mt-4" style="margin-left: 3%;">
                <div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Crab Cake
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..................................................</span>
                            $7.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
            </div>
    `
})

// Salads button
salads.addEventListener('click', () => {
    inner.innerHTML = `
    <div class="row mt-4" style="margin-left: 3%;">
    <div class="col-md-5 pt-sm-4">
            <h5>
            <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                Caesar Selections
            </span><span
                style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">......................................</span>
                    $8.95
                </h5>
            <p>Lorem Ipsum Dolar</p>
        </div>
        <div class="col-md-5 pt-sm-4">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Greek Salad
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">...............................................</span>
                            $4.95
                    </h5>
                    <p>Lorem Ipsum Dolar</p>
                </div>
    </div>
    <div class="row mt-4" style="margin-left: 3%;">
    <div class="col-md-5">
    <h5>
        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
            Spinach Salad
        </span><span
            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">............................................</span>
            $9.95
    </h5>
    <p>Lorem Ipsum Dolar</p>
</div>
    </div>
    `
})

// Special Menu Button
special.addEventListener('click', ()=>
{
    inner.innerHTML = `
    <div class="row mt-4" style="margin-left: 3%;">
    <div class="col-md-5">
    <h5>
        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
            Lobster Roll
        </span><span
            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">...............................................</span>
            $9.95
    </h5>
    <p>Lorem Ipsum Dolar</p>
</div>
<div class="col-md-5">
                    <h5>
                        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
                            Tuscon Grilled
                        </span><span
                            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..........................................</span>
                            $5.95 <br>
                    </h5>
                    <p>Lorem Ipsum Dolar</p>

                </div>
    </div>
    <div class="row mt-2" style="margin-left: 3%;">
    <div class="col-md-5">
    <h5>
        <span style="font-weight: bolder; color: #FFB03B; font-size: 1.24rem;">
            Bread barrel
        </span><span
            style="color: grey; font-size: .8rem; letter-spacing: 2.4px;">..............................................</span>
            $6.95
    </h5>
    <p>Lorem Ipsum Dolar</p>
</div>
    </div>
    `
})

var show = document.querySelector('.show')
var hide = document.querySelector('.hide')
var showingimg = document.querySelector('.showingimg')
let inofimg = document.querySelectorAll('.inofimg')
inofimg.forEach((e,i)=>
{
    e.addEventListener('click',()=>
    {
        show.style.visibility = "visible"
        console.log(e);
        showingimg.innerHTML = `<img src="${e.src}" class="mx-auto">`   
    })
})
hide.addEventListener('click',()=>
{
    show.style.visibility = "hidden"
})
let specialData = [
    {
        id: 1,
        title: 'Architecto ut aperiam autem id',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-1.jpg`
    },
    {
        id: 2,
        title: 'Et blanditiis nemo veritatis excepturi',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-2.jpg`
    },
    {
        id: 3,
        title: 'Impedit facilis occaecati odio neque aperiam sit',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-3.jpg`
    },
    {
        id: 4,
        title: 'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-4.jpg`
    },
    {
        id: 5,
        title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-5.jpg`
    }
]

let specialBtns = document.querySelectorAll('.special-data-link');
console.log(specialBtns);

let specialTxtTemp = '';
let specialImgTemp = '';
specialBtns.forEach((e , ind)=>{
    e.addEventListener('click' , ()=>{
        specialData.forEach(data=>{
            if(ind + 1 == data.id){
                specialTxtTemp = `
                    <p class="h4 py-2">${data.title}</p>
                    <p>${data.para}</p>
                `
                specialImgTemp = `
                    <img src="img/${data.img}" alt="">
                `
            }
        })
        let specialTxt = document.querySelector('.special-txt');
        let specialImg = document.querySelector('.special-img');
        console.log(specialImg);
        specialTxt.innerHTML = specialTxtTemp
        specialImg.innerHTML = specialImgTemp
    })
})