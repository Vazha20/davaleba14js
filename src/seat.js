document.addEventListener('DOMContentLoaded', function() {
  const seatingArea = document.querySelector('.seating-area');
  const seats = 50;
  const selectedSeats = [];
  const seatPrices = {
    standard: 12,
    premium: 20,
    vip: 30,
  };

  for (let i = 1; i <= seats; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.addEventListener('click', function() {
      this.classList.toggle('selected');
      const seatNumber = parseInt(this.innerText);

      if (this.classList.contains('selected')) {
        selectedSeats.push(seatNumber);
      } else {
        const index = selectedSeats.indexOf(seatNumber);
        if (index > -1) {
          selectedSeats.splice(index, 1);
        }
      }

      console.log(selectedSeats);
      updateCart();
    });

    seat.innerText = i;
    seatingArea.appendChild(seat);
  }

  function updateCart() {
    let totalPrice = 0;
    for (let i = 0; i < selectedSeats.length; i++) {
      const seatNumber = selectedSeats[i];
      const seatPrice = getSeatPrice(seatNumber);
      totalPrice += seatPrice;
    }

    const cartElement = document.querySelector('.cart');

    if (selectedSeats.length > 0) {
      cartElement.innerText = `ჯამი: ${totalPrice} ლ`;
    } else {
      cartElement.innerText = '';
    }
  }

  function getSeatPrice(seatNumber) {
    if (seatNumber <= 10) {
      return seatPrices.vip;
    } else if (seatNumber <= 25) {
      return seatPrices.premium;
    } else {
      return seatPrices.standard;
    }
  }
});

