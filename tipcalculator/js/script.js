const btn = document.querySelector('button');

btn.addEventListener('click', calculate);

function calculate(e) {
    e.preventDefault();

    let billAmt = document.getElementById('bill-amt').value;
    let service = document.getElementById('service').value;
    const para = document.querySelector('p');

    if (billAmt === '' || service === 0) {
        para.style.display = 'block';
        para.textContent = 'Please Enter Values...';
        para.style.color = 'red';
        return;
    }

    let tip = billAmt * service;
    tip = Math.round(tip * 100) / 100;
    tip = tip.toFixed(2);
    para.style.display = 'block';
    para.textContent = '$' + tip;
}