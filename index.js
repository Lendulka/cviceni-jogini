console.log('funguju!');

/*
const headerArray = [{
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
}]

const introArray = [{
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
}]

const imgArray = [{
    src: 'img/yoga-pose.jpg',
}]

const LinkElement = (link) => {
    return `
        <a href="#">${link}</a>
    `
}

const Header = (props) => {
    const { title, links } = props
    return `
        <header>
            <h1 class="site-title">${title}</h1>
            <nav> 
                ${links.map(link => LinkElement(link)).join('')}
            </nav>
        </header>
    `
}

const Intro = (props) => {
    const { heading, text } = props
    return `
        <div class="intro">
            <h2>${heading}</h2>
            <p>${text}</p>
        </div>
    `
}

const Pose = (props) => {
    return `
        <img class="pose" src=${props.src} />
    `
}

const appJogini = (headerArray, introArray, imgArray) => {
    const appElm = document.querySelector('#app')
    let allHTML = ''
    allHTML += headerArray.map(oneHead => Header(oneHead))
    allHTML += introArray.map(oneIntro => Intro(oneIntro))
    allHTML += imgArray.map(oneImg => Pose(oneImg))
    appElm.innerHTML = allHTML
}

appJogini(headerArray, introArray, imgArray)
*/

const header = {
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
}

const intro = {
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
}

const img = {
    src: 'img/yoga-pose.jpg',
}

//

const appElm = document.querySelector('#app')

const Header = (props) => {
    const { title, links } = props
    return `
        <header>
            <h1 class="site-title">${title}</h1>
            <nav> 
                ${links.map(link => `<a href="#">${link}</a>`).join('')}
            </nav>
        </header>
    `
}

const displayHeader = (headerObject) => {
    appElm.innerHTML += Header({
        title: headerObject.title,
        links: headerObject.links,
    })
}

displayHeader(header)

//

const Intro = (props) => {
    const { heading, text } = props
    return `
        <div class="intro">
            <h2>${heading}</h2>
            <p>${text}</p>
        </div>
    `
}

const displayIntro = (introObject) => {
    appElm.innerHTML += Intro({
        heading: introObject.heading,
        text: introObject.text,
    })
}

displayIntro(intro)

//

const Pose = (props) => {
    return `
        <img class="pose" src=${props.src} />
    `
}

const displayPose = (poseObject) => {
    appElm.innerHTML += Pose({
        src: poseObject.src,
    })
}

displayPose(img)