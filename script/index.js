
// button click to scroll down

function buyTicket() {
    const paribahanSection = document.getElementById('paribahan');
    paribahanSection.scrollIntoView({ behavior: 'smooth' })
}

let seatCount = 0;
let seatLeft = 40;
const perTicketPrice = 550;
const seats = document.getElementsByClassName('seat');
// console.log(seats)
const seatShow = document.getElementById('seat-count');
const leftSeat = document.getElementById('seatLeft');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        const title = seat.innerText;
        // console.log(title)
        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer)

        if (seatCount < 4 || seat.classList.contains('bg-[#1DD100]')) {


            if (!seat.classList.contains('bg-[#1DD100]')) {
                seat.classList.add('bg-[#1DD100]');
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
                titleContainer.appendChild(div);
                seatCount++;
            }
            else {
                seat.classList.remove('bg-[#1DD100]');
                seatCount--;
            }
            seatShow.innerText=seatCount;
            leftSeat.innerText=seatLeft-seatCount;

        }




    })
}