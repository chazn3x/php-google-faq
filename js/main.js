const headerLinks = [
    {
        name: 'Introduzione',
        url: '#'
    },
    {
        name: 'Norme sulla privacy',
        url: '#'
    },
    {
        name: 'Termini di servizio',
        url: '#'
    },
    {
        name: 'Tecnologie',
        url: '#'
    },
    {
        name: 'Domande frequenti',
        url: '#',
        selected: true
    }
]
headerLinks.forEach(link => {
    const listItem = `
    <li class="navbar-item">
        <a class="navbar-link ${link.selected ? 'selected' : ''}" href="${link.url}" title="${link.name}">${link.name}</a>
    </li>
    `
    document.querySelector('.navbar-links').innerHTML += listItem
})
const footerLinks = [
    {
        name: 'Google',
        url: '#'
    },
    {
        name: 'Tutto su Google',
        url: '#'
    },
    {
        name: 'Privacy',
        url: '#'
    },
    {
        name: 'Termini',
        url: '#'
    },
]
footerLinks.forEach(link => {
    const listItem = `
    <li class="footer-item">
        <a class="footer-link" href="${link.url}" title="${link.name}">${link.name}</a>
    </li>
    `
    document.querySelector('.footer-links').innerHTML += listItem
})