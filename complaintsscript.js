document.addEventListener('DOMContentLoaded', () => {
    const mobileNumber = localStorage.getItem('mobileNumber');
    document.getElementById('user-mobile').innerText = `Mobile Number: ${mobileNumber}`;

    const complaintTypes = {
        'potholes': { description: 'Road surface is damaged with potholes.', image: 'image.jpg' },
        'cracks': { description: 'Cracks appearing on the road surface.', image: 'cracks.jpg' },
        'erosion': { description: 'Erosion or washouts affecting the road.', image: 'erosion.jpg' },
        'faded-markings': { description: 'Road markings are faded or missing.', image: 'faded-markings.jpg' },
        'blocked-drains': { description: 'Blocked drains or culverts causing water buildup.', image: 'blocked-drains.jpg' },
        'debris': { description: 'Debris on the roadway obstructing traffic.', image: 'debris.jpg' },
        'damaged-signage': { description: 'Damaged or missing road signage.', image: 'damaged-signage.jpg' },
        'flooding': { description: 'Flooding or water accumulation on the road.', image: 'flooding.jpg' },
        'street-light-issues': { description: 'Issues with street lights.', image: 'street-light-issues.jpg' },
        'sinkholes': { description: 'Sinkholes forming on the road.', image: 'sinkholes.jpg' },
        'road-kill': { description: 'Dead animals on the road causing hazards.', image: 'road-kill.jpg' },
        'speed-bumps': { description: 'Damage to speed bumps.', image: 'speed-bumps.jpg' },
        'sidewalk-damage': { description: 'Damage to sidewalks.', image: 'sidewalk-damage.jpg' },
        'bridge-damage': { description: 'Damage to bridges or overpasses.', image: 'bridge-damage.jpg' },
        'others': { description: 'Other issues not listed.', image: 'others.jpg' }
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
                    <img src="${complaint.image}" alt="${complaint.description}">
                    <button class="raise-complaint">Raise Complaint</button>
                `;
                complaintDetails.style.display = 'block';
            }
        });
    });
});
