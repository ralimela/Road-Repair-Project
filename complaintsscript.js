document.addEventListener('DOMContentLoaded', () => {
    const mobileNumber = localStorage.getItem('mobileNumber');
    document.getElementById('user-mobile').innerText = `Mobile Number: ${mobileNumber}`;

    const complaintTypes = {
        'potholes': { description: 'Road surface is damaged with potholes. Potholes are depressions in the road surface caused by wear and tear, weather, and traffic.', image: 'image.jpg' },
        'cracks': { description: 'Cracks appearing on the road surface.Cracks in the road surface can appear as long, narrow fissures caused by ageing, temperature changes, and traffic stress.', image: 'cracks.jpg' },
        'erosion': { description: 'Erosion or washouts affecting the road. Erosion or washouts occur when water flow removes the soil or base material supporting the road, leading to surface collapse. Sections of the road that have sunken or eroded away, often near drainage areas.', image: 'erosion.jpg' },
        'faded-markings': { description: 'Road markings are faded or missing. Road markings like lines, crosswalks, and arrows that have worn away or are no longer visible. Faint or completely absent lines and symbols on the road surface.', image: 'faded-markings.jpg' },
        'blocked-drains': { description: 'Blocked drains or culverts causing water buildup. Drains or culverts clogged with debris, preventing proper water drainage and causing water buildup on the road. Accumulated debris, leaves, and trash blocking drainage openings.', image: 'blocked-drains.jpg' },
        'debris': { description: 'Debris on the roadway obstructing traffic. Objects such as tree branches, rocks, trash, or other materials that obstruct the road. Visible obstacles scattered on the roadway, creating hazards for vehicles.', image: 'debris.jpg' },
        'damaged-signage': { description: 'Damaged or missing road signage. Traffic signs that are broken, defaced, or missing, leading to confusion and safety issues. Bent, broken, or completely absent road signs.', image: 'damaged-signage.jpg' },
        'flooding': { description: 'Flooding or water accumulation on the road. Areas of the road where water pools or floods due to inadequate drainage. Standing water on the road, often covering a significant portion of the surface.', image: 'flooding.jpg' },
        'street-light-issues': { description: 'Issues with street lights. Non-functioning, flickering, or damaged street lights that reduce visibility and safety at night. Dark or dim areas on the road where street lights should be functioning.', image: 'street-light-issues.jpg' },
        'sinkholes': { description: 'Sinkholes forming on the road. Large, deep depressions or holes that suddenly appear in the road due to the collapse of the underlying ground. A deep, often circular hole in the road, with sharp edges.', image: 'sinkholes.jpg' },
        'road-kill': { description: 'Dead animals on the road causing hazards. Animals that have been struck by vehicles and remain on the road, causing potential hazards. The presence of animal carcasses on the roadway.', image: 'road-kill.jpg' },
        'speed-bumps': { description: 'Damage to speed bumps. Speed bumps that are cracked, broken, or uneven, affecting their effectiveness. Damaged or worn-out speed bumps, often with missing sections.', image: 'speed-bumps.jpg' },
        'sidewalk-damage': { description: 'Damage to sidewalks. Cracked, broken, or uneven sidewalks that pose tripping hazards and accessibility issues. Sections of the sidewalk that are raised, cracked, or missing.', image: 'sidewalk-damage.jpg' },
        'bridge-damage': { description: 'Damage to bridges or overpasses. Structural damage to bridges or overpasses, such as cracks, spalling, or exposed rebar. Visible cracks, missing concrete, or exposed reinforcement bars on bridge structures.', image: 'bridge-damage.jpg' },
        'others': { description: 'Other issues not listed. Provide a brief description.', image: 'others.jpg' }
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
