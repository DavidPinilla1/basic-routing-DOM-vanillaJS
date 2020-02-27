const Home = `
        <div class="home">
            <h2> Home </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis possimus similique accusantium delectus repellat! Nesciunt consequuntur voluptas, nam quia blanditiis harum, illo voluptatibus quasi in enim, atque assumenda possimus.
            </p>
            </div>
`
const Portfolio = `<div class="portfolio">
                    <h2> Portfolio </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam dolor ea velit repudiandae libero unde nisi numquam explicabo possimus sit odit architecto minus neque, ullam quidem deserunt adipisci impedit facilis delectus aspernatur? Minima corrupti a dignissimos reiciendis nulla magni praesentium ducimus placeat sed, distinctio, obcaecati consequatur doloribus rem nihil labore dolore! Placeat dolorum tempora deleniti? Voluptatibus cupiditate ab consectetur tempore voluptates aliquam, eius neque sunt vero quod. Magni maxime maiores consequuntur iusto minima quis voluptates amet sequi iste ex..
                    </p>
                </div>`

const Contacto = `<div class="contacto">
                    <h2> Contacto </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis adipisci accusantium fuga corrupti vitae iste, deleniti odit perferendis rem..
                    </p>
                </div>`;
const main = document.querySelector('main')
window.addEventListener('load', () => {
    if (window.location.hash === '#portfolio') {
        main.innerHTML = Portfolio
    } else if (window.location.hash === '#contacto') {
        main.innerHTML = Contacto
    } else {
        main.innerHTML = Home
    }
})
let widthProgressBar = 0;
document.querySelector('.HomeButton').addEventListener('click', () => {
    main.innerHTML = Home;
    window.scrollTo({
        top: 400,
        behavior: 'smooth',
      })
      setTimeout(() => {
          document.body.scrollIntoView({ behavior: 'smooth' })
      }, 1000);
    document.querySelector('.progress-bar').style.width = '33.33%'
    history.pushState({}, '', '#');
})
document.querySelector('.PortfolioButton').addEventListener('click', () => {
    main.innerHTML = Portfolio;
    document.querySelector('.progress-bar').style.width = '66.66%'
    history.pushState({}, '', '#portfolio');
})
document.querySelector('.ContactoButton').addEventListener('click', () => {
    main.innerHTML = Contacto;
    document.querySelector('.progress-bar').style.width = '100%'
    history.pushState({}, '', '#contacto');
})
// setInterval(() => {
//     widthProgressBar++
//     document.querySelector('.progress-bar').style.width = widthProgressBar + '%'
//     if (widthProgressBar === 100) {
//         widthProgressBar = 0;
//     }
// }, 200);