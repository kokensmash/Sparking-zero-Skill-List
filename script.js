// Character data
const characters = [
    { 
        name: "GOHAN (ADULT) [BASE]", 
        rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Wild Sense", "Full Power"] 
    },
    { 
        name: "GOHAN (ADULT) [SSJ]", 
        rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Explosive Wave", "Full Power"] 
    },
    { 
        name: "GOHAN (ADULT) [SSJ2]", 
        rushChains: ["Flying Kicks", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Explosive Wave", "Instant Spark"] 
    },
    // Vegeta's
    { 
        name: "VEGETA (SCOUTER)", 
        rushChains: ["Gut Punch", "Flying Kicks", "Rush Ki Wave", "Gut Punch"], 
        skills: ["Explosive Wave", "Buff"] 
    },
    { 
        name: "VEGETA (Z - EARLY) [BASE]", 
        rushChains: ["Ki Blast Cannon", "Rush Ki Wave", "Flying Kicks", "Gut Punch"], 
        skills: ["Explosive Wave", "Instant Spark"] 
    },
    { 
        name: "VEGETA (Z - EARLY) [SSJ]", 
        rushChains: ["Ki Blast Cannon", "Gut Punch", "Flying Kicks", "Rush Ki Wave"], 
        skills: ["Explosive Wave", "Buff"] 
    },
    { 
        name: "VEGETA (Z - EARLY) [SV]", 
        rushChains: ["Blaster Wave", "Rolling Hammer", "Rush Ki Wave", "Gut Punch"], 
        skills: ["Explosive Wave", "Instant Spark"] 
    },
    { 
        name: "VEGETA (Z - END) [BASE]", 
        rushChains: ["Gut Punch", "Rush Ki Wave", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Afterimage", "Buff"] 
    },
    { 
        name: "VEGETA (Z - END) [SSJ]", 
        rushChains: ["Flying Kicks", "Gut Punch", "Rush Ki Wave", "Ki Blast Cannon"], 
        skills: ["Explosive Wave", "Buff"] 
    },
    { 
        name: "VEGETA (Z - END) [SSJ2]", 
        rushChains: ["Flying Kicks", "Rolling Hammer", "Rush Ki Wave", "Gut Punch"], 
        skills: ["Explosive Wave", "Wild Sense"] 
    },
    { 
        name: "VEGETA (Z - END) [MAJIN]", 
        rushChains: ["Gut Punch", "Gut Punch", "Ki Blast Cannon", "Rush Ki Wave"], 
        skills: ["Buff", "Instant Spark"] 
    },
    { 
        name: "VEGETA (GT) [SSJ4]", 
        rushChains: ["Rush Ki Wave", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Explosive Wave", "Buff"] 
    },
    { 
        name: "VEGETA (SUPER) [BASE]", 
        rushChains: ["Ki Blast Cannon", "Gut Punch", "Flying Kicks", "Rush Ki Wave"], 
        skills: ["Explosive Wave", "Instant Spark"] 
    },
    { 
        name: "VEGETA (SUPER) [SSJ]", 
        rushChains: ["Gut Punch", "Rush Ki Wave", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Buff", "Instant Spark"] 
    },
    { 
        name: "VEGETA (SUPER) [SSJ GOD]", 
        rushChains: ["Flying Kicks", "Gut Punch", "Rush Ki Wave", "Ki Blast Cannon"], 
        skills: ["Explosive Wave", "Instant Spark"] 
    },
    { 
        name: "VEGETA (SUPER) [SSJ GOD SS]", 
        rushChains: ["Flying Kicks", "Gut Punch", "Rush Ki Wave", "Gut Punch"], 
        skills: ["Buff", "Buff"] 
    },
    { 
        name: "CABBA [BASE]", 
        rushChains: ["Flying Kicks", "Flying Kicks", "Gut Punch", "Ki Blast Cannon"], 
        skills: ["Explosive Wave", "Full Power"] 
    },
    { 
        name: "CABBA [SSJ]", 
        rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rush Ki Wave", "Gut Punch"], 
        skills: ["Explosive Wave", "Wild Sense"] 
    },
    { 
        name: "CABBA [SSJ2]", 
        rushChains: ["Gut Punch", "Ki Blast Cannon", "Rush Ki Wave", "Flying Kicks"], 
        skills: ["Explosive Wave", "Instant Spark"] 
    },
    { 
        name: "BABY VEGETA (GT)", 
        rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rush Ki Wave", "Gut Punch"], 
        skills: ["Explosive Wave", "Buff"] 
    },
    { 
        name: "SUPER BABY 1 (GT)", 
        rushChains: ["Flying Kicks", "Rush Ki Wave", "Ki Blast Cannon", "Gut Punch"], 
        skills: ["Afterimage", "Buff"] 
    },
    { 
        name: "SUPER BABY 2 (GT)", 
        rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Rush Ki Wave"], 
        skills: ["Explosive Wave", "Full Power"] 
    }
]; 


// Variables for pagination
let itemsPerPage = 300; // Default items per page
let currentPage = 1; // Current page number
let sortColumnIndex = null; // Track the column being sorted
let sortAscending = true; // Track the sorting order

// Function to normalize strings for case-insensitive comparison
function normalizeString(str) {
    return str.trim().toLowerCase();
}

// Function to dynamically add OR options
function addOrOption(id) {
    const group = document.getElementById(`${id}-or-group`);
    const select = document.createElement("select");
    select.innerHTML = document.getElementById(id).innerHTML;
    group.appendChild(select);
}

// Function to reset all filters
function resetFilters() {
    document.querySelectorAll("select").forEach(select => (select.value = ""));
    document.querySelectorAll(".or-group").forEach(group => (group.innerHTML = ""));
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => (checkbox.checked = false));
    document.getElementById("searchBar").value = "";
    toggleDropdowns(); // Re-enable dropdowns
    displayCharacters();
}

// Function to disable/enable dropdowns
function toggleDropdowns() {
    const hasActiveCheckbox = document.querySelectorAll(".rush-filter:checked").length > 0;
    document.querySelectorAll("select").forEach(select => (select.disabled = hasActiveCheckbox));
    document.querySelectorAll(".or-button").forEach(button => (button.disabled = hasActiveCheckbox));
}

// Main function to display characters
function displayCharacters() {
    const characterList = document.getElementById("characterList");
    characterList.innerHTML = ""; // Clear the table body

    // Get search query
    const searchQuery = normalizeString(document.getElementById("searchBar").value);

    // Get selected filters
    const selectedCheckboxes = Array.from(document.querySelectorAll(".rush-filter:checked")).map(cb => normalizeString(cb.value));

    // Get dropdown filter values
    const filters = {
        rush1: normalizeString(document.getElementById("rush1").value),
        rush2: normalizeString(document.getElementById("rush2").value),
        rush3: normalizeString(document.getElementById("rush3").value),
        rush4: normalizeString(document.getElementById("rush4").value),
        skill1: normalizeString(document.getElementById("skill1").value),
        skill2: normalizeString(document.getElementById("skill2").value),
    };

    // Step 1: Apply filtering
    let filteredCharacters = characters.filter(character => {
        // Name filter
        const nameMatch = !searchQuery || normalizeString(character.name).includes(searchQuery);

        // Checkbox filter (all selected must match)
        const hasMatchingCheckbox = selectedCheckboxes.length === 0 || 
            selectedCheckboxes.every(cb => character.rushChains.map(normalizeString).includes(cb));

        // Dropdown filters (match any or match exact)
        const rushMatch = [0, 1, 2, 3].every(i =>
            !filters[`rush${i + 1}`] || normalizeString(character.rushChains[i]) === filters[`rush${i + 1}`]
        );

        const skillMatch = [0, 1].every(i =>
            !filters[`skill${i + 1}`] || normalizeString(character.skills[i]) === filters[`skill${i + 1}`]
        );

        return nameMatch && hasMatchingCheckbox && rushMatch && skillMatch;
    });

    // Step 2: Apply sorting (if columnIndex is selected)
    if (sortColumnIndex !== null) {
        filteredCharacters.sort((a, b) => {
            let valueA, valueB;
            if (sortColumnIndex === 0) {
                valueA = a.name.toLowerCase();
                valueB = b.name.toLowerCase();
            } else if (sortColumnIndex >= 1 && sortColumnIndex <= 4) {
                valueA = a.rushChains[sortColumnIndex - 1].toLowerCase();
                valueB = b.rushChains[sortColumnIndex - 1].toLowerCase();
            } else {
                valueA = a.skills[sortColumnIndex - 5].toLowerCase();
                valueB = b.skills[sortColumnIndex - 5].toLowerCase();
            }

            if (valueA < valueB) return sortAscending ? -1 : 1;
            if (valueA > valueB) return sortAscending ? 1 : -1;
            return 0;
        });
    }

    // Step 3: Apply pagination
    const totalItems = filteredCharacters.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    currentPage = Math.min(currentPage, totalPages || 1); // Ensure valid page
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const charactersToDisplay = filteredCharacters.slice(start, end);

    // Step 4: Display characters
    if (charactersToDisplay.length > 0) {
        charactersToDisplay.forEach(character => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${character.name}</td>
                <td>${character.rushChains[0]}</td>
                <td>${character.rushChains[1]}</td>
                <td>${character.rushChains[2]}</td>
                <td>${character.rushChains[3]}</td>
                <td>${character.skills[0]}</td>
                <td>${character.skills[1]}</td>
            `;
            characterList.appendChild(row);
        });
    } else {
        characterList.innerHTML = `<tr><td colspan="7" style="text-align:center;">No characters found</td></tr>`;
    }

    updatePaginationControls(totalPages);
}

// Function to update pagination controls
function updatePaginationControls(totalPages) {
    const paginationControls = document.getElementById("paginationControls");
    paginationControls.innerHTML = ""; // Clear existing controls

    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.className = i === currentPage ? "active" : "";
            button.addEventListener("click", () => {
                currentPage = i;
                displayCharacters();
            });
            paginationControls.appendChild(button);
        }
    }
}

// Sort table function
function sortTable(columnIndex) {
    sortAscending = sortColumnIndex === columnIndex ? !sortAscending : true; // Toggle order or reset
    sortColumnIndex = columnIndex;
    displayCharacters(); // Redisplay characters with sorting
}

// Event listener for items per page
document.getElementById("itemsPerPage").addEventListener("change", e => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1; // Reset to first page
    displayCharacters();
});

// Add event listeners to update the display when filters are changed
document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", displayCharacters);
});

document.querySelectorAll(".rush-filter").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        toggleDropdowns();
        displayCharacters();
    });
});

document.getElementById("searchBar").addEventListener("input", displayCharacters);

// Initial display
displayCharacters();