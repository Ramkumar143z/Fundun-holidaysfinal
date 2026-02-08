// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll Reveal Logic (throttled with requestAnimationFrame, passive listener)
let _scrollTicking = false;
window.addEventListener('scroll', function() {
    if (!_scrollTicking) {
        window.requestAnimationFrame(function() {
            reveal();
            _scrollTicking = false;
        });
        _scrollTicking = true;
    }
}, { passive: true });

function reveal() {
    var reveals = document.querySelectorAll('.section, .card, .service-card, .about-text');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Initial check on load
window.onload = reveal;

// Calculator logic (same as before but with a small bounce effect)
function calculateTotal() {
    const resultDiv = document.getElementById("calc-result");
    resultDiv.style.opacity = "0";
    
    setTimeout(() => {
        const destinationRate = document.getElementById("dest-select").value;
        const travelers = document.getElementById("travelers").value;

        if (travelers > 0) {
            const total = destinationRate * travelers;
            resultDiv.innerHTML = `
                <div style="transform: scale(1.1); transition: 0.3s; color: #c5a059; font-weight: bold;">
                    <p>EXCLUSIVE QUOTE</p>
                    <h2 style="font-size: 2.5rem;">₹${total.toLocaleString('en-IN')}</h2>
                </div>
            `;
            resultDiv.style.opacity = "1";
        }
    }, 300);
}

// Destination data
const destinations = {
    "Tamil Nadu": {
    "title": "Tamil Nadu Destinations",
    "subtitle": "Explore the rich culture and natural beauty of Tamil Nadu",
    "places": {
        "Ooty": {
            description: "Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu famous for its tea estates, botanical gardens, and colonial architecture.",
            image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850347/Ooty_sm1awg.png",
            places: ["Boat House", "Pykara Dam", "Pykara Lake", "Rose Garden", "Tea Museum", "Pine Forest", "Shooting Point", "Karnataka Garden", "Doddapetta Peak"]
        },
        "Kodaikanal": {
            description: "Kodaikanal is a charming hill town known for its pristine lakes, waterfalls, and scenic viewpoints.",
            image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850389/kodaikanal_rrm80l.png",
            places: ["Silver Falls", "Kodaikanal Lake", "Bryant Park", "Coakers Park", "Poombarai", "Kookal", "Pillar Rock", "Guna Caves"]
        },
        "Yercaud": {
            description: "Yercaud is a serene hill station known for its coffee plantations, lakes, and panoramic views.",
            image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850504/yercadu_vpquei.png",
            places: ["Yercaud Lake", "Pagoda Point", "Loop Road", "Bears Cave", "Kiliyur Water Falls", "Servarayan Temple"]
        },
        "Kanyakumari": {
            description: "Kanyakumari is the southernmost tip of India, famous for its stunning sunrise and sunset views, temples, and memorials.",
            image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850491/Kannayakumari_dsszcl.png",
            places: ["Thiruvalluvar Statue", "Vivekananda Memorial Rock", "Sunset View Point", "Beach", "Padmanabhapuram Palace", "Papanasam Temple", "Manimuthar Dam", "Kuttralam"]
        },
        "Chennai": {
            description: "Chennai, the capital of Tamil Nadu, is a vibrant city with rich history, temples, beaches, and modern attractions.",
            image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850626/chennai_tyxhra.png",
            places: ["Marina Beach", "Mahabalipuram", "Santhome Church", "Birla Planetorium", "Elliotts Beach", "Kapaleeshwar Temple", "VGP Amusement Park"]
        },
        "Pondicherry": {
            description: "Pondicherry, a former French colony, offers a blend of Indian and French cultures with beautiful beaches and colonial architecture.",
            image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850641/pondicherry_ffgflu.png",
            places: ["French Colony", "Paradise Beach", "Sacred Heart Basilica", "Rock Beach", "Auroville Beach", "Promenade Beach", "Chunnambar Boat House"]
        }
    }
    },
    "kerala": {
        title: "Kerala Destinations",
        subtitle: "Experience God's Own Country with its backwaters and hills",
        places: {
            "Cochin": {
                description: "Cochin, also known as Kochi, is a vibrant city blending history, culture, and modernity with Chinese fishing nets and colonial architecture.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/cochi_m11tfv.jpg",
                places: ["Chotanikara Bhagavathy Temple", "Athi Rampadi Water Falls", "Cherai Beach", "Mattancherry Palace", "Hill Palace Museum", "Wonderla", "Bolgatti Palace", "Lulu Mall", "Vypen Beach"]
            },
            "Munnar": {
                description: "Munnar is a picturesque hill station famous for its sprawling tea plantations, misty mountains, and wildlife sanctuaries.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850359/munnar_bjo4pq.png",
                places: ["Mattupetty Dam", "Tea Museum", "Echo Point", "Top Station", "Kundala Lake", "Photo Point", "Rose Garden"]
            },
            "Wayanad": {
                description: "Wayanad is a district known for its wildlife, waterfalls, and ancient caves, offering a perfect blend of nature and adventure.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850416/wayanadu_gpawkt.png",
                places: ["Edakkal Caves", "Chembra Peak", "Lakkidi View Point", "Soochippara Water Falls", "Meenmutty Falls", "Banasurasagar Dam"]
            },
            "Alleppey": {
                description: "Alleppey, famous for its backwaters, is a serene destination for houseboat cruises and coastal relaxation.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850439/alleppey_eg4fs5.png",
                places: ["Backwaters", "Alappuzha Beach", "Light House", "St. Mary Forane Church", "Vembanad Lake"]
            },
            "Vagamon": {
                description: "Vagamon is a tranquil hill station with meadows, pine forests, and panoramic views of the Western Ghats.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850545/vagamon_xoktr4.png",
                places: ["Thangalpara", "Kurushimala", "Pine Forest", "Vagamon Meadows", "Ulupunni Tunnel", "Echo Point", "Idukki Dam", "Marmala Falls"]
            },
            "Trivandrum": {
                description: "Trivandrum, the capital of Kerala, is known for its temples, museums, and beautiful beaches.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850569/thiruvandrum_zxqmjj.png",
                places: ["Padmanabha Swamy Temple", "Chithra Art Gallery", "Zoological Park", "Napier Museum", "Magic Planet", "Mall of Travancore", "Kovalam Light House", "Kovalam Beach"]
            },
            "Varkala": {
                description: "Varkala is a coastal town famous for its red cliffs, pristine beaches, and Ayurvedic treatments.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850657/varkala_cjyrib.png",
                places: ["Varkala Beach", "Varkala Cliff", "Odayam Beach", "Anjengo Fort Lighthouse"]
            },
            "Thekkady": {
                description: "Thekkady is home to Periyar National Park, offering wildlife safaris and boat rides on the lake.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850674/thekkady_j99sk0.png",
                places: ["Periyar National Park", "Thekkady Lake", "Hill King", "Vandiperiyar"]
            }
        }
    },
    "karnataka": {
        title: "Karnataka Destinations",
        subtitle: "Discover the heritage and adventure in Karnataka",
        places: {
            "Mysore": {
                description: "Mysore, the cultural capital of Karnataka, is renowned for its palaces, gardens, and rich heritage.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769851229/mysore_aatmtu.png",
                places: ["Mysore Palace", "Mysore Zoo", "Shuka Vana", "Brindavan Garden", "Chamundeshwari Temple", "Balmuri Falls", "St. Philomena Church", "GRS Fantasy Amusement Park"]
            },
            "Coorg": {
                description: "Coorg, known as the Scotland of India, offers coffee plantations, waterfalls, and adventure activities.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769942817/coorg_hc1qce.jpg",
                places: ["Golden Temple", "Kaveri Nisargadhama", "Dubare Forest", "Harangi Dam", "White Water River Rafting", "Chiklihole Reservoir", "Abbey Falls", "Raja Seat", "Mandalpete Jeep Trekking"]
            },
            "Bangalore": {
                description: "Bangalore, the Silicon Valley of India, is a bustling city with parks, palaces, and modern attractions.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850454/Bangalore_ja0ghv.png",
                places: ["Wonderla", "Lalbagh Garden", "Bannerghatta National Park", "Bangalore Palace", "Cubbon Park", "Iskcon Temple", "Triusultan Palace", "Commercial Street Shopping", "Visvesvaraya Museum", "UB City Mall"]
            },
            "Chikmagalur": {
                description: "Chikmagalur is a coffee-growing region famous for its hills, waterfalls, and trekking spots.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850466/chikmangalore_e3duxj.png",
                places: ["Siri Statue", "Mullayanagiri", "Baba Budan Giri", "Seethalayangiri", "Z-Point Trekking", "Honnamana Halla", "Ukkada Water Falls", "Jhari Falls", "Bandi Kallu Gudda Sunset Point"]
            },
            "Mangalore": {
                description: "Mangalore is a coastal city known for its beaches, temples, and seafood cuisine.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850586/mangalore_xyki1k.png",
                places: ["Panambur Beach", "Pilikula Tourism", "Tannirbhavi Beach", "Mangaladevi Temple", "Someshwar Beach", "Forum Fiza Mall"]
            },
            "Murudeshwar": {
                description: "Murudeshwar is famous for its giant Shiva statue, beach, and the Murudeshwar Fort.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850601/murudeshwar_kr4vv6.png",
                places: ["Shiva Temple", "Murudeshwar Beach", "Murudeshwar Fort", "Jog Falls"]
            },
            "Gokarna & Udupi": {
                description: "Gokarna and Udupi offer pristine beaches, ancient temples, and spiritual retreats.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850700/gokarna_udupi_idsedu.png",
                places: ["Om Beach", "Paradise Beach", "Kudle Beach", "Mahabaleshwara Temple", "Water Sports", "Yana Caves", "Halfmoon Beach", "St. Mary's Island", "Krishna Temple", "Anantheshwara Temple"]
            },
            "Dandeli": {
                description: "Dandeli is an adventure hub with river rafting, wildlife, and eco-tourism activities.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850712/dandeli_ebgqug.png",
                places: ["Moulangi Eco Park", "Disney Park", "Supa Dam", "Kali River Water Sports", "Zorbing", "Rafting", "Jacuzzi Bath", "Zipline Activities", "Trekking", "Kayaking"]
            }
        }
    },
    "Hyderabad": {
        title: "Hyderabad Destinations",
        subtitle: "Explore the city of pearls and its historical sites",
        places: {
            "Charminar": {
                description: "Charminar is an iconic monument symbolizing Hyderabad's rich history and architecture.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769666577/charmina_bpg1wb.jpg",
                places: ["Charminar", "Laad Bazaar", "Mecca Masjid", "Chowmahalla Palace"]
            },
            "Golconda": {
                description: "Golconda Fort is a magnificent fortress known for its acoustics and historical significance.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769666704/golgonda_aqxzrx.jpg",
                places: ["Fort Entrance", "Sound & Light", "Qutub Tombs", "Taramati Baradari"]
            },
            "Ramoji Film City": {
                description: "Ramoji Film City is Asia's largest film studio offering tours and entertainment.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769629047/ramoj_lhqfct.jpg",
                places: ["Film Sets", "Bahubali Set", "Studio Tour", "Adventure Park"]
            },
            "Hussain Sagar": {
                description: "Hussain Sagar is a large lake with the Buddha statue, perfect for boating and picnics.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769944988/hussian_duqbik.jpg",
                places: ["Hussain Sagar Lake", "Buddha Statue"]
            },
            "Birla Mandir": {
                description: "Birla Mandir is a beautiful Hindu temple made of white marble with intricate carvings.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769945004/birla_nsnjea.jpg",
                places: ["Birla Temple", "Hindu Temple"]
            }
        }
    }
};

// ✅ FIXED & OPTIMIZED openDestinationPage Function
function openDestinationPage(state) {
    const data = destinations[state];
    if (!data) return;

    const detailPage = document.getElementById("detailPage");
    const placesGrid = document.getElementById("places-grid");
    
    document.getElementById("detail-title").innerHTML = data.title;
    document.getElementById("detail-subtitle").innerText = data.subtitle;

    placesGrid.innerHTML = "";
    const isMobile = window.innerWidth <= 768;

    for (const [city, cityData] of Object.entries(data.places)) {
        const card = document.createElement("div");
        card.className = "safari-card";
        
        // ✅ KEY FIX: Desktop-ku background image directly on safari-card
        if (!isMobile) {
            card.style.backgroundImage = `url('${cityData.image}')`;
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "center";
        }

        // ✅ Mobile-ku separate image div
        if (isMobile) {
            const imgDiv = document.createElement("div");
            imgDiv.className = "card-img-top";
            imgDiv.style.backgroundImage = `url('${cityData.image}')`;
            imgDiv.style.width = "100%";
            imgDiv.style.height = "55%";
            imgDiv.style.backgroundSize = "cover";
            imgDiv.style.backgroundPosition = "center";
            imgDiv.style.backgroundRepeat = "no-repeat";
            card.appendChild(imgDiv);
        }

        const destInfo = document.createElement('div');
        destInfo.className = 'dest-info';
        
        destInfo.innerHTML = `
            <h1>${city.toUpperCase()}</h1>
            <p>${cityData.description}</p>
            <div class="card-btns">
                <button class="btn-gold" onclick="event.stopPropagation(); showBookingOptions('${state}', '${city}')">BOOK</button>
                <button class="btn-white" onclick="event.stopPropagation(); viewCityDetails('${state}', '${city}')">VIEW</button>
            </div>
        `;

        card.appendChild(destInfo);
        placesGrid.appendChild(card);
    }

    if (!isMobile) {
        const navDiv = document.createElement("div");
        navDiv.className = "slider-nav";
        navDiv.innerHTML = `
            <button onclick="moveSlider('prev')"><i class="fas fa-arrow-left"></i></button>
            <button onclick="moveSlider('next')"><i class="fas fa-arrow-right"></i></button>
        `;
        placesGrid.appendChild(navDiv);
    }

    detailPage.style.display = "block";
    setTimeout(() => detailPage.style.opacity = "1", 10);
}

// Slider Movement Logic (Intha logic constant-ah irukatum for desktop)
function moveSlider(direction) {
    const items = document.querySelectorAll('.safari-card');
    const grid = document.getElementById('places-grid');
    if (items.length === 0) return;

    if (direction === 'next') {
        grid.appendChild(items[0]);
    } else {
        grid.prepend(items[items.length - 1]);
    }
}

function closeDetailPage() {
    document.getElementById("detailPage").style.display = "none";
}

function viewCityDetails(state, city) {
    const places = destinations[state].places[city].places;
    const modal = document.createElement("div");
    
    // Modal unique ID
    modal.id = "city-details-modal";
    
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.95); display: flex; justify-content: center;
        align-items: center; z-index: 10000; backdrop-filter: blur(5px);
    `;

    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, rgba(20,20,20,0.98), rgba(5,5,5,0.98)); 
                    border: 1px solid rgba(212,175,55,0.4); padding: 35px; border-radius: 25px; 
                    text-align: center; max-width: 500px; width: 90%; max-height: 85%; 
                    overflow-y: auto; box-shadow: 0 30px 70px rgba(0,0,0,1);">
            
            <h3 style="color: #d4af37; margin-bottom: 25px; font-family: 'Poppins', sans-serif; letter-spacing: 1px;">
                PLACES IN ${city.toUpperCase()}
            </h3>
            
            <ul style="list-style: none; padding: 0; text-align: left; color: #fff;">
                ${places.map(place => `
                    <li style="margin-bottom: 12px; padding: 12px; border-bottom: 1px solid rgba(212,175,55,0.15); 
                               background: rgba(255,255,255,0.03); border-radius: 12px; display: flex; align-items: center;">
                        <i class="fas fa-map-marker-alt" style="color: #d4af37; margin-right: 12px; font-size: 14px;"></i> 
                        <span style="font-size: 15px;">${place}</span>
                    </li>
                `).join("")}
            </ul>

            <button id="close-modal-btn" style="background: linear-gradient(135deg, #d4af37, #b8962e); 
                    color: #000; border: none; padding: 14px 40px; margin-top: 25px; 
                    border-radius: 50px; cursor: pointer; font-weight: 700; transition: 0.3s; 
                    text-transform: uppercase; letter-spacing: 1px;">
                CLOSE
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // ✅ DIRECT EVENT LISTENER (No more window.closeModal needed)
    const closeBtn = modal.querySelector("#close-modal-btn");
    closeBtn.addEventListener('click', () => {
        modal.remove(); // Direct-ah antha modal node-aye remove pannidum
    });

    // Background click panna close aaga
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

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
                    <input type="text" id="booking-name" placeholder="Your Name" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit; box-sizing: border-box;">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">WhatsApp Number *</label>
                    <input type="tel" id="booking-phone" placeholder="+91 XXXXXXXXXX" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit; box-sizing: border-box;">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">Number of Persons *</label>
                        <input type="number" id="booking-persons" min="1" value="1" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit; box-sizing: border-box;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #d4af37;">Number of Days *</label>
                        <input type="number" id="booking-days" min="1" value="3" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #333; background: #0c0c0c; color: #fff; outline: none; font-family: inherit; box-sizing: border-box;">
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
    document.getElementById("bookingCalcForm").addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById("booking-name").value;
        const phone = document.getElementById("booking-phone").value;
        const persons = document.getElementById("booking-persons").value;
        const days = document.getElementById("booking-days").value;
        
        const msg = `Hi Fundun Holidays, I'm ${name}. I want to book a package for ${location} for ${persons} persons for ${days} days. My WhatsApp: ${phone}`;
        sendToWhatsApp(msg);
    });
    
    window.closeBookingModal = () => {
        const bookingModal = document.getElementById("bookingModal");
        if(bookingModal && bookingModal.parentNode) {
            document.body.removeChild(bookingModal);
        }
    };
}

