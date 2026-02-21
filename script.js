// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🌴 FUNDUN HOLIDAYS - COMPLETE SCRIPT (ALL FEATURES)
//  ✅ Gallery with hover pause + click lightbox
//  ✅ WhatsApp booking form
//  ✅ Destination pages
//  ✅ All errors fixed
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📋 SMOOTH SCROLL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔧 ABOUT PAGE TOGGLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function toggleAbout(show) {
    const aboutPage = document.getElementById("aboutPage");
    if (!aboutPage) return;
    if (show) {
        aboutPage.style.display = "block";
        aboutPage.classList.add("active");
        document.body.classList.add("overlay-open");
        setTimeout(() => { aboutPage.style.opacity = "1"; }, 10);
    } else {
        aboutPage.style.opacity = "0";
        aboutPage.classList.remove("active");
        document.body.classList.remove("overlay-open");
        setTimeout(() => { aboutPage.style.display = "none"; }, 300);
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  💖 WISHLIST
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function toggleWishlist(element) {
    const icon = element.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        element.style.background = 'rgba(212, 175, 55, 0.2)';
        element.style.borderColor = '#d4af37';
        showQuickNotification('Added to wishlist! ❤️');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        element.style.background = 'rgba(0, 0, 0, 0.6)';
        element.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        showQuickNotification('Removed from wishlist');
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🗺️ DESTINATION DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
                description: "Kanyakumari is the southernmost tip of India, famous for its stunning sunrise and sunset views.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850491/Kannayakumari_dsszcl.png",
                places: ["Thiruvalluvar Statue", "Vivekananda Memorial Rock", "Sunset View Point", "Beach", "Padmanabhapuram Palace", "Papanasam Temple", "Manimuthar Dam", "Kuttralam"]
            },
            "Chennai": {
                description: "Chennai, the capital of Tamil Nadu, is a vibrant city with rich history, temples, beaches, and modern attractions.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850626/chennai_tyxhra.png",
                places: ["Marina Beach", "Mahabalipuram", "Santhome Church", "Birla Planetorium", "Elliotts Beach", "Kapaleeshwar Temple", "VGP Amusement Park"]
            },
            "Pondicherry": {
                description: "Pondicherry, a former French colony, offers a blend of Indian and French cultures with beautiful beaches.",
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
                description: "Cochin, also known as Kochi, is a vibrant city blending history, culture, and modernity.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/cochi_m11tfv.jpg",
                places: ["Chotanikara Bhagavathy Temple", "Athi Rampadi Water Falls", "Cherai Beach", "Mattancherry Palace", "Hill Palace Museum", "Wonderla", "Bolgatti Palace", "Lulu Mall", "Vypen Beach"]
            },
            "Munnar": {
                description: "Munnar is a picturesque hill station famous for its sprawling tea plantations and misty mountains.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850359/munnar_bjo4pq.png",
                places: ["Mattupetty Dam", "Tea Museum", "Echo Point", "Top Station", "Kundala Lake", "Photo Point", "Rose Garden"]
            },
            "Wayanad": {
                description: "Wayanad is a district known for its wildlife, waterfalls, and ancient caves.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850416/wayanadu_gpawkt.png",
                places: ["Edakkal Caves", "Chembra Peak", "Lakkidi View Point", "Soochippara Water Falls", "Meenmutty Falls", "Banasurasagar Dam"]
            },
            "Alleppey": {
                description: "Alleppey, famous for its backwaters, is a serene destination for houseboat cruises.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850439/alleppey_eg4fs5.png",
                places: ["Backwaters", "Alappuzha Beach", "Light House", "St. Mary Forane Church", "Vembanad Lake"]
            },
            "Vagamon": {
                description: "Vagamon is a tranquil hill station with meadows, pine forests, and panoramic views.",
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
                description: "Thekkady is home to Periyar National Park, offering wildlife safaris and boat rides.",
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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📋 FORM DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let formData = { name: '', phone: '', persons: 1, days: 3, location: '' };
let hasDataBeenSent = false;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📱 WHATSAPP SEND
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function sendToWhatsApp() {
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    if (!name || !phone) return false;
    if (hasDataBeenSent) return false;

    const msg = `🔔 NEW BOOKING ENQUIRY - Fundun Holidays

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📍 Location: ${formData.location}
👥 Persons: ${formData.persons}
📅 Days: ${formData.days}

⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    const whatsappURL = `https://wa.me/917558138968?text=${encodeURIComponent(msg)}`;
    const w = window.open(whatsappURL, "_blank");

    if (w) {
        hasDataBeenSent = true;
        return true;
    } else {
        alert('Please allow popups!');
        return false;
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🖼️ GALLERY DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const galleryImages = [
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239861/POSTER_bvgobj.png", title: "Fundun Holidays", caption: "Explore Amazing Destinations" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769595950/hero_image_2_dxwrxu.png", title: "Beautiful Kerala", caption: "God's Own Country" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769620540/img_post_rbz4dd.png", title: "Tamil Nadu", caption: "Rich Culture & Heritage" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850347/Ooty_sm1awg.png", title: "Ooty", caption: "Queen of Hill Stations" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850359/munnar_bjo4pq.png", title: "Munnar", caption: "Tea Garden Paradise" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850389/kodaikanal_rrm80l.png", title: "Kodaikanal", caption: "Princess of Hill Stations" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850439/alleppey_eg4fs5.png", title: "Alleppey", caption: "Venice of the East" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769851229/mysore_aatmtu.png", title: "Mysore", caption: "City of Palaces" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769942817/coorg_hc1qce.jpg", title: "Coorg", caption: "Scotland of India" },
    { src: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769629047/ramoj_lhqfct.jpg", title: "Ramoji Film City", caption: "Asia's Largest Film Studio" }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎠 GALLERY STATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let galleryCurrentSlide = 0;
let galleryAutoSlideTimer = null;
let galleryIsPaused = false;
let lightboxCurrentIndex = 0;
let touchStartX = 0;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🏗️ BUILD GALLERY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function buildGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = `
        <div id="galleryWrapper" style="
            position: relative; width: 100%; overflow: hidden;
            border-radius: 20px; cursor: pointer; user-select: none;
        ">
            <!-- Slides -->
            <div id="galleryTrack" style="display: flex; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);">
                ${galleryImages.map((img, i) => `
                    <div class="gallery-slide" data-index="${i}" style="min-width:100%; position:relative; overflow:hidden;">
                        <img src="${img.src}" alt="${img.title}" style="
                            width:100%; height:500px; object-fit:cover; display:block;
                            transition:transform 0.4s ease; pointer-events:none;
                        " onerror="this.src='https://via.placeholder.com/800x500/1a1a1a/d4af37?text=${encodeURIComponent(img.title)}'">

                        <div class="slide-overlay" style="
                            position:absolute; inset:0;
                            background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 50%);
                            opacity:0; transition:opacity 0.3s ease;
                            display:flex; align-items:flex-end; padding:30px;
                        ">
                            <div>
                                <h3 style="color:#d4af37; font-size:24px; margin:0; font-family:'Poppins',sans-serif; font-weight:700;">${img.title}</h3>
                                <p style="color:#fff; font-size:14px; margin:5px 0 0; opacity:0.8;">${img.caption}</p>
                                <span style="display:inline-block; margin-top:10px; padding:8px 20px;
                                    background:rgba(212,175,55,0.3); border:1px solid #d4af37;
                                    border-radius:25px; color:#d4af37; font-size:12px; font-weight:600;">
                                    <i class="fas fa-expand"></i> CLICK TO VIEW
                                </span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Prev Arrow -->
            <button onclick="galleryPrev(event)" style="
                position:absolute; left:15px; top:50%; transform:translateY(-50%);
                background:rgba(0,0,0,0.7); border:2px solid rgba(212,175,55,0.5);
                color:#d4af37; width:50px; height:50px; border-radius:50%;
                font-size:18px; cursor:pointer; z-index:10;
                display:flex; align-items:center; justify-content:center;
                transition:all 0.3s ease; backdrop-filter:blur(5px);
            " onmouseover="this.style.background='rgba(212,175,55,0.3)'"
               onmouseout="this.style.background='rgba(0,0,0,0.7)'">
                <i class="fas fa-chevron-left"></i>
            </button>

            <!-- Next Arrow -->
            <button onclick="galleryNext(event)" style="
                position:absolute; right:15px; top:50%; transform:translateY(-50%);
                background:rgba(0,0,0,0.7); border:2px solid rgba(212,175,55,0.5);
                color:#d4af37; width:50px; height:50px; border-radius:50%;
                font-size:18px; cursor:pointer; z-index:10;
                display:flex; align-items:center; justify-content:center;
                transition:all 0.3s ease; backdrop-filter:blur(5px);
            " onmouseover="this.style.background='rgba(212,175,55,0.3)'"
               onmouseout="this.style.background='rgba(0,0,0,0.7)'">
                <i class="fas fa-chevron-right"></i>
            </button>

            <!-- Dots -->
            <div id="galleryDots" style="
                position:absolute; bottom:15px; left:50%; transform:translateX(-50%);
                display:flex; gap:8px; z-index:10;
            ">
                ${galleryImages.map((_, i) => `
                    <button onclick="galleryGoTo(${i})" id="dot-${i}" style="
                        width:${i===0?'24px':'8px'}; height:8px; border-radius:4px;
                        background:${i===0?'#d4af37':'rgba(255,255,255,0.5)'};
                        border:none; cursor:pointer; transition:all 0.3s ease; padding:0;
                    "></button>
                `).join('')}
            </div>

            <!-- Counter -->
            <div id="galleryCounter" style="
                position:absolute; top:15px; left:15px;
                background:rgba(0,0,0,0.7); border:1px solid rgba(212,175,55,0.3);
                color:#fff; padding:6px 14px; border-radius:20px;
                font-size:12px; font-weight:600; z-index:10;
            ">1 / ${galleryImages.length}</div>

            <!-- Pause indicator -->
            <div id="galleryPauseIndicator" style="
                position:absolute; top:15px; right:15px;
                background:rgba(0,0,0,0.7); border:1px solid rgba(212,175,55,0.5);
                color:#d4af37; padding:6px 14px; border-radius:20px;
                font-size:12px; font-weight:600; opacity:0;
                transition:opacity 0.3s ease; pointer-events:none; z-index:10;
            "><i class="fas fa-pause"></i> PAUSED</div>
        </div>
    `;

    setupGalleryEvents();
    startGalleryAutoSlide();
    console.log('✅ Gallery built:', galleryImages.length, 'images');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ⚙️ GALLERY EVENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function setupGalleryEvents() {
    const wrapper = document.getElementById('galleryWrapper');
    if (!wrapper) return;

    // Hover → PAUSE
    wrapper.addEventListener('mouseenter', () => {
        galleryIsPaused = true;
        clearInterval(galleryAutoSlideTimer);
        const ind = document.getElementById('galleryPauseIndicator');
        if (ind) ind.style.opacity = '1';
        // Show overlay on current slide
        const slides = wrapper.querySelectorAll('.gallery-slide');
        if (slides[galleryCurrentSlide]) {
            const ov = slides[galleryCurrentSlide].querySelector('.slide-overlay');
            if (ov) ov.style.opacity = '1';
        }
    });

    wrapper.addEventListener('mouseleave', () => {
        galleryIsPaused = false;
        startGalleryAutoSlide();
        const ind = document.getElementById('galleryPauseIndicator');
        if (ind) ind.style.opacity = '0';
        wrapper.querySelectorAll('.slide-overlay').forEach(ov => ov.style.opacity = '0');
    });

    // Each slide: click → lightbox, hover → overlay
    wrapper.querySelectorAll('.gallery-slide').forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            openGalleryLightbox(index);
        });

        slide.addEventListener('mouseenter', () => {
            const ov = slide.querySelector('.slide-overlay');
            if (ov) ov.style.opacity = '1';
        });

        slide.addEventListener('mouseleave', () => {
            const ov = slide.querySelector('.slide-overlay');
            if (ov) ov.style.opacity = '0';
        });
    });

    // Touch swipe
    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        galleryIsPaused = true;
        clearInterval(galleryAutoSlideTimer);
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? galleryNextSlide() : galleryPrevSlide();
        }
        galleryIsPaused = false;
        startGalleryAutoSlide();
    }, { passive: true });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ▶️ GALLERY CONTROLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function startGalleryAutoSlide() {
    clearInterval(galleryAutoSlideTimer);
    galleryAutoSlideTimer = setInterval(() => {
        if (!galleryIsPaused) galleryNextSlide();
    }, 4000);
}

function galleryGoTo(index) {
    galleryCurrentSlide = index;
    const track = document.getElementById('galleryTrack');
    if (track) track.style.transform = `translateX(-${index * 100}%)`;
    // Update dots
    galleryImages.forEach((_, i) => {
        const dot = document.getElementById(`dot-${i}`);
        if (dot) {
            dot.style.width = i === index ? '24px' : '8px';
            dot.style.background = i === index ? '#d4af37' : 'rgba(255,255,255,0.5)';
        }
    });
    // Update counter
    const counter = document.getElementById('galleryCounter');
    if (counter) counter.textContent = `${index + 1} / ${galleryImages.length}`;
}

function galleryNextSlide() {
    galleryCurrentSlide = (galleryCurrentSlide + 1) % galleryImages.length;
    galleryGoTo(galleryCurrentSlide);
}

function galleryPrevSlide() {
    galleryCurrentSlide = (galleryCurrentSlide - 1 + galleryImages.length) % galleryImages.length;
    galleryGoTo(galleryCurrentSlide);
}

function galleryNext(e) { if (e) e.stopPropagation(); galleryNextSlide(); }
function galleryPrev(e) { if (e) e.stopPropagation(); galleryPrevSlide(); }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔲 LIGHTBOX OPEN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openGalleryLightbox(index) {
    lightboxCurrentIndex = index;
    const existing = document.getElementById('galleryLightbox');
    if (existing) existing.remove();

    clearInterval(galleryAutoSlideTimer);

    const lightbox = document.createElement('div');
    lightbox.id = 'galleryLightbox';
    lightbox.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.97); z-index:99999;
        display:flex; align-items:center; justify-content:center;
        opacity:0; transition:opacity 0.3s ease; backdrop-filter:blur(15px);
    `;

    lightbox.innerHTML = `
        <!-- Close Button - TOP RIGHT -->
        <button id="lightboxClose" style="
            position:fixed; top:20px; right:20px;
            background:rgba(212,175,55,0.2); border:2px solid #d4af37;
            color:#d4af37; width:55px; height:55px; border-radius:50%;
            font-size:22px; cursor:pointer; z-index:100001;
            display:flex; align-items:center; justify-content:center;
            transition:all 0.3s ease; backdrop-filter:blur(5px);
        " onmouseover="this.style.background='rgba(212,175,55,0.5)'; this.style.transform='scale(1.1)';"
           onmouseout="this.style.background='rgba(212,175,55,0.2)'; this.style.transform='scale(1)';">
            <i class="fas fa-times"></i>
        </button>

        <!-- Counter - TOP CENTER -->
        <div id="lightboxCounter" style="
            position:fixed; top:25px; left:50%; transform:translateX(-50%);
            color:#fff; font-size:14px; font-weight:600;
            background:rgba(0,0,0,0.7); padding:8px 20px; border-radius:25px;
            border:1px solid rgba(212,175,55,0.4); z-index:100001;
            font-family:'Poppins',sans-serif;
        ">${index + 1} / ${galleryImages.length}</div>

        <!-- Main Image -->
        <div style="position:relative; max-width:90vw; max-height:85vh; display:flex; align-items:center; justify-content:center;">
            <img id="lightboxImage" src="${galleryImages[index].src}" alt="${galleryImages[index].title}" style="
                max-width:90vw; max-height:80vh; object-fit:contain;
                border-radius:12px; box-shadow:0 30px 80px rgba(0,0,0,1);
                transition:opacity 0.3s ease; user-select:none;
            " onerror="this.src='https://via.placeholder.com/800x500/1a1a1a/d4af37?text=Image'">
        </div>

        <!-- Caption - ABOVE THUMBS -->
        <div id="lightboxCaption" style="
            position:fixed; bottom:90px; left:50%; transform:translateX(-50%);
            text-align:center; z-index:100001; white-space:nowrap;
        ">
            <h3 style="color:#d4af37; font-size:20px; margin:0; font-family:'Poppins',sans-serif; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,1);">
                ${galleryImages[index].title}
            </h3>
            <p style="color:rgba(255,255,255,0.8); font-size:13px; margin:4px 0 0; text-shadow:0 2px 10px rgba(0,0,0,1);">
                ${galleryImages[index].caption}
            </p>
        </div>

        <!-- Prev Button - LEFT MIDDLE -->
        <button id="lightboxPrev" style="
            position:fixed; left:15px; top:50%; transform:translateY(-50%);
            background:rgba(0,0,0,0.8); border:2px solid rgba(212,175,55,0.6);
            color:#d4af37; width:55px; height:55px; border-radius:50%;
            font-size:20px; cursor:pointer; z-index:100001;
            display:flex; align-items:center; justify-content:center;
            transition:all 0.3s ease;
        " onmouseover="this.style.background='rgba(212,175,55,0.3)';"
           onmouseout="this.style.background='rgba(0,0,0,0.8)';">
            <i class="fas fa-chevron-left"></i>
        </button>

        <!-- Next Button - RIGHT MIDDLE -->
        <button id="lightboxNext" style="
            position:fixed; right:15px; top:50%; transform:translateY(-50%);
            background:rgba(0,0,0,0.8); border:2px solid rgba(212,175,55,0.6);
            color:#d4af37; width:55px; height:55px; border-radius:50%;
            font-size:20px; cursor:pointer; z-index:100001;
            display:flex; align-items:center; justify-content:center;
            transition:all 0.3s ease;
        " onmouseover="this.style.background='rgba(212,175,55,0.3)';"
           onmouseout="this.style.background='rgba(0,0,0,0.8)';">
            <i class="fas fa-chevron-right"></i>
        </button>

        <!-- Thumbnail Strip - BOTTOM -->
        <div id="lightboxThumbs" style="
            position:fixed; bottom:15px; left:50%; transform:translateX(-50%);
            display:flex; gap:8px; z-index:100001; padding:8px 12px;
            background:rgba(0,0,0,0.8); border-radius:15px;
            border:1px solid rgba(212,175,55,0.2);
            max-width:90vw; overflow-x:auto;
        ">
            ${galleryImages.map((img, i) => `
                <img src="${img.src}" alt="${img.title}" data-index="${i}"
                    onclick="lightboxGoTo(${i})"
                    style="
                        width:50px; height:38px; object-fit:cover; border-radius:6px;
                        cursor:pointer; flex-shrink:0; transition:all 0.3s ease;
                        border:2px solid ${i === index ? '#d4af37' : 'transparent'};
                        opacity:${i === index ? '1' : '0.5'};
                    "
                    onmouseover="this.style.opacity='0.9'; this.style.borderColor='rgba(212,175,55,0.7)';"
                    onmouseout="if(lightboxCurrentIndex!==${i}){this.style.opacity='0.5'; this.style.borderColor='transparent';}"
                    onerror="this.style.display='none'">
            `).join('')}
        </div>
    `;

    document.body.appendChild(lightbox);
    setTimeout(() => { lightbox.style.opacity = '1'; }, 10);

    // Events
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); lightboxGoTo(lightboxCurrentIndex - 1); });
    document.getElementById('lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); lightboxGoTo(lightboxCurrentIndex + 1); });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', handleLightboxKeyboard);

    // Touch swipe inside lightbox
    let lbTouchStart = 0;
    lightbox.addEventListener('touchstart', (e) => { lbTouchStart = e.changedTouches[0].screenX; }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        const diff = lbTouchStart - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) diff > 0 ? lightboxGoTo(lightboxCurrentIndex + 1) : lightboxGoTo(lightboxCurrentIndex - 1);
    }, { passive: true });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔄 LIGHTBOX NAVIGATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function lightboxGoTo(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    lightboxCurrentIndex = index;
    const img = galleryImages[index];

    // Fade image
    const lbImg = document.getElementById('lightboxImage');
    if (lbImg) {
        lbImg.style.opacity = '0';
        setTimeout(() => { lbImg.src = img.src; lbImg.style.opacity = '1'; }, 200);
    }

    // Update caption
    const caption = document.getElementById('lightboxCaption');
    if (caption) {
        caption.innerHTML = `
            <h3 style="color:#d4af37; font-size:20px; margin:0; font-family:'Poppins',sans-serif; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,1);">${img.title}</h3>
            <p style="color:rgba(255,255,255,0.8); font-size:13px; margin:4px 0 0; text-shadow:0 2px 10px rgba(0,0,0,1);">${img.caption}</p>
        `;
    }

    // Update counter
    const counter = document.getElementById('lightboxCounter');
    if (counter) counter.textContent = `${index + 1} / ${galleryImages.length}`;

    // Update thumbnails
    document.querySelectorAll('#lightboxThumbs img').forEach((thumb, i) => {
        if (i === index) {
            thumb.style.border = '2px solid #d4af37';
            thumb.style.opacity = '1';
            thumb.scrollIntoView({ block: 'nearest', inline: 'center' });
        } else {
            thumb.style.border = '2px solid transparent';
            thumb.style.opacity = '0.5';
        }
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ⌨️ KEYBOARD + CLOSE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function handleLightboxKeyboard(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') lightboxGoTo(lightboxCurrentIndex + 1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') lightboxGoTo(lightboxCurrentIndex - 1);
    if (e.key === 'Escape') closeLightbox();
}

function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => lightbox.remove(), 300);
    }
    document.removeEventListener('keydown', handleLightboxKeyboard);
    if (!galleryIsPaused) startGalleryAutoSlide();
}

// ──────────────────────────────────────────────────────────
//  🔎 Standalone lightbox for static images (gallery-viewport)
//  Allows clicking fallback/static images to open a large view
// ──────────────────────────────────────────────────────────
function openStandaloneLightbox(src, title = '', caption = '') {
    const existing = document.getElementById('standaloneLightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.id = 'standaloneLightbox';
    lb.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.95);
        display:flex; align-items:center; justify-content:center;
        z-index:100000; padding:24px;
    `;

    lb.innerHTML = `
        <button id="standaloneClose" style="
            position:fixed; top:20px; right:20px; background:rgba(212,175,55,0.2);
            border:2px solid #d4af37; color:#d4af37; width:55px; height:55px; border-radius:50%;
            font-size:22px; cursor:pointer; z-index:100001; display:flex; align-items:center; justify-content:center;
        "><i class="fas fa-times"></i></button>

        <div style="max-width:95vw; max-height:90vh; display:flex; align-items:center; justify-content:center;">
            <img src="${src}" alt="${title}" style="max-width:95vw; max-height:88vh; object-fit:contain; border-radius:12px; box-shadow:0 30px 80px rgba(0,0,0,1);"/>
        </div>

        ${title ? `<div style="position:fixed; bottom:20px; left:50%; transform:translateX(-50%); color:#fff; z-index:100001; font-weight:600;">${title}${caption ? ` — <span style="opacity:0.85">${caption}</span>` : ''}</div>` : ''}
    `;

    document.body.appendChild(lb);

    // events
    document.getElementById('standaloneClose').addEventListener('click', closeStandaloneLightbox);
    lb.addEventListener('click', (e) => { if (e.target === lb) closeStandaloneLightbox(); });

    function onKey(e) {
        if (e.key === 'Escape') {
            closeStandaloneLightbox();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
}

function closeStandaloneLightbox() {
    const lb = document.getElementById('standaloneLightbox');
    if (lb) lb.remove();
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🗺️ DESTINATION PAGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openDestinationPage(state) {
    const data = destinations[state];
    if (!data) return;
    const detailPage = document.getElementById("detailPage");
    const placesGrid = document.getElementById("places-grid");
    if (!detailPage || !placesGrid) return;

    document.getElementById("detail-title").innerHTML = data.title;
    document.getElementById("detail-subtitle").innerText = data.subtitle;
    placesGrid.innerHTML = "";
    placesGrid.style.cssText = `display:grid; grid-template-columns:repeat(auto-fill,minmax(350px,1fr)); gap:30px; padding:40px 20px; max-width:1400px; margin:0 auto;`;

    Object.entries(data.places).forEach(([city, cityData]) => {
        const card = document.createElement("div");
        card.style.cssText = `background:linear-gradient(135deg,rgba(20,20,20,0.95),rgba(10,10,10,0.95)); border:1px solid rgba(212,175,55,0.3); border-radius:25px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.5); transition:all 0.3s ease;`;

        const img = document.createElement('div');
        img.style.cssText = `background-image:url('${cityData.image}'); background-size:cover; background-position:center; height:250px; position:relative;`;
        const imgOverlay = document.createElement('div');
        imgOverlay.style.cssText = `position:absolute; inset:0; background:linear-gradient(to bottom,transparent,rgba(0,0,0,0.7));`;
        img.appendChild(imgOverlay);

        const content = document.createElement('div');
        content.style.padding = '30px';
        content.innerHTML = `
            <h3 style="font-family:'Poppins',sans-serif; font-size:24px; font-weight:700; color:#d4af37; margin-bottom:15px;">${city}</h3>
            <p style="font-size:14px; line-height:1.7; color:#ccc; margin-bottom:20px; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${cityData.description}</p>
            <div style="display:flex; gap:10px;">
                <button onclick="showBookingOptions('${state}','${city}')" style="flex:1; background:linear-gradient(135deg,#d4af37,#b8962e); color:#000; border:none; padding:12px 20px; border-radius:25px; font-size:13px; font-weight:700; cursor:pointer; text-transform:uppercase;">
                    <i class="fas fa-calendar-check"></i> BOOK NOW
                </button>
                <button onclick="viewCityDetails('${state}','${city}')" style="flex:1; background:transparent; border:2px solid #d4af37; color:#d4af37; padding:12px 20px; border-radius:25px; font-size:13px; font-weight:700; cursor:pointer; text-transform:uppercase;">
                    <i class="fas fa-map-marked-alt"></i> VIEW
                </button>
            </div>
            <p style="font-size:12px; color:#666; margin-top:15px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
                <i class="fas fa-map-marker-alt" style="color:#d4af37; margin-right:6px;"></i>
                ${cityData.places.length} Places to Visit
            </p>
        `;

        card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-10px)'; card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.8)'; });
        card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0)'; card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'; });

        card.appendChild(img);
        card.appendChild(content);
        placesGrid.appendChild(card);
    });

    detailPage.style.display = "block";
    detailPage.classList.add("active");
    document.body.classList.add("overlay-open");
    setTimeout(() => { detailPage.style.opacity = "1"; }, 10);
}

function closeDetailPage() {
    const detailPage = document.getElementById("detailPage");
    if (!detailPage) return;
    const loc = document.getElementById("detail-title");
    let currentLocation = loc ? loc.textContent.replace(" Destinations", "").trim() : "General Enquiry";

    detailPage.style.opacity = "0";
    detailPage.classList.remove("active");
    document.body.classList.remove("overlay-open");
    setTimeout(() => {
        detailPage.style.display = "none";
        showBookingOptions(currentLocation);
    }, 300);
}

function viewCityDetails(state, city) {
    const places = destinations[state]?.places[city]?.places;
    if (!places) return;
    const modal = document.createElement("div");
    modal.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); display:flex; justify-content:center; align-items:center; z-index:10001;`;
    modal.innerHTML = `
        <div style="background:rgba(20,20,20,0.98); border:2px solid rgba(212,175,55,0.4); padding:40px; border-radius:25px; max-width:550px; width:90%; max-height:85%; overflow-y:auto;">
            <h3 style="color:#d4af37; text-align:center; font-size:28px; margin-bottom:20px; font-family:'Poppins',sans-serif;">${city.toUpperCase()}</h3>
            <ul style="list-style:none; padding:0; color:#fff;">
                ${places.map((p, i) => `
                    <li style="margin:10px 0; padding:14px; background:rgba(212,175,55,0.05); border-radius:12px; display:flex; align-items:center;">
                        <span style="display:inline-flex; width:28px; height:28px; background:#d4af37; border-radius:50%; color:#000; font-weight:700; align-items:center; justify-content:center; margin-right:14px; font-size:12px;">${i+1}</span>
                        ${p}
                    </li>
                `).join('')}
            </ul>
            <button onclick="this.closest('div').parentElement.remove()" style="background:#d4af37; color:#000; border:none; padding:14px 50px; margin-top:20px; border-radius:50px; cursor:pointer; font-weight:700; display:block; margin-left:auto; margin-right:auto; font-family:'Poppins',sans-serif; font-size:15px;">
                <i class="fas fa-times"></i> CLOSE
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📝 BOOKING FORM
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function showBookingOptions(state, city = '') {
    const location = city ? `${city}, ${state}` : state;
    formData.location = location;
    hasDataBeenSent = false;

    const modal = document.createElement("div");
    modal.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); display:flex; justify-content:center; align-items:center; z-index:10002; overflow-y:auto; backdrop-filter:blur(10px);`;
    modal.id = "bookingModal";

    modal.innerHTML = `
        <div id="bookingModalContent" style="background:linear-gradient(135deg,rgba(20,20,20,0.95),rgba(5,5,5,0.95)); border:2px solid rgba(212,175,55,0.3); padding:45px; border-radius:25px; max-width:520px; color:#fff; margin:20px; width:90%;">
            <div style="text-align:center; margin-bottom:25px;">
                <i class="fas fa-calculator" style="font-size:48px; color:#d4af37;"></i>
                <h2 style="color:#d4af37; margin:10px 0; font-size:28px; font-family:'Poppins',sans-serif; font-weight:800;">PACKAGE CALCULATOR</h2>
                <p style="color:#aaa; margin:5px 0; font-size:15px;"><i class="fas fa-map-marker-alt" style="color:#d4af37;"></i> ${location}</p>
            </div>
            <form id="bookingCalcForm" style="display:flex; flex-direction:column; gap:18px;">
                <div>
                    <label style="display:block; margin-bottom:10px; font-size:14px; color:#d4af37; font-weight:600;"><i class="fas fa-user"></i> Full Name *</label>
                    <input type="text" id="booking-name" placeholder="Enter your name" required style="width:100%; padding:14px; border-radius:12px; border:1px solid #333; background:#0c0c0c; color:#fff; outline:none; font-family:inherit; box-sizing:border-box; font-size:15px;"
                        onfocus="this.style.borderColor='#d4af37';" onblur="this.style.borderColor='#333';">
                </div>
                <div>
                    <label style="display:block; margin-bottom:10px; font-size:14px; color:#d4af37; font-weight:600;"><i class="fab fa-whatsapp"></i> WhatsApp Number *</label>
                    <input type="tel" id="booking-phone" placeholder="+91 XXXXXXXXXX" required style="width:100%; padding:14px; border-radius:12px; border:1px solid #333; background:#0c0c0c; color:#fff; outline:none; font-family:inherit; box-sizing:border-box; font-size:15px;"
                        onfocus="this.style.borderColor='#d4af37';" onblur="this.style.borderColor='#333';">
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:18px;">
                    <div>
                        <label style="display:block; margin-bottom:10px; font-size:14px; color:#d4af37; font-weight:600;"><i class="fas fa-users"></i> Persons *</label>
                        <input type="number" id="booking-persons" min="1" value="1" style="width:100%; padding:14px; border-radius:12px; border:1px solid #333; background:#0c0c0c; color:#fff; outline:none; box-sizing:border-box; font-size:15px;" onfocus="this.style.borderColor='#d4af37';" onblur="this.style.borderColor='#333';">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom:10px; font-size:14px; color:#d4af37; font-weight:600;"><i class="fas fa-calendar-alt"></i> Days *</label>
                        <input type="number" id="booking-days" min="1" value="3" style="width:100%; padding:14px; border-radius:12px; border:1px solid #333; background:#0c0c0c; color:#fff; outline:none; box-sizing:border-box; font-size:15px;" onfocus="this.style.borderColor='#d4af37';" onblur="this.style.borderColor='#333';">
                    </div>
                </div>
                <button type="submit" id="submitBookingBtn" style="background:linear-gradient(135deg,#d4af37,#b8962e); color:#000; border:none; padding:16px; border-radius:30px; font-weight:700; cursor:pointer; font-size:15px; font-family:'Poppins',sans-serif; text-transform:uppercase; letter-spacing:1px; box-shadow:0 10px 30px rgba(212,175,55,0.4);">
                    <i class="fab fa-whatsapp"></i>START JOURNEY
                </button>
                <button type="button" id="cancelBookingBtn" style="background:transparent; border:1px solid #666; color:#aaa; padding:12px; border-radius:30px; cursor:pointer; font-family:inherit; font-size:14px;">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("booking-name").addEventListener('input', (e) => { formData.name = e.target.value; });
    document.getElementById("booking-phone").addEventListener('input', (e) => { formData.phone = e.target.value; });
    document.getElementById("booking-persons").addEventListener('input', (e) => { formData.persons = e.target.value; });
    document.getElementById("booking-days").addEventListener('input', (e) => { formData.days = e.target.value; });

    document.getElementById("bookingCalcForm").addEventListener('submit', function(e) {
        e.preventDefault();
        if (!formData.name.trim() || !formData.phone.trim()) { showQuickNotification("❌ Please fill Name and Phone!"); return; }
        const btn = document.getElementById("submitBookingBtn");
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> CONTACTING TEAM...';
        btn.style.opacity = '0.7';

        // big confirmation popup (user requested)
        showMegaPopup('My team will contact you soon', 1500);

        // wait briefly so user sees the mega popup, then open WhatsApp
        setTimeout(() => {
            const opened = sendToWhatsApp();
            if (opened) {
                showSuccessNotification("✅ WhatsApp opened!");
                setTimeout(() => closeBookingModal(), 2000);
                // restore button label afterwards
                setTimeout(() => { btn.disabled = false; btn.innerHTML = '<i class="fab fa-whatsapp"></i> VIEW DETAILS'; btn.style.opacity = '1'; }, 1600);
            } else {
                btn.disabled = false;
                btn.innerHTML = '<i class="fab fa-whatsapp"></i> VIEW DETAILS';
                btn.style.opacity = '1';
            }
        }, 700);
    });

    document.getElementById("cancelBookingBtn").addEventListener('click', function() {
        if (formData.name.trim() || formData.phone.trim()) {
            const btn = document.getElementById("cancelBookingBtn");
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            if (sendToWhatsApp()) {
                showSuccessNotification("✅ Message sent!");
                setTimeout(() => closeBookingModal(), 1500);
            } else { closeBookingModal(); }
        } else { closeBookingModal(); }
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            if (formData.name.trim() || formData.phone.trim()) {
                if (sendToWhatsApp()) {
                    showSuccessNotification("✅ Message sent!");
                    setTimeout(() => closeBookingModal(), 1500);
                } else { closeBookingModal(); }
            } else { closeBookingModal(); }
        }
    });

    document.getElementById("bookingModalContent").addEventListener('click', (e) => e.stopPropagation());

    window.closeBookingModal = () => {
        const bm = document.getElementById("bookingModal");
        if (bm) { bm.style.opacity = '0'; setTimeout(() => bm.remove(), 300); }
    };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ✅ NOTIFICATIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function showSuccessNotification(message) {
    const n = document.createElement('div');
    n.style.cssText = `position:fixed; top:100px; right:30px; background:linear-gradient(135deg,#25d366,#128c7e); color:#fff; padding:18px 28px; border-radius:15px; border:2px solid rgba(37,211,102,0.5); z-index:10003; opacity:0; transform:translateX(50px); transition:all 0.4s ease; box-shadow:0 10px 40px rgba(37,211,102,0.4); font-weight:600; font-size:15px; display:flex; align-items:center; gap:12px;`;
    n.innerHTML = `<i class="fas fa-check-circle" style="font-size:22px;"></i><span>${message}</span>`;
    document.body.appendChild(n);
    setTimeout(() => { n.style.opacity='1'; n.style.transform='translateX(0)'; }, 10);
    setTimeout(() => { n.style.opacity='0'; setTimeout(() => n.remove(), 400); }, 3000);
}

// Big centered popup used when user submits booking ("my team will contact you soon")
function showMegaPopup(message, duration = 1500) {
    const existing = document.getElementById('megaPopup');
    if (existing) existing.remove();
    const p = document.createElement('div');
    p.id = 'megaPopup';
    p.style.cssText = `position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:100050; pointer-events:none;`;
    p.innerHTML = `
        <div style="pointer-events:auto; background:linear-gradient(180deg,#0b0b0b,#111); border:2px solid rgba(212,175,55,0.25); color:#fff; padding:28px 36px; border-radius:18px; text-align:center; box-shadow:0 30px 80px rgba(0,0,0,0.9); max-width:90%;">
            <div style="font-size:34px; color:#d4af37; margin-bottom:8px;"><i class='fas fa-headset'></i></div>
            <div style="font-size:20px; font-weight:700; line-height:1.2;">${message}</div>
        </div>
    `;
    document.body.appendChild(p);
    setTimeout(() => { p.remove(); }, duration);
} 

function showQuickNotification(message) {
    const n = document.createElement('div');
    n.style.cssText = `position:fixed; top:100px; right:30px; background:rgba(0,0,0,0.9); color:#fff; padding:15px 25px; border-radius:10px; border:1px solid #d4af37; z-index:10000; opacity:0; transform:translateX(50px); transition:all 0.3s ease;`;
    n.textContent = message;
    document.body.appendChild(n);
    setTimeout(() => { n.style.opacity='1'; n.style.transform='translateX(0)'; }, 10);
    setTimeout(() => { n.style.opacity='0'; setTimeout(() => n.remove(), 300); }, 2000);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📞 OTHER FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function quickQuote(p) { showBookingOptions(p); }
function whatsapp(m) { window.open(`https://wa.me/917558138968?text=${encodeURIComponent("Hi Fundun Holidays, " + m)}`, "_blank"); }
function openMail() { window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fundunholidays@gmail.com", "_blank"); }
function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }
function openQuickCalculator() { showBookingOptions('General Enquiry'); }
function openServiceBooking(s) { showBookingOptions(s); }

// Phone options popup (Call vs WhatsApp)
function showPhoneOptions() {
    const existing = document.getElementById('phoneOptionsModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'phoneOptionsModal';
    modal.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.92); display:flex; align-items:center; justify-content:center; z-index:10050; backdrop-filter:blur(10px);`;
    modal.innerHTML = `
        <div style="background:linear-gradient(135deg,rgba(20,20,20,0.95),rgba(5,5,5,0.95)); border:2px solid rgba(212,175,55,0.3); padding:40px; border-radius:25px; max-width:450px; width:90%; text-align:center; color:#fff;">
            <i class="fas fa-phone" style="font-size:48px; color:#d4af37; margin-bottom:15px; display:block;"></i>
            <h3 style="color:#d4af37; margin:10px 0 25px; font-size:22px; font-family:'Poppins',sans-serif;">CONTACT US</h3>
            <p style="color:#aaa; margin-bottom:30px;">+91 7010954360</p>
            
            <div style="display:flex; gap:14px; justify-content:center;">
                <button onclick="callPhone('7010954360')" style="flex:1; background:linear-gradient(135deg,#d4af37,#b8962e); color:#000; border:none; padding:14px; border-radius:20px; font-weight:700; cursor:pointer; font-size:14px; text-transform:uppercase;">
                    <i class="fas fa-phone"></i> CALL
                </button>
                <button onclick="whatsappPhone('7010954360')" style="flex:1; background:linear-gradient(135deg,#25d366,#128c7e); color:#fff; border:none; padding:14px; border-radius:20px; font-weight:700; cursor:pointer; font-size:14px; text-transform:uppercase;">
                    <i class="fab fa-whatsapp"></i> WHATSAPP
                </button>
            </div>
            <button onclick="document.getElementById('phoneOptionsModal').remove()" style="width:100%; margin-top:14px; background:transparent; border:1px solid #666; color:#aaa; padding:10px; border-radius:20px; cursor:pointer; font-family:inherit; font-size:13px;">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

function callPhone(phone) {
    window.location.href = `tel:+91${phone}`;
    document.getElementById('phoneOptionsModal')?.remove();
}

function whatsappPhone(phone) {
    window.open(`https://wa.me/91${phone}`, '_blank');
    document.getElementById('phoneOptionsModal')?.remove();
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ⭐ REVIEWS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const heroReviews = [
    { name: "Arun", stars: 5, text: "Amazing trip planning and great support!" },
    { name: "Priya", stars: 5, text: "Best travel experience ever." },
    { name: "Karthik", stars: 4, text: "Very smooth and well-organized tour." },
    { name: "Meena", stars: 5, text: "Friendly team and excellent service." }
];
let reviewIndex = 0;

function renderSingleReview() {
    const rs = document.getElementById("reviewSlider");
    if (!rs) return;
    const r = heroReviews[reviewIndex];
    rs.innerHTML = `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${r.name.charAt(0)}</div>
                <div><div class="review-name">${r.name}</div><div class="review-stars">${"★".repeat(r.stars)}</div></div>
            </div>
            <div class="review-text">${r.text}</div>
        </div>
    `;
    reviewIndex = (reviewIndex + 1) % heroReviews.length;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔔 LIVE NOTIFICATIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const bookingNotifications = [
    { name: "Ram from Pudukkottai", package: "Ooty Honeymoon Package", time: "2 minutes ago" },
    { name: "Arun & archana ", package: "Kerala Honeymoon Tour", time: "5 minutes ago" },
    { name: "Arun from Bangalore", package: "Munnar Family Package", time: "8 minutes ago" },
    { name: "Vaishnavi & suriya", package: "Kodaikanal Couple Package", time: "12 minutes ago" },
    { name: "Vikram & Family", package: "Goa Beach Holiday", time: "15 minutes ago" },
    { name: "Meena from Coimbatore", package: "Ramoji Film City Tour", time: "18 minutes ago" },
    { name: "Suresh & Team", package: "Corporate Coorg Package", time: "22 minutes ago" },
    { name: "Lakshmi from Hyderabad", package: "Alleppey Backwaters", time: "25 minutes ago" },
    { name: "Arjun & Sneha", package: "Wayanad Nature Tour", time: "30 minutes ago" },
    { name: "Harini from Delhi", package: "Mysore Heritage Tour", time: "35 minutes ago" }
];

let currentNotificationIndex = 0;
let notificationTimeout = null;

function showLiveNotification() {
    const notificationDiv = document.getElementById("live-notification");
    const notifText = document.getElementById("notif-text");
    if (!notificationDiv || !notifText) return;
    const n = bookingNotifications[currentNotificationIndex];
    notifText.innerHTML = `<strong>${n.name}</strong> just viewed <span style="color:#d4af37;">${n.package}</span> <span style="color:#999;">• ${n.time}</span>`;
    notificationDiv.classList.add("show");
    if (notificationTimeout) clearTimeout(notificationTimeout);
    notificationTimeout = setTimeout(() => {
        notificationDiv.classList.remove("show");
        currentNotificationIndex = (currentNotificationIndex + 1) % bookingNotifications.length;
        setTimeout(showLiveNotification, 8000);
    }, 5000);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🚀 INIT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.addEventListener("DOMContentLoaded", function() {
    console.log("🌴 Fundun Holidays - Script Loaded!");

    // Hero Carousel
    const heroImages = [
        'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239861/POSTER_bvgobj.png',
        'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769595950/hero_image_2_dxwrxu.png',
        'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769620540/img_post_rbz4dd.png'
    ];
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        heroImages.forEach((img, i) => {
            const slide = document.createElement('div');
            slide.classList.add('carousel-slide');
            if (i === 0) slide.classList.add('active');
            slide.style.backgroundImage = `url('${img}')`;
            carouselContainer.appendChild(slide);
        });
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if (icon) { icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-times'); }
        });
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
            });
        });
    }

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => { navbar.classList.toggle('fixed', window.scrollY > 50); }, { passive: true });
    }

    // Destination Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.state-container').forEach(container => {
                container.style.display = (filter === 'all' || container.getAttribute('data-category') === filter) ? 'block' : 'none';
            });
        });
    });

    // Gallery
    buildGallery();

    // Make static gallery images (the .gallery-viewport fallback) clickable — open standalone lightbox
    document.querySelectorAll('.gallery-viewport .slide img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openStandaloneLightbox(img.src, img.alt || 'Gallery Image'));
    });

    // Reviews
    renderSingleReview();
    setInterval(renderSingleReview, 3500);

    // Live Notifications
    setTimeout(showLiveNotification, 3000);

    console.log("✅ All systems ready!");
    console.log("✅ Gallery: hover pause + click lightbox ACTIVE!");
    console.log("✅ WhatsApp: Cancel/Close auto-send ACTIVE!");

    // Exit confirmation — show a confirmation dialog when the user attempts to close/navigate away
    window.addEventListener('beforeunload', function (e) {
        const confirmationMessage = 'Are you sure you want to leave this site?';
        e.preventDefault();
        e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
        return confirmationMessage; // Gecko, WebKit, Chrome <34
    });
});
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🖼️ FULL GALLERY SYSTEM
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const GALLERY_IMAGES = [
  { id:1,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239844/img29_jeheip.jpg",        title:"Scenic Hills",     place:"Tamil Nadu" },
  { id:2,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239792/img12_bl8rzq.jpg",      title:"Valley View",      place:"Kerala" },
  { id:3,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239844/img31_etblj9.jpg",      title:"Nature Trail",     place:"Karnataka" },
  { id:4,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239846/img5_nfnuos.jpg",      title:"Golden Sunrise",   place:"Ooty" },
  { id:5,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1770658100/ven_pxvtw3.jpg",      title:"Misty Mountains",  place:"Kodaikanal" },
  { id:6,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771500855/IMG-20260119-WA0003_ooqgs4.jpg",        title:"Green Estates",    place:"Munnar" },
  { id:7,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771598718/SAVE_20260220_195925.jpg_ugp7yp.jpg",        title:"Backwater Bliss",  place:"Alleppey" },
  { id:8,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771598813/SAVE_20260220_195857.jpg_xzyueg.jpg",      title:"Heritage Glow",    place:"Mysore" },
  { id:9,  src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771598939/SAVE_20260220_200236.jpg_i52v8c.jpg",       title:"Queen of Hills",   place:"Ooty" },
  { id:10, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599074/SAVE_20260220_195539.jpg_knavss.jpg",     title:"Tea Garden",       place:"Munnar" },
  { id:11, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599162/SAVE_20260220_195852.jpg_mi2tjj.jpg", title:"Princess Hills",   place:"Kodaikanal" },
  { id:12, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769497258/party_c0ls8b.jpg",   title:"Venice of East",   place:"Alleppey" },
  { id:13, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239845/img34_dienml.jpg",   title:"Wild Wayanad",     place:"Wayanad" },
  { id:14, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239827/img25_ng8p1i.jpg",     title:"Palace City",      place:"Mysore" },
  { id:15, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239794/img24_vyrnov.jpg",      title:"Coffee Country",   place:"Coorg" },
  { id:16, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599250/SAVE_20260220_195930.jpg_mknim3.jpg",        title:"Beach Paradise",   place:"Goa" },
  { id:17, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599444/SAVE_20260220_195821.jpg_zk3tll.jpg", title:"Land's End",    place:"Kanyakumari" },
  { id:18, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599538/SAVE_20260220_195750.jpg_woa3uw.jpg",    title:"Green Meadows",    place:"Vagamon" },
  { id:19, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599771/SAVE_20260220_195600.jpg_ochwoz.jpg",   title:"City of Pearls",   place:"Hyderabad" },
  { id:20, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239792/img13_ikxyt0.jpg",      title:"Cinematic World",  place:"Ramoji" },
  { id:21, src:"https://res.cloudinary.com/drlg1t6pk/image/upload/v1771599888/SAVE_20260220_200201.jpg_pb19hk.jpg",      title:"Cinematic World",  place:"Ramoji" },

];

let currentFilter = 'All';
let filteredImages = [...GALLERY_IMAGES];
let currentLbIndex = 0;

// ── Open Full Gallery ──────────────────────────────────────
function openFullGallery() {
  const overlay = document.getElementById('full-gallery-overlay');
  overlay.style.display = 'block';
  document.body.classList.add('overlay-open');
  setTimeout(() => { overlay.style.opacity = '1'; }, 10);
  buildFilterPills();
  renderGalleryGrid(GALLERY_IMAGES);
}

// ── Close Full Gallery ─────────────────────────────────────
function closeFullGallery() {
  const overlay = document.getElementById('full-gallery-overlay');
  overlay.style.opacity = '0';
  document.body.classList.remove('overlay-open');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.scrollTop = 0;
  }, 380);
}

// ── Build Filter Pills ─────────────────────────────────────
function buildFilterPills() {
  const bar = document.getElementById('gallery-filter-bar');
  const places = ['All', ...new Set(GALLERY_IMAGES.map(i => i.place))];
  bar.innerHTML = '';
  places.forEach(p => {
    const btn = document.createElement('button');
    btn.textContent = p;
    btn.onclick = () => {
      currentFilter = p;
      filteredImages = p === 'All' ? [...GALLERY_IMAGES] : GALLERY_IMAGES.filter(i => i.place === p);
      document.getElementById('gallery-count-display').textContent = filteredImages.length;
      renderGalleryGrid(filteredImages);
      bar.querySelectorAll('button').forEach(b => {
        b.style.background = 'rgba(255,255,255,0.05)';
        b.style.borderColor = 'rgba(255,255,255,0.1)';
        b.style.color = '#aaa';
      });
      btn.style.background = 'rgba(212,175,55,0.2)';
      btn.style.borderColor = '#d4af37';
      btn.style.color = '#d4af37';
    };
    btn.style.cssText = `background:${p==='All'?'rgba(212,175,55,0.2)':'rgba(255,255,255,0.05)'};border:1px solid ${p==='All'?'#d4af37':'rgba(255,255,255,0.1)'};color:${p==='All'?'#d4af37':'#aaa'};padding:7px 18px;border-radius:30px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.25s ease;letter-spacing:0.4px;font-family:'Poppins',sans-serif;`;
    bar.appendChild(btn);
  });
}

// ── Render Grid ────────────────────────────────────────────
function renderGalleryGrid(images) {
  const grid = document.getElementById('full-gallery-grid');
  grid.innerHTML = '';
  images.forEach((img, idx) => {
    const tall = idx % 5 === 0 || idx % 7 === 3;
    const card = document.createElement('div');
    card.style.cssText = `border-radius:14px;overflow:hidden;position:relative;background:#111;grid-row:${tall ? 'span 2' : 'span 1'};cursor:pointer;animation:gridItemIn 0.5s ease both;animation-delay:${idx * 0.055}s;`;

    card.innerHTML = `
      <img src="${img.src}" alt="${img.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s ease;" onerror="this.src='https://via.placeholder.com/400x300/111/d4af37?text=${encodeURIComponent(img.title)}'">
      <div class="gcard-overlay" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.88) 0%,transparent 55%);opacity:0;transition:opacity 0.35s ease;display:flex;align-items:flex-end;">
        <div style="padding:14px;">
          <div style="font-size:10px;color:#d4af37;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;">📍 ${img.place}</div>
          <div style="font-size:14px;color:#fff;font-weight:700;margin-bottom:6px;">${img.title}</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.6);">🔍 Click to enlarge</div>
        </div>
      </div>
      <div style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.7);border:1px solid rgba(212,175,55,0.4);color:#d4af37;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;backdrop-filter:blur(6px);">${idx + 1}</div>
    `;

    // Hover effects
    card.addEventListener('mouseenter', () => {
      card.querySelector('img').style.transform = 'scale(1.08)';
      card.querySelector('.gcard-overlay').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('img').style.transform = 'scale(1)';
      card.querySelector('.gcard-overlay').style.opacity = '0';
    });

    card.addEventListener('click', () => openLightboxAt(idx));
    grid.appendChild(card);
  });
}

// ── Lightbox Open ──────────────────────────────────────────
function openLightboxAt(index) {
  currentLbIndex = index;
  const lb = document.getElementById('gallery-lightbox');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  updateLightbox();

  // Build thumbnails once
  const thumbs = document.getElementById('lb-thumbs');
  thumbs.innerHTML = '';
  filteredImages.forEach((img, i) => {
    const t = document.createElement('img');
    t.src = img.src;
    t.alt = img.title;
    t.style.cssText = `width:48px;height:36px;object-fit:cover;border-radius:7px;cursor:pointer;flex-shrink:0;transition:all 0.25s ease;border:2px solid ${i === index ? '#d4af37' : 'transparent'};opacity:${i === index ? '1' : '0.5'};`;
    t.onclick = () => { currentLbIndex = i; updateLightbox(); };
    thumbs.appendChild(t);
  });
}

// ── Update Lightbox ────────────────────────────────────────
function updateLightbox() {
  const img = filteredImages[currentLbIndex];
  const mainImg = document.getElementById('lb-main-img');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = img.src;
    mainImg.onload = () => { mainImg.style.opacity = '1'; };
  }, 150);

  document.getElementById('lb-counter').innerHTML = `<span style="font-size:18px;font-weight:900;color:#d4af37;">${currentLbIndex + 1}</span><span style="font-size:13px;color:#555;margin:0 4px;">/</span><span style="font-size:13px;color:#777;">${filteredImages.length}</span>`;

  document.getElementById('lb-caption').innerHTML = `<span style="font-size:15px;font-weight:700;color:#fff;">${img.title}</span><span style="font-size:12px;color:#d4af37;font-weight:600;">📍 ${img.place}</span>`;

  // Update thumb highlights
  const thumbs = document.getElementById('lb-thumbs');
  if (thumbs) {
    thumbs.querySelectorAll('img').forEach((t, i) => {
      t.style.border = i === currentLbIndex ? '2px solid #d4af37' : '2px solid transparent';
      t.style.opacity = i === currentLbIndex ? '1' : '0.5';
    });
    thumbs.querySelectorAll('img')[currentLbIndex]?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
}

// ── Lightbox Navigate ──────────────────────────────────────
function lbNav(dir) {
  currentLbIndex = (currentLbIndex + dir + filteredImages.length) % filteredImages.length;
  updateLightbox();
}

// ── Close Lightbox ─────────────────────────────────────────
function closeLightboxGallery() {
  document.getElementById('gallery-lightbox').style.display = 'none';
  document.body.style.overflow = '';
}

// ── Keyboard Support ───────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('gallery-lightbox');
  if (lb && lb.style.display === 'flex') {
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft')  lbNav(-1);
    if (e.key === 'Escape')     closeLightboxGallery();
    return;
  }
  const overlay = document.getElementById('full-gallery-overlay');
  if (overlay && overlay.style.opacity === '1') {
    if (e.key === 'Escape') closeFullGallery();
  }
});