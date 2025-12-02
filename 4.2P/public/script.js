// Load species from server
async function loadSpecies() {
    const res = await fetch("/species");
    const data = await res.json();

    const list = document.getElementById("speciesList");
    list.innerHTML = "";

    data.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            <div class="card mb-4 shadow-sm p-3">
                <img src="${item.imageUrl}" class="card-img-top mb-2" alt="${item.speciesName}">
                <div class="card-body">
                    <!-- Display Mode -->
                    <div class="display-mode" id="display-${item._id}">
                        <h5 class="card-title">${item.speciesName}</h5>
                        <p class="card-text"><strong>Location:</strong> ${item.location}</p>
                        <p class="card-text"><strong>Confidence:</strong> ${item.confidence}</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-primary btn-sm" onclick="startEdit('${item._id}')"><i class="fas fa-edit"></i> Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteSpecies('${item._id}')"><i class="fas fa-trash-alt"></i> Delete</button>
                        </div>
                    </div>

                    <!-- Edit Mode -->
                    <div class="edit-mode" id="edit-${item._id}" style="display:none;">
                        <input type="text" id="editName-${item._id}" class="form-control edit-input" value="${item.speciesName}">
                        <input type="text" id="editLocation-${item._id}" class="form-control edit-input" value="${item.location}">
                        <input type="number" step="0.01" id="editConfidence-${item._id}" class="form-control edit-input" value="${item.confidence}">
                        <input type="text" id="editImage-${item._id}" class="form-control edit-input" value="${item.imageUrl}">
                        <div class="d-flex justify-content-between mt-2">
                            <button class="btn btn-success btn-sm" onclick="saveEdit('${item._id}')"><i class="fas fa-save"></i> Save</button>
                            <button class="btn btn-secondary btn-sm" onclick="cancelEdit('${item._id}')"><i class="fas fa-times"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        list.appendChild(col);
    });
}

// Add new species
async function addSpecies() {
    const newSpecies = {
        speciesName: document.getElementById("speciesName").value,
        location: document.getElementById("location").value,
        confidence: parseFloat(document.getElementById("confidence").value),
        imageUrl: document.getElementById("imageUrl").value,
        timestamp: new Date().toISOString()
    };

    await fetch("/species", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSpecies)
    });

    clearAddForm();
    loadSpecies();
}

// Delete species
async function deleteSpecies(id) {
    await fetch(`/species/${id}`, { method: "DELETE" });
    loadSpecies();
}

// Start edit mode
function startEdit(id) {
    document.getElementById(`display-${id}`).style.display = "none";
    document.getElementById(`edit-${id}`).style.display = "block";
}

// Cancel edit
function cancelEdit(id) {
    document.getElementById(`edit-${id}`).style.display = "none";
    document.getElementById(`display-${id}`).style.display = "block";
}

// Save edit
async function saveEdit(id) {
    const updatedData = {
        speciesName: document.getElementById(`editName-${id}`).value,
        location: document.getElementById(`editLocation-${id}`).value,
        confidence: parseFloat(document.getElementById(`editConfidence-${id}`).value),
        imageUrl: document.getElementById(`editImage-${id}`).value,
        timestamp: new Date().toISOString()
    };

    await fetch(`/species/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });

    loadSpecies();
}

// Clear add form
function clearAddForm() {
    document.getElementById("speciesName").value = "";
    document.getElementById("location").value = "";
    document.getElementById("confidence").value = "";
    document.getElementById("imageUrl").value = "";
}

// Load species on page load
loadSpecies();