function bookViaWhatsApp(state) {
    const msg = `Hi Fundun Holidays, I want to book a package for ${state}.`;
    const phone = "919585575354";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}

function bookViaInstagram(state) {
    const msg = `Hi Fundun Holidays, I want to book a package for ${state}.`;
    const url = `https://www.instagram.com/fundun_holidays`;
    window.open(url, "_blank");
}

function sendToWhatsApp(message) {
    const phone = "919585575354";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function whatsapp(message){
    const phone = "919585575354";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent("Hi Fundun Holidays, " + message)}`;
    window.open(url, "_blank");
}

function toggleAbout(show){
    document.getElementById("aboutPage").style.display = show ? "block" : "none";
}

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function openMail(){
    window.location.href = "mailto:dineshcse142@gmail.com";
}

// Form submit handler
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("heroCalcForm");
    if (form) {
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const name = document.getElementById("cName").value;
            const phone = document.getElementById("cPhone").value;
            const loc = document.getElementById("cLoc").value;
            const seats = document.getElementById("cSeats").value;
            const days = document.getElementById("cDays").value;
            const msg = `Hi Fundun Holidays, I'm ${name}. I want a package for ${loc} for ${seats} persons for ${days} days. My number is ${phone}.`;
            whatsapp(msg);
        });
    }

    // Make images lazy and hint the browser for GPU-accelerated transforms
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        try {
            img.style.willChange = 'transform, opacity';
            img.style.backfaceVisibility = 'hidden';
            img.style.transform = 'translateZ(0)';
        } catch (e) {}
    });
});
/**************** HERO LEFT BOTTOM ROTATING REVIEWS ****************/

const heroReviews = [
  { name: "Arun", stars: 5, text: "Amazing trip planning and great support throughout our journey!" },
  { name: "Priya", stars: 5, text: "Best travel experience ever. Hotels and transport were perfect." },
  { name: "Karthik", stars: 4, text: "Very smooth and well-organized tour. Totally worth it!" },
  { name: "Meena", stars: 5, text: "Friendly team and excellent service. Highly recommended!" },
  { name: "Suresh", stars: 4, text: "Wonderful destinations and great coordination." },
  { name: "Divya", stars: 5, text: "Loved the entire trip. Everything was taken care of!" },
  { name: "Vignesh", stars: 5, text: "Professional service and very polite staff. Superb experience." },
  { name: "Anitha", stars: 4, text: "Good packages and nice hotels. Will book again." },
  { name: "Ravi", stars: 5, text: "Memorable journey with my family. Thank you Fundun Holidays!" },
  { name: "Lakshmi", stars: 5, text: "Perfect planning and quick response. Totally satisfied!" }
];

const reviewSlider = document.getElementById("reviewSlider");
let reviewIndex = 0;

function renderSingleReview() {
  if (!reviewSlider) return;

  reviewSlider.innerHTML = "";
  const review = heroReviews[reviewIndex];

  const card = document.createElement("div");
  card.className = "review-card";
  card.innerHTML = `
    <div class="review-header">
      <div class="review-avatar">${review.name.charAt(0)}</div>
      <div>
        <div class="review-name">${review.name}</div>
        <div class="review-stars">${"★".repeat(review.stars)}</div>
      </div>
    </div>
    <div class="review-text">${review.text}</div>
  `;

  reviewSlider.appendChild(card);
  reviewIndex = (reviewIndex + 1) % heroReviews.length;
}

