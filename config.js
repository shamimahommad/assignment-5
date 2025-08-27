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
        const card =copyBtn[i].closest('.card');
        const copyNumber =card.querySelector('.service-number').innerText;
        // console.log(copyNumber); 
        navigator.clipboard.writeText(copyNumber);
        alert(`📋 This Number copied: ${copyNumber}`);       
    });
}

// call btn function
const transactionData = [];
const callBtn = document.querySelectorAll('.call-btn');
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', function () {
        const card = callBtn[i].closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;
        // console.log(callIcon, serviceName, serviceNumber, coinBalance);
        const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
        if (coinBalance < 20) {
            alert("⚠️ You don't have enough coins for call");
            return;
        }
        newBalance = coinBalance - 20;
        // console.log(newBalance);
        document.getElementById('coin-balance').innerText = newBalance;
        alert(`📞Calling.... ${serviceName} at ${serviceNumber}`);

        const data = {
            name: serviceName,
            num: serviceNumber,
            time: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
        // console.log(transactionData);       

        const transactionContainer = document.getElementById('container');
        const div = document.createElement("div");
        div.innerHTML = `
                    <div class="mt-4 flex justify-between items-center bg-gray-100 rounded-xl p-2 text-sm">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p>${data.num}</p>
                        </div>
                        <p>${data.time}</p>
                    </div>
            `;
        transactionContainer.appendChild(div);
        // console.log(div);            
    });
}

//Clear All History Function
document.getElementById('history-clear')
    .addEventListener('click', function () {
        transactionData.length = 0;
        document.getElementById('container').innerHTML = "";
    })