// BOOKING CALCULATOR WITH SILENT WHATSAPP
function showBookingOptions(state, city = '') {
    const location = city ? `${city}, ${state}` : state;
    
    // Create calculator modal
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "10000";
    modal.style.overflowY = "auto";
    modal.id = "bookingModal";

    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, rgba(20,20,20,0.95), rgba(5,5,5,0.95)); border: 1px solid rgba(212,175,55,0.3); padding: 40px; border-radius: 25px; max-width: 500px; box-shadow: 0 20px 60px rgba(0,0,0,0.8); color: #fff; margin: 20px;">
            <h2 style="color: #d4af37; margin-bottom: 20px; text-align: center; font-size: 24px;">PACKAGE CALCULATOR</h2>
            <p style="text-align: center; color: #aaa; margin-bottom: 25px;">📍 ${location}</p>
            
            <form id="bookingCalcForm" style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">Full Name *</label>
                    <input type="text" id="booking-name" placeholder="Your Name" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit;">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">WhatsApp Number *</label>
                    <input type="tel" id="booking-phone" placeholder="+91 XXXXXXXXXX" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit;">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">Number of Persons *</label>
                        <input type="number" id="booking-persons" min="1" value="1" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">Number of Days *</label>
                        <input type="number" id="booking-days" min="1" value="3" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit;">
                    </div>
                </div>
                
                <!-- Price calculation removed as requested -->
                
                <button type="submit" style="background: linear-gradient(135deg, #d4af37, #b8962e); color: #000; border: none; padding: 14px; border-radius: 25px; font-weight: 600; cursor: pointer; font-size: 16px; transition: 0.3s; font-family: inherit;">
                    SEND ENQUIRY VIA WHATSAPP
                </button>
                
                <button type="button" onclick="closeBookingModal()" style="background: transparent; border: 1px solid #666; color: #aaa; padding: 10px; border-radius: 25px; cursor: pointer; transition: 0.3s; font-family: inherit;">
                    Cancel
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Form submission (no automatic price calculation)
    document.getElementById("bookingCalcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    fetch("http://localhost:3000/send-whatsapp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("booking-name").value,
            phone: document.getElementById("booking-phone").value,
            persons: document.getElementById("booking-persons").value,
            days: document.getElementById("booking-days").value,
            location: location
        })
    });

    alert("✅ Thank you! Our team will contact you shortly.");
    closeBookingModal();
});
}

function sendToWhatsApp(message) {
    const phone = "919585575354";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