renderSingleReview();
setInterval(renderSingleReview, 3500);
/* ===== Image Popup Script ===== */
const popup = document.createElement("div");
popup.classList.add("image-popup");
popup.innerHTML = `
  <span class="popup-close">&times;</span>
  <img id="popupImg">
`;
document.body.appendChild(popup);

const popupImg = document.getElementById("popupImg");
const closeBtn = popup.querySelector(".popup-close");

/* Open popup on slide image click */
document.querySelectorAll(".slide img").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.classList.add("active");
  });
});

/* Close popup */
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if(e.target === popup){
    popup.classList.remove("active");
  }
});
// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){   // scroll threshold
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
document.querySelectorAll('.s-item').forEach(item => {
  item.addEventListener('click', () => {
    const serviceName = item.querySelector('h4').textContent;

    // Show in details box first for psychological feedback
    document.getElementById('service-title').textContent = serviceName;
    document.getElementById('service-desc').textContent = `Click to explore destinations for ${serviceName}.`;

    // Map services to states/destination pages
    const serviceMap = {
      "School & College Package": "Tamil Nadu",
      "Corporate Tours": "karnataka",
      "Family Tours": "kerala",
      "Custom Planning": "Tamil Nadu",
      "Honeymoon Tours": "kerala"
    };

    // Open destination overlay page like Navbar
    openDestinationPage(serviceMap[serviceName]);
  });
});
// HERO IMAGE SLIDER
const heroImages = [
  'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239861/POSTER_bvgobj.png', 
  'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769595950/hero_image_2_dxwrxu.png', 
  'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769620540/img_post_rbz4dd.png',
];

