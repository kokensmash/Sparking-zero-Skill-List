// Character data
const characters = [
// Gohan's
    { name: "GOHAN (ADULT) [BASE]", rushChains: ["flying kicks", "gut punch", "ki blast cannon", "gut punch"], skills: ["wild sense", "full power"] },
    { name: "GOHAN (ADULT) [SSJ]", rushChains: ["flying kicks", "gut punch", "ki blast cannon", "gut punch"], skills: ["explosive wave", "full power"] },
    { name: "GOHAN (ADULT) [SSJ2]", rushChains: ["flying kicks", "rolling hammer", "ki blast cannon", "gut punch"], skills: ["explosive wave", "instant spark"] },

// Vegeta's
    { 
        name: "VEGETA (SCOUTER)", 
        rushChains: ["gut punch", "Flying Kicks", "Rush Ki Wave", "gut punch"],
        skills: ["Explosive Wave", "Buff"]
    },
    { 
        name: "VEGETA (Z - EARLY) [BASE]", 
        rushChains: ["Ki Blast Cannon", "Rush Ki Wave", "Flying Kicks", "gut punch"],
        skills: ["Explosive Wave", "Instant Spark"]
    },
    { 
        name: "VEGETA (Z - EARLY) [SSJ]", 
        rushChains: ["Ki Blast Cannon", "gut punch", "Flying Kicks", "Rush Ki Wave"],
        skills: ["Explosive Wave", "Buff"]
    },
    { 
        name: "VEGETA (Z - EARLY) [SV]", 
        rushChains: ["blaster wave", "Rolling Hammer", "Rush Ki Wave", "gut punch"],
        skills: ["Explosive Wave", "Instant Spark"]
    },
    { 
        name: "VEGETA (Z - END) [BASE]", 
        rushChains: ["gut punch", "rush ki wave", "ki blast cannon", "gut punch"], 
        skills: ["afterimage", "buff"] 
    },
    { 
        name: "VEGETA (Z - END) [SSJ]", 
        rushChains: ["flying kicks", "gut punch", "rush ki wave", "ki blast cannon"], 
        skills: ["explosive wave", "buff"] 
    },
    { 
        name: "VEGETA (Z - END) [SSJ2]", 
        rushChains: ["flying kicks", "rolling hammer", "rush ki wave", "gut punch"], 
        skills: ["explosive wave", "wild sense"] 
    },
    { 
        name: "VEGETA (Z - END) [MAJIN]", 
        rushChains: ["gut punch", "gut punch", "Ki Blast Cannon", "Rush Ki Wave"],
        skills: ["Buff", "Instant Spark"]
    },
    { 
        name: "VEGETA (GT) [SSJ4]", 
        rushChains: ["Rush Ki Wave", "Rolling Hammer", "Ki Blast Cannon", "gut punch"],
        skills: ["Explosive Wave", "buff"]
    },
    { 
        name: "VEGETA (SUPER) [BASE]", 
        rushChains: ["Ki Blast Cannon", "gut punch", "Flying Kicks", "Rush Ki Wave"],
        skills: ["Explosive Wave", "instant spark"]
    },
    { 
        name: "VEGETA (SUPER) [SSJ]", 
        rushChains: ["gut punch", "Rush Ki Wave", "Ki Blast Cannon", "gut punch"],
        skills: ["buff", "Instant Spark"]
    },
    { 
        name: "VEGETA (SUPER) [SSJ GOD]", 
        rushChains: ["Flying Kicks", "gut punch", "Rush Ki Wave", "Ki Blast Cannon"],
        skills: ["Explosive Wave", "Instant Spark"]
    },
    { 
        name: "VEGETA (SUPER) [SSJ GOD SS]", 
        rushChains: ["Flying Kicks", "gut punch", "Rush Ki Wave", "gut punch"],
        skills: ["buff", "buff"]
    },
    { 
        name: "CABBA [BASE]", 
        rushChains: ["Flying Kicks", "Flying Kicks", "gut punch", "Ki Blast Cannon"],
        skills: ["Explosive Wave", "Full Power"]
    },
    { 
        name: "CABBA [SSJ]", 
        rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rush Ki Wave", "gut punch"],
        skills: ["Explosive Wave", "Wild Sense"]
    },
    { 
        name: "CABBA [SSJ2]", 
        rushChains: ["gut punch", "Ki Blast Cannon", "Rush Ki Wave", "Flying Kicks"],
        skills: ["Explosive Wave", "Instant Spark"]
    },
    { 
        name: "BABY VEGETA (GT)", 
        rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rush Ki Wave", "gut punch"],
        skills: ["Explosive Wave", "buff"]
    },
    { 
        name: "SUPER BABY 1 (GT)", 
        rushChains: ["Flying Kicks", "Rush Ki Wave", "Ki Blast Cannon", "gut punch"],
        skills: ["Afterimage", "buff"]
    },
    { 
        name: "SUPER BABY 2 (GT)", 
        rushChains: ["Flying Kicks", "gut punch", "Rolling Hammer", "Rush Ki Wave"],
        skills: ["Explosive Wave", "Full Power"]
    }
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