document.addEventListener("DOMContentLoaded", fetchCart);

function switchTab(type) {
    const paintTab = document.getElementById('paintTabBtn');
    const tileTab = document.getElementById('tileTabBtn');
    const paintForm = document.getElementById('paintForm');
    const tileForm = document.getElementById('tileForm');
    document.getElementById('material_type').value = type;

    if (type === 'paint') {
        paintTab.classList.add('active-paint');
        tileTab.classList.remove('active-tile');
        paintForm.classList.remove('hidden');
        tileForm.classList.add('hidden');
    } else {
        tileTab.classList.add('active-tile');
        paintTab.classList.remove('active-paint');
        tileForm.classList.remove('hidden');
        paintForm.classList.add('hidden');
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const type = document.getElementById('material_type').value;

    const payload = {
        action: 'add_to_cart',
        material_type: type,
        room_name: document.getElementById('room_name').value || 'Unassigned Room',
        p_length: parseFloat(document.getElementById('p_length').value) || 0,
        p_width: parseFloat(document.getElementById('p_width').value) || 0,
        p_height: parseFloat(document.getElementById('p_height').value) || 0,
        p_doors: parseInt(document.getElementById('p_doors').value) || 0,
        p_windows: parseInt(document.getElementById('p_windows').value) || 0,
        t_length: parseFloat(document.getElementById('t_length').value) || 0,
        t_width: parseFloat(document.getElementById('t_width').value) || 0
    };

    try {
        const response = await fetch('api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        renderCart(data);
        document.getElementById('room_name').value = '';
    } catch (error) {
        console.error('Submission failed:', error);
        alert('Could not update cart. Ensure you are running on a local server (e.g., http://localhost).');
    }
}

async function fetchCart() {
    try {
        const response = await fetch('api.php?action=get_cart');
        if (response.ok) {
            const data = await response.json();
            renderCart(data);
        }
    } catch (error) {
        console.warn('Could not load cart session:', error);
    }
}

async function clearCart() {
    try {
        const response = await fetch('api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'clear_cart' })
        });
        const data = await response.json();
        renderCart(data);
    } catch (error) {
        console.error('Clear failed:', error);
    }
}

function renderCart(cart) {
    const paintContainer = document.getElementById('paintCartContent');
    const tileContainer = document.getElementById('tileCartContent');
    const clearBtn = document.getElementById('clearCartBtn');

    if (!cart) return;

    // Render Paint Items
    if (!cart.paint || cart.paint.length === 0) {
        paintContainer.innerHTML = '<p>No paint calculations added yet.</p>';
    } else {
        let totalGallons = 0;
        let html = '<ul class="item-list">';
        cart.paint.forEach(item => {
            totalGallons += item.gallons;
            html += `<li><strong>${item.room}:</strong> ${item.area} sq ft wall area <br>→ <strong>${item.gallons} Gallon(s)</strong> (2 coats)</li>`;
        });
        html += `</ul><p><strong>Total Paint Needed: ${totalGallons} Gallon(s)</strong></p>`;
        paintContainer.innerHTML = html;
    }

    // Render Tile Items
    if (!cart.tiles || cart.tiles.length === 0) {
        tileContainer.innerHTML = '<p>No tile calculations added yet.</p>';
    } else {
        let totalSqFt = 0;
        let html = '<ul class="item-list">';
        cart.tiles.forEach(item => {
            totalSqFt += item.total_sqft;
            html += `<li><strong>${item.room}:</strong> ${item.area} sq ft floor <br>→ <strong>${item.total_sqft} sq ft of tile</strong> (includes 10% extra)</li>`;
        });
        html += `</ul><p><strong>Total Tile Needed: ${totalSqFt.toFixed(1)} sq ft</strong></p>`;
        tileContainer.innerHTML = html;
    }

    // Toggle Clear Button
    if ((cart.paint && cart.paint.length > 0) || (cart.tiles && cart.tiles.length > 0)) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
}