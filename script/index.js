
// button click to scroll down

function buyTicket() {
    const paribahanSection = document.getElementById('paribahan');
    paribahanSection.scrollIntoView({ behavior: 'smooth' })
}

let seatCount = 0;
let seatLeft = 40;
const perTicketPrice = 550;
let Price = 0;
let priceTotal = perTicketPrice + Price;
const seats = document.getElementsByClassName('seat');
// console.log(seats)
const seatShow = document.getElementById('seat-count');
const leftSeat = document.getElementById('seatLeft');
const totalPrice = parseFloat(
    document.getElementById('total-price').innerText
);
// console.log(totalPrice)
// price section here
for (const seat of seats) {
    seat.addEventListener('click', function () {
        const title = seat.innerText;
        // console.log(title)
        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer)
        // create element here

        const h2 = document.createElement('h2');
        h2.innerText = title;
        const h3 = document.createElement('h3');
        h3.innerText = 'Economy';
        const p = document.createElement('p');
        p.innerText = perTicketPrice;
        const div = document.createElement('div');
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p);
        div.style.display = 'flex';
        div.style.columnGap = '100px';
        // price section
        const totalPrice = document.getElementById('total-price');
        // console.log(totalPrice)

        if (seatCount < 4 || seat.classList.contains('bg-[#1DD100]')) {
            if (!seat.classList.contains('bg-[#1DD100]')) {
                seat.classList.add('bg-[#1DD100]');
                titleContainer.appendChild(div);
                seatCount++;
            }
            else {
                seat.classList.remove('bg-[#1DD100]');
                titleContainer.innerHTML = ' ';

                seatCount--;
            }
            seatShow.innerText = seatCount;
            leftSeat.innerText = seatLeft - seatCount;

        }
        // calculate price here
        totalPrice.innerText = priceTotal;
        priceTotal += perTicketPrice;




    })
}
// -----------------------------------------------------------


// coupon section here
function applyCoupon() {
    const totalPrice = parseFloat(
        document.getElementById('total-price').innerText
    );
    const inputField = document.getElementById('input-field');
    // console.log(inputField.value)
    const applyButton = document.getElementById('apply-btn');
    // console.log(applyButton)
    const grandTotal = document.getElementById('grand-total');
    // console.log('the grand' ,grandTotal)
    const discountContainer = document.getElementById('discount-container');
    const discountPrice = document.getElementById('discount-price');
    // --------------------------------------


    // --------------------------------------
    // coupon condition here
    if ( inputField.value === 'NEW15') {
        let discount = totalPrice * 0.15;
        // console.log(discount)
        let total = totalPrice - discount;
        grandTotal.innerText = total;
        discountPrice.innerText = discount;
        applyButton.classList.add('hidden');
        discountContainer.classList.remove('hidden');

    }
    else if (inputField.value === 'Couple 20') {
        let discount = totalPrice * 0.20;
        // console.log(discount)
        let total = totalPrice - discount;
        grandTotal.innerText = total;
        discountPrice.innerText = discount;
        applyButton.classList.add('hidden');
        discountContainer.classList.remove('hidden');
    }
    else {
        alert('Enter valid Coupon Code !!!!')
    }
}