const carouselContainer = document.querySelector('.carousel-container');

// Create slide divs dynamically
heroImages.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    if(index === 0) slide.classList.add('active'); // first image active
    slide.style.backgroundImage = `url('${img}')`;
    carouselContainer.appendChild(slide);
});

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

// Function to show next slide
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
// 1. Mouse Tracking for Body Glow (Spotlight Effect)
document.addEventListener('mousemove', e => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});

function openServiceBooking(serviceName) {
    // Service name-aa location field-la pass pannrom
    showBookingOptions(serviceName);
}
/************ VIEW DETAILS – ONLY VIEW BUTTON HOVER + CLICK ************/

function enableViewDetailsOnlyOnButton(state) {

    document.querySelectorAll('.safari-card').forEach(card => {

        const viewBtn = card.querySelector('.btn-white'); // VIEW PLACES
        if (!viewBtn) return;

        let hoverTimer;

        const city = card.querySelector('h1')?.textContent;
        if (!city) return;

        const cityName = city.charAt(0) + city.slice(1).toLowerCase();

        const openDetails = (e) => {
            e.stopPropagation();
            viewCityDetails(state, cityName);
        };

        // ✅ CLICK
        viewBtn.addEventListener('click', openDetails);

        // ✅ HOVER (Desktop only)
        viewBtn.addEventListener('mouseenter', (e) => {
            if ('ontouchstart' in window) return; // mobile ignore

            hoverTimer = setTimeout(() => {
                openDetails(e);
            }, 300); // smooth delay
        });

        viewBtn.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
        });

        // ❌ Stop bubbling to card
        viewBtn.addEventListener('mousedown', e => e.stopPropagation());
    });
}

/* ===== HOOK INTO DESTINATION PAGE ===== */
const _originalOpenDestinationPage = openDestinationPage;

openDestinationPage = function(state) {
    _originalOpenDestinationPage(state);

    setTimeout(() => {
        enableViewDetailsOnlyOnButton(state);
    }, 200);
};
// MOBILE MENU TOGGLE LOGIC
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Hamburger icon-ah close icon-ah mathurathuku
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Menu link click panna menu close aaganam
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});
