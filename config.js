//heart element function
let heartBalance = 0;
const hearts = document.querySelectorAll('.heart');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', () => {
        heartBalance++;
        document.getElementById('heart-balance').innerText = heartBalance;
    });
}

// copy btn function
let copyBalance = 0;
const copyBtn = document.querySelectorAll('.copy-btn');
for (let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', () => {
        copyBalance++;
        document.getElementById('copy-balance').innerText = copyBalance;
    });
}

// call btn function
const coinBalance =parseInt(document.getElementById('coin-balance').innerText);
const callBtn = document.querySelectorAll('.call-btn');
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', function () {
        const card = callBtn[i].closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;
        // console.log(callIcon, serviceName, serviceNumber, coinBalance);
        alert(`📞Calling.... ${serviceName} at ${serviceNumber}`);
        
    })
}
