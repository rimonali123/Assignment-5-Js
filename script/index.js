
// button click to scroll down

function buyTicket() {
    const paribahanSection = document.getElementById('paribahan');
    paribahanSection.scrollIntoView({ behavior: 'smooth' })
}

let seatCount = 0;
let seatLeft = 40;
const perTicketPrice = 550;
let Price = 0;
let PriceTotal = perTicketPrice + Price;
const seats = document.getElementsByClassName('seat');
// console.log(seats)
const seatShow = document.getElementById('seat-count');
const leftSeat = document.getElementById('seatLeft');
const totalPrice = parseFloat(
    document.getElementById('total-price').innerText
);
// console.log(totalPrice)
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
        console.log('the price is ', totalPrice)

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
        totalPrice.innerText = PriceTotal;
        PriceTotal += perTicketPrice;




    })
}