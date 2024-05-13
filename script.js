let currentPage = 1;
let darkTheme = true;

function nextPage() {
    const currentPageElement = document.getElementById('page' + currentPage);
    currentPageElement.style.transition = 'transform 0.5s ease';
    currentPageElement.style.transform = 'rotateY(-180deg)';
    setTimeout(() => {
        currentPageElement.style.display = 'none';
        currentPage++;
        const nextPageElement = document.getElementById('page' + currentPage);
        nextPageElement.style.display = 'block';
        nextPageElement.style.transform = 'rotateY(0deg)';
    }, 500);
}

function prevPage() {
    const currentPageElement = document.getElementById('page' + currentPage);
    currentPageElement.style.transition = 'transform 0.5s ease';
    currentPageElement.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        currentPageElement.style.display = 'none';
        currentPage--;
        const prevPageElement = document.getElementById('page' + currentPage);
        prevPageElement.style.display = 'block';
        prevPageElement.style.transform = 'rotateY(0deg)';
    }, 500);
}

function toggleTheme() {
    const body = document.body;
    const containers = document.querySelectorAll('.container');
    const buttons = document.querySelectorAll('button');
    if (darkTheme) {
        body.classList.add('light');
        containers.forEach(container => container.classList.add('light'));
        buttons.forEach(button => button.classList.add('light'));
    } else {
        body.classList.remove('light');
        containers.forEach(container => container.classList.remove('light'));
        buttons.forEach(button => button.classList.remove('light'));
    }
    darkTheme = !darkTheme;
}
