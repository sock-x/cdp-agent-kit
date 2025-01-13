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
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            const display = document.getElementById('data-display');
            display.innerHTML = `<p>Bitcoin Price: $${data.bitcoin.usd}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to 054.ai - The Future of AI");
});
function createSnowflake(layer) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // Customize properties based on the layer
    let duration, fontSize, opacity;
    switch (layer) {
        case 'snow-layer-1':
            duration = Math.random() * 2 + 3; // 3 to 5 seconds
            fontSize = Math.random() * 5 + 10; // 10px to 15px
            opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1
            break;
        case 'snow-layer-2':
            duration = Math.random() * 2 + 4; // 4 to 6 seconds
            fontSize = Math.random() * 5 + 15; // 15px to 20px
            opacity = Math.random() * 0.4 + 0.6; // 0.6 to 1
            break;
        case 'snow-layer-3':
            duration = Math.random() * 2 + 5; // 5 to 7 seconds
            fontSize = Math.random() * 5 + 20; // 20px to 25px
            opacity = Math.random() * 0.3 + 0.7; // 0.7 to 1
            break;
    }

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.opacity = opacity;
    snowflake.style.fontSize = fontSize + 'px';

    document.getElementById(layer).appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(() => createSnowflake('snow-layer-1'), 100);
setInterval(() => createSnowflake('snow-layer-2'), 150);
setInterval(() => createSnowflake('snow-layer-3'), 200);
