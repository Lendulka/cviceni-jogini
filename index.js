console.log('funguju!');

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

const Header = (props) => {
    const { title, links } = props
    return `
        <header>
            <h1 class="site-title">${title}</h1>
            <nav> 
                <a href="#">${links[0]}</a>
                <a href="#">${links[1]}</a>
                <a href="#">${links[2]}</a>
                <a href="#">${links[3]}</a>
                <a href="#">${links[4]}</a>
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
    appElm.innerHTML += headerArray.map(oneHead => Header(oneHead))
    appElm.innerHTML += introArray.map(oneIntro => Intro(oneIntro))
    appElm.innerHTML += imgArray.map(oneImg => Pose(oneImg))

}

appJogini(headerArray, introArray, imgArray)