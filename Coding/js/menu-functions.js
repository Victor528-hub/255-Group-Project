// Menu Functions
function renderCart(cart) {
    const paintContainer = document.getElementById("paintCartContent");
    const ceilingContainer = document.getElementById("ceilingCartContent");
    const tileContainer = document.getElementById("tileCartContent");
    const clearBtn = document.getElementById("clearCartBtn");

    if (!cart) {
        return;
    }

    renderPaintSection(paintContainer, cart.paint || []);
    renderCeilingSection(ceilingContainer, cart.ceilings || []);
    renderTileSection(tileContainer, cart.tiles || []);

    const hasItems =
        (cart.paint && cart.paint.length > 0) ||
        (cart.ceilings && cart.ceilings.length > 0) ||
        (cart.tiles && cart.tiles.length > 0);

    clearBtn.classList.toggle("hidden", !hasItems);
}

function renderPaintSection(container, items) {
    if (items.length === 0) {
        container.innerHTML = "<p>No paint calculations added yet.</p>";
        return;
    }

    const totalGallons = items.reduce((sum, item) => sum + (Number(item.gallons) || 0), 0);

    const listItems = items
        .map((item) => {
            const room = escapeHtml(item.room || "Room");
            const area = formatOneDecimal(item.area);
            const gallons = Number(item.gallons) || 0;

            return `<li><strong>${room}:</strong> ${area} sq ft wall area <br><strong>${gallons} Gallon(s)</strong> (2 coats)</li>`;
        })
        .join("");

    container.innerHTML = `
        <ul class="item-list">${listItems}</ul>
        <p><strong>Total Paint Needed: ${totalGallons} Gallon(s)</strong></p>
    `;
}

function renderCeilingSection(container, items) {
    if (items.length === 0) {
        container.innerHTML = "<p>No ceiling calculations added yet.</p>";
        return;
    }

    const totalGallons = items.reduce((sum, item) => sum + (Number(item.gallons) || 0), 0);

    const listItems = items
        .map((item) => {
            const room = escapeHtml(item.room || "Room");
            const area = formatOneDecimal(item.area);
            const gallons = Number(item.gallons) || 0;

            return `<li><strong>${room}:</strong> ${area} sq ft ceiling area <br><strong>${gallons} Gallon(s)</strong> of paint</li>`;
        })
        .join("");

    container.innerHTML = `
        <ul class="item-list">${listItems}</ul>
        <p><strong>Total Ceiling Paint Needed: ${totalGallons} Gallon(s)</strong></p>
    `;
}

function renderTileSection(container, items) {
    if (items.length === 0) {
        container.innerHTML = "<p>No tile calculations added yet.</p>";
        return;
    }

    const totalSqFt = items.reduce((sum, item) => sum + (Number(item.total_sqft) || 0), 0);

    const listItems = items
        .map((item) => {
            const room = escapeHtml(item.room || "Room");
            const area = formatOneDecimal(item.area);
            const totalSqft = formatOneDecimal(item.total_sqft);

            return `<li><strong>${room}:</strong> ${area} sq ft floor <br><strong>${totalSqft} sq ft of tile</strong> (includes 10% extra for waste materials)</li>`;
        })
        .join("");

    container.innerHTML = `
        <ul class="item-list">${listItems}</ul>
        <p><strong>Total Tile Needed: ${formatOneDecimal(totalSqFt)} sq ft</strong></p>
    `;
}
