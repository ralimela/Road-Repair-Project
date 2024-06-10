document.addEventListener('DOMContentLoaded', () => {
    const mobileNumber = localStorage.getItem('mobileNumber');
    document.getElementById('user-mobile').innerText = `Mobile Number: ${mobileNumber}`;

    const complaintTypes = {
        'potholes': {
            description: 'Road surface is damaged with potholes. Potholes are depressions in the road surface caused by wear and tear, weather, and traffic.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'cracks': {
            description: 'Cracks appearing on the road surface. Cracks in the road surface can appear as long, narrow fissures caused by ageing, temperature changes, and traffic stress.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'erosion': {
            description: 'Erosion or washouts affecting the road. Erosion or washouts occur when water flow removes the soil or base material supporting the road, leading to surface collapse.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'faded-markings': {
            description: 'Road markings are faded or missing. Road markings like lines, crosswalks, and arrows that have worn away or are no longer visible.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'blocked-drains': {
            description: 'Blocked drains or culverts causing water buildup. Drains or culverts clogged with debris, preventing proper water drainage and causing water buildup on the road.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'debris': {
            description: 'Debris on the roadway obstructing traffic. Objects such as tree branches, rocks, trash, or other materials that obstruct the road.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'damaged-signage': {
            description: 'Damaged or missing road signage. Traffic signs that are broken, defaced, or missing, leading to confusion and safety issues.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'flooding': {
            description: 'Flooding or water accumulation on the road. Areas of the road where water pools or floods due to inadequate drainage.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'street-light-issues': {
            description: 'Issues with street lights. Non-functioning, flickering, or damaged street lights that reduce visibility and safety at night.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'sinkholes': {
            description: 'Sinkholes forming on the road. Large, deep depressions or holes that suddenly appear in the road due to the collapse of the underlying ground.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'road-kill': {
            description: 'Dead animals on the road causing hazards. Animals that have been struck by vehicles and remain on the road, causing potential hazards.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'speed-bumps': {
            description: 'Damage to speed bumps. Speed bumps that are cracked, broken, or uneven, affecting their effectiveness.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'sidewalk-damage': {
            description: 'Damage to sidewalks. Cracked, broken, or uneven sidewalks that pose tripping hazards and accessibility issues.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'bridge-damage': {
            description: 'Damage to bridges or overpasses. Structural damage to bridges or overpasses, such as cracks, spalling, or exposed rebar.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        },
        'others': {
            description: 'Other issues not listed. Provide a brief description.',
            images: ['potholes.jpeg', 'potholes1.jpeg']
        }
    };

    const complaintTypeItems = document.querySelectorAll('.complaint-type-item');

    complaintTypeItems.forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-type');
            const complaint = complaintTypes[type];
            let complaintDetails = item.querySelector('.complaint-details');
            const allDetails = document.querySelectorAll('.complaint-details');

            // Hide all other details
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

            // Toggle the display of the clicked item
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
        });
    });
});
