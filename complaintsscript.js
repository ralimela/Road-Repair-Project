document.addEventListener('DOMContentLoaded', () => {
    const complaintTypes = {
        'potholes': [
            { description: 'Road surface is damaged with potholes.', image: 'potholes.jpg' },
            { description: 'Multiple potholes in a small area.', image: 'potholes2.jpg' }
        ],
        'cracks': [
            { description: 'Cracks appearing on the road surface.', image: 'cracks.jpg' },
            { description: 'Cracks along the sidewalk.', image: 'cracks2.jpg' }
        ],
        'erosion': [
            { description: 'Erosion or washouts affecting the road.', image: 'erosion.jpg' }
        ],
        'faded-markings': [
            { description: 'Road markings are faded or missing.', image: 'faded-markings.jpg' }
        ],
        'blocked-drains': [
            { description: 'Blocked drains or culverts causing water buildup.', image: 'blocked-drains.jpg' }
        ],
        'debris': [
            { description: 'Debris on the roadway obstructing traffic.', image: 'debris.jpg' }
        ],
        'damaged-signage': [
            { description: 'Damaged or missing road signage.', image: 'damaged-signage.jpg' }
        ],
        'flooding': [
            { description: 'Flooding or water accumulation on the road.', image: 'flooding.jpg' }
        ],
        'street-light-issues': [
            { description: 'Issues with street lights.', image: 'street-light-issues.jpg' }
        ],
        'sinkholes': [
            { description: 'Sinkholes forming on the road.', image: 'sinkholes.jpg' }
        ],
        'road-kill': [
            { description: 'Dead animals on the road causing hazards.', image: 'road-kill.jpg' }
        ],
        'speed-bumps': [
            { description: 'Damage to speed bumps.', image: 'speed-bumps.jpg' }
        ],
        'sidewalk-damage': [
            { description: 'Damage to sidewalks.', image: 'sidewalk-damage.jpg' }
        ],
        'bridge-damage': [
            { description: 'Damage to bridges or overpasses.', image: 'bridge-damage.jpg' }
        ],
        'others': [
            { description: 'Other issues not listed.', image: 'others.jpg' }
        ]
    };

    const complaintTypeItems = document.querySelectorAll('.complaint-type-item');
    const complaintList = document.getElementById('complaint-list');
    const complaintDetails = document.getElementById('complaint-details');

    complaintTypeItems.forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-type');
            const complaints = complaintTypes[type] || [];
            complaintList.innerHTML = complaints.map((complaint, index) => 
                `<li class="complaint-item" data-description="${complaint.description}" data-image="${complaint.image}">${type} - Complaint ${index + 1}</li>`
            ).join('');
            complaintList.style.display = 'block';
        });
    });

    complaintList.addEventListener('click', (event) => {
        if (event.target.classList.contains('complaint-item')) {
            const description = event.target.getAttribute('data-description');
            const image = event.target.getAttribute('data-image');
            const rect = event.target.getBoundingClientRect();

            complaintDetails.innerHTML = `
                <p>${description}</p>
                <img src="${image}" alt="${description}">
                <button class="raise-complaint">Raise Complaint</button>
            `;
            complaintDetails.style.top = `${rect.top + window.scrollY}px`;
            complaintDetails.style.left = `${rect.right + 10}px`;
            complaintDetails.style.display = 'block';
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('complaint-item') && !event.target.closest('#complaint-details')) {
            complaintDetails.style.display = 'none';
        }
    });
});
