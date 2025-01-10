function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 and 5 seconds
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // between 10px and 20px

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);

function fetchCryptoData() {
    fetch('/api/crypto-data')
        .then(response => response.json())
        .then(data => {
            const display = document.getElementById('data-display');
            display.innerHTML = `<p>Bitcoin Price: $${data.bitcoinPrice}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to 054.ai - The Future of AI");
});
