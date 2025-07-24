document.addEventListener('DOMContentLoaded', function () {
    const bookButton = document.getElementById('bookButton');
    if (bookButton) {
        bookButton.addEventListener('click', function () {
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const roomType = document.getElementById('roomType')?.value;
            const checkin = document.getElementById('checkin')?.value;
            const checkout = document.getElementById('checkout')?.value;
            const guests = document.getElementById('guests')?.value;

            if (!name || !email || !roomType || !checkin || !checkout || !guests) {
                alert("Please fill in all fields.");
                return;
            }

            alert(`Booking request submitted for ${name} (${roomType}).\nCheck-in: ${checkin}, Check-out: ${checkout}.\nGuests: ${guests}.\nEmail: ${email}`);
        });
    }

    const visitors = [
        { name: "Ramesh Kumar", room: 101, checkin: "2025-03-01", checkout: "2025-03-03", guests: 2 },
        { name: "Priya Singh", room: 102, checkin: "2025-03-03", checkout: "2025-03-05", guests: 1 },
        { name: "Arjun Patel", room: 103, checkin: "2025-03-05", checkout: "2025-03-08", guests: 3 },
        { name: "Neha Sharma", room: 104, checkin: "2025-03-08", checkout: "2025-03-10", guests: 2 },
        { name: "Vikram Reddy", room: 105, checkin: "2025-03-10", checkout: "2025-03-12", guests: 4 }
    ];

    const visitorTableBody = document.getElementById("visitorTableBody");
    if (visitorTableBody) {
        visitors.forEach(visitor => {
            const row = visitorTableBody.insertRow();
            row.insertCell().textContent = visitor.name;
            row.insertCell().textContent = visitor.room;
            row.insertCell().textContent = visitor.checkin;
            row.insertCell().textContent = visitor.checkout;
            row.insertCell().textContent = visitor.guests;
        });
    }
});
