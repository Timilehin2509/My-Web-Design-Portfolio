const portfolioData = [
    { 
        title: 'Result Summary Component',
        imageSrc: './assets/images/portfolio/Results summary component.png',
        description: 'My first web development project.'
    },
    { 
        title: 'QR Code Component',
        imageSrc: './assets/images/portfolio/QR code component.png',
        description: 'A QR code to Frontend Mentor.'
    },
    { 
        title: 'Profile Card Component',
        imageSrc: './assets/images/portfolio/Profile card component.png',
        description: 'A simple social media profile card. dndjdnkdksms mc mkmskmkmskmkmk , , ,m kmmkmkmkmkmkmkm'
    },
    { 
        title: 'Product Preview Card Component',
        imageSrc: './assets/images/portfolio/Product preview card component.png',
        description: 'A product page on a shopping site.'
    },
    { 
        title: 'Single Price Grid Component',
        imageSrc: './assets/images/portfolio/Single Price Grid Component.png',
        description: 'A call to action for a subscription plan.'
    },
    { 
        title: 'AWS_Startups Header',
        imageSrc: './assets/images/portfolio/AWS_Startups Header.png',
        description: 'A basic header section of an event web page.'
    }
];

function createPortfolioItem(item) {
    return `
        <div class="portfolio-item">
            <img src="${item.imageSrc}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
}

function renderPortfolioItems() {
    const container = document.getElementById('portfolio-container');
    const portfolioItemsHTML = portfolioData.map(createPortfolioItem).join('');
    container.innerHTML = portfolioItemsHTML;
}

document.addEventListener('DOMContentLoaded', renderPortfolioItems);
