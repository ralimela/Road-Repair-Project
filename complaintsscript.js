document.addEventListener('DOMContentLoaded', () => {
    const profile = document.getElementById('profile');
    const profileDetails = document.getElementById('profile-details');
    const modal = document.getElementById('complaint-modal');
    const modalClose = document.querySelector('.close');
    const complaintForm = document.getElementById('complaint-form');
    const modalTitle = document.querySelector('.modal-content h3');
    const complaintLocation = document.getElementById('complaintLocation');

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const mobileNumber = localStorage.getItem('mobileNumber');

    const complaintTypes = {
        'potholes': {
            description: 'Road surface is damaged with potholes. Potholes are depressions in the road surface caused by wear and tear, weather, and traffic.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'cracks': {
            description: 'Cracks appearing on the road surface. Cracks in the road surface can appear as long, narrow fissures caused by ageing, temperature changes, and traffic stress.',
            images: ['cracks1.jpeg', 'cracks2.jpeg']
        },
        'erosion': {
            description: 'Erosion or washouts affecting the road. Erosion or washouts occur when water flow removes the soil or base material supporting the road, leading to surface collapse.',
            images: ['Erosion1.jpeg', 'Erosion2.jpeg']
        },
        'faded-markings': {
            description: 'Road markings are faded or missing. Road markings like lines, crosswalks, and arrows that have worn away or are no longer visible.',
            images: ['Faded1.jpeg', 'Faded2.jpeg']
        },
        'blocked-drains': {
            description: 'Blocked drains or culverts causing water buildup. Drains or culverts clogged with debris, preventing proper water drainage and causing water buildup on the road.',
            images: ['Drains1.jpeg', 'Drains2.jpeg']
        },
        'debris': {
            description: 'Debris on the roadway obstructing traffic. Objects such as tree branches, rocks, trash, or other materials that obstruct the road.',
            images: ['Debris1.jpeg', 'Debris2.jpeg']
        },
        'damaged-signage': {
            description: 'Damaged or missing road signage. Traffic signs that are broken, defaced, or missing, leading to confusion and safety issues.',
            images: ['Roadsign1.jpeg', 'Roadsign2.jpeg']
        },
        'flooding': {
            description: 'Flooding or water accumulation on the road. Areas of the road where water pools or floods due to inadequate drainage.',
            images: ['flood1.jpeg', 'flood2.jpeg']
        },
        'street-light-issues': {
            description: 'Issues with street lights. Non-functioning, flickering, or damaged street lights that reduce visibility and safety at night.',
            images: ['lights1.jpeg', 'lights2.jpeg']
        },
        'sinkholes': {
            description: 'Sinkholes forming on the road. Large, deep depressions or holes that suddenly appear in the road due to the collapse of the underlying ground.',
            images: ['sinkholes-1.webp', 'sinkholes-2.jpeg']
        },
        'road-kill': {
            description: 'Dead animals on the road causing hazards. Animals that have been struck by vehicles and remain on the road, causing potential hazards.',
            images: ['animals-1.jpg']
        },
        'speed-bumps': {
            description: 'Damage to speed bumps. Speed bumps that are cracked, broken, or uneven, affecting their effectiveness.',
            images: ['speedbrakers-1.webp', 'speedbrakers-2.webp']
        },
        'sidewalk-damage': {
            description: 'Damage to sidewalks. Cracked, broken, or uneven sidewalks that pose tripping hazards and accessibility issues.',
            images: ['sidewalkdamage.jpeg', 'sidewalkdamage.jpg']
        },
        'bridge-damage': {
            description: 'Damage to bridges or overpasses. Structural damage to bridges or overpasses, such as cracks, spalling, or exposed rebar.',
            images: ['Bridgedamage-1.jpg', 'bridgedamage-2.jpg']
        },
        'others': {
            description: 'Other issues not listed. Provide a brief description.',
            images: ['others.jpeg']
        }
    };

    
    const complaintTypeItems = document.querySelectorAll('.complaint-type-item');

    complaintTypeItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            const type = item.getAttribute('data-type');
            const complaint = complaintTypes[type];
            let complaintDetails = item.querySelector('.complaint-details');
            const allDetails = document.querySelectorAll('.complaint-details');

            allDetails.forEach(detail => {
                if (detail !== complaintDetails) {
                    detail.style.display = 'none';
                }
            });

            if (!complaintDetails) {
                complaintDetails = document.createElement('div');
                complaintDetails.classList.add('complaint-details');
                item.appendChild(complaintDetails);
            }

            if (complaintDetails.style.display === 'block') {
                complaintDetails.style.display = 'none';
            } else {
                complaintDetails.innerHTML = `
                    <p>${complaint.description}</p>
                    ${complaint.images.map(image => `<img src="${image}" alt="${complaint.description}">`).join('')}
                    <button class="raise-complaint">Raise Complaint</button>
                `;
                complaintDetails.style.display = 'block';
            }

            profileDetails.style.display = 'none';

            const raiseComplaintButton = complaintDetails.querySelector('.raise-complaint');
            raiseComplaintButton.addEventListener('click', (e) => {
                e.stopPropagation();
                modalTitle.innerText = `What is your complaint on ${type}...?`;
                modal.style.display = 'block';
                initMap();
            });
        });
    });

    document.addEventListener('click', () => {
        const allDetails = document.querySelectorAll('.complaint-details');
        allDetails.forEach(detail => {
            detail.style.display = 'none';
        });
        profileDetails.style.display = 'none';
    });

    profile.addEventListener('click', (event) => {
        event.stopPropagation();
        const allDetails = document.querySelectorAll('.complaint-details');
        allDetails.forEach(detail => {
            detail.style.display = 'none';
        });
        if (profileDetails.style.display === 'block') {
            profileDetails.style.display = 'none';
        } else {
            profileDetails.innerHTML = `
                <h3>User Details</h3>
                <p>Name: ${username}</p>
                <p>Email: ${email}</p>
                <p>Mobile Number: ${mobileNumber}</p>
            `;
            profileDetails.style.display = 'block';
        }
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    complaintForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Complaint submitted!');
        modal.style.display = 'none';
        complaintForm.reset();
    });

    // Initialize and add the map
    window.initMap = function() {
        const map = L.map('map').setView([17.4065, 78.4772], 25);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        

        let marker;

        map.on('click', (e) => {
            const latlng = e.latlng;
            if (marker) {
                marker.setLatLng(latlng);
            } else {
                marker = L.marker(latlng, { draggable: true }).addTo(map);
            }
            complaintLocation.value = `${latlng.lat}, ${latlng.lng}`;
        });

        map.on('geosearch/marker/dragend', (e) => {
            const latlng = e.location;
            complaintLocation.value = `${latlng.lat}, ${latlng.lng}`;
        });
    };
});
