const links = [
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
links.forEach(link => {
    const listItem = `
    <li class="navbar-item">
        <a class="navbar-link ${link.selected ? 'selected' : ''}" href="${link.url}">${link.name}</a>
    </li>
    `
    document.querySelector('.navbar-links').innerHTML += listItem
})