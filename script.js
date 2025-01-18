// Character data
const characters = [
    { name: "GOHAN (ADULT) [BASE]", rushChains: ["flying kicks", "gut punch", "ki blast cannon", "gut punch"], skills: ["wild sense", "full power"] },
    { name: "GOHAN (ADULT) [SSJ]", rushChains: ["flying kicks", "gut punch", "ki blast cannon", "gut punch"], skills: ["explosive wave", "full power"] },
    { name: "GOHAN (ADULT) [SSJ2]", rushChains: ["flying kicks", "rolling hammer", "ki blast cannon", "gut punch"], skills: ["explosive wave", "instant spark"] },
    { name: "VEGETA (Z - END) [BASE]", rushChains: ["gut punch", "rush ki wave", "ki blast cannon", "gut punch"], skills: ["afterimage", "buff"] },
    { name: "VEGETA (Z - END) [SSJ]", rushChains: ["flying kicks", "gut punch", "rush ki wave", "ki blast cannon"], skills: ["explosive wave", "buff"] },
    { name: "VEGETA (Z - END) [SSJ2]", rushChains: ["flying kicks", "rolling hammer", "rush ki wave", "gut punch"], skills: ["explosive wave", "wild sense"] }
];

// Function to normalize strings for case-insensitive comparison
function normalizeString(str) {
    return str.trim().toLowerCase();
}

// Function to dynamically add OR options
function addOrOption(id) {
    const group = document.getElementById(`${id}-or-group`);
    const select = document.createElement('select');
    select.innerHTML = document.getElementById(id).innerHTML;
    group.appendChild(select);
}

// Function to reset all filters
function resetFilters() {
    document.querySelectorAll('select').forEach(select => select.value = "");
    document.querySelectorAll('.or-group').forEach(group => group.innerHTML = "");
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.getElementById("searchBar").value = "";
    toggleDropdowns(); // Re-enable dropdowns
    displayCharacters();
}

// Function to disable/enable dropdowns
function toggleDropdowns() {
    const hasActiveCheckbox = document.querySelectorAll(".rush-filter:checked").length > 0;
    document.querySelectorAll("select").forEach(select => select.disabled = hasActiveCheckbox);
    document.querySelectorAll(".or-button").forEach(button => button.disabled = hasActiveCheckbox);
}

// Function to display characters based on filters
function displayCharacters() {
    const characterList = document.getElementById("characterList");
    characterList.innerHTML = "";

    // Get name search filter
    const searchQuery = normalizeString(document.getElementById("searchBar").value);

    // Get selected checkbox filters
    const selectedCheckboxes = Array.from(document.querySelectorAll(".rush-filter:checked")).map(cb => normalizeString(cb.value));

    // Get selected dropdown filters
    const filters = {
        rush1: [normalizeString(document.getElementById("rush1").value)],
        rush2: [normalizeString(document.getElementById("rush2").value)],
        rush3: [normalizeString(document.getElementById("rush3").value)],
        rush4: [normalizeString(document.getElementById("rush4").value)],
        skill1: [normalizeString(document.getElementById("skill1").value)],
        skill2: [normalizeString(document.getElementById("skill2").value)],
    };

    // Add OR options to filters
    document.querySelectorAll("#rush1-or-group select").forEach(select => filters.rush1.push(normalizeString(select.value)));
    document.querySelectorAll("#rush2-or-group select").forEach(select => filters.rush2.push(normalizeString(select.value)));
    document.querySelectorAll("#rush3-or-group select").forEach(select => filters.rush3.push(normalizeString(select.value)));
    document.querySelectorAll("#rush4-or-group select").forEach(select => filters.rush4.push(normalizeString(select.value)));
    document.querySelectorAll("#skill1-or-group select").forEach(select => filters.skill1.push(normalizeString(select.value)));
    document.querySelectorAll("#skill2-or-group select").forEach(select => filters.skill2.push(normalizeString(select.value)));

    // Filter characters
    const filteredCharacters = characters.filter(character => {
        // Check if name contains the search query
        const nameMatch = !searchQuery || normalizeString(character.name).includes(searchQuery);

        // Check if any rush chain matches the selected checkboxes
        const hasMatchingCheckbox = selectedCheckboxes.length === 0 || selectedCheckboxes.some(cb =>
            character.rushChains.map(normalizeString).includes(cb)
        );

        // Match rush chains to their respective dropdown filters
        const rush1Match = filters.rush1.includes("") || filters.rush1.includes(normalizeString(character.rushChains[0]));
        const rush2Match = filters.rush2.includes("") || filters.rush2.includes(normalizeString(character.rushChains[1]));
        const rush3Match = filters.rush3.includes("") || filters.rush3.includes(normalizeString(character.rushChains[2]));
        const rush4Match = filters.rush4.includes("") || filters.rush4.includes(normalizeString(character.rushChains[3]));

        // Skill filter matches both slots in any order
        const skillFilters = [...filters.skill1, ...filters.skill2].filter(skill => skill !== "");
        const skillsMatch = skillFilters.length === 0 || skillFilters.every(skill =>
            character.skills.map(normalizeString).includes(skill)
        );

        // Combine all filters
        return nameMatch && hasMatchingCheckbox && rush1Match && rush2Match && rush3Match && rush4Match && skillsMatch;
    });

    // Display filtered characters
    if (filteredCharacters.length > 0) {
        filteredCharacters.forEach(character => {
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
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="7" style="text-align: center;">No characters found</td>`;
        characterList.appendChild(row);
    }
}

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