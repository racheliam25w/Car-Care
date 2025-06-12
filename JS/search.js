/* This script create the search option in the page and highligh if we the work was found without counter */

function searchAndHighlight() {
    var searchInput = document.getElementById('searchInput').value.trim(); // Get the value of the input
    if (searchInput === '') {
        alert('You have to enter a word in order to search something');
        return;
    }

    var body = document.body;
    var content = body.innerHTML;
    var regex = new RegExp(searchInput, 'gi');
    // Create a regular expression with global and case-insensitive flags

    // Replace all occurrences of the search term with a highlighted version
    var highlightedContent = content.replace(regex, function (match) {
        return '<span class="highlight">' + match + '</span>';
    });

    // Update the body with the highlighted content
    body.innerHTML = highlightedContent;

    var highlightedElements = document.querySelectorAll('.highlight');
    if (highlightedElements.length === 0) {
        alert('Word not found on the page.');
    }
}

function toggleSearchInput() {
    var searchInputContainer = document.getElementById('searchInputContainer');
    if (searchInputContainer.style.display === 'none' || searchInputContainer.style.display === '') {
        searchInputContainer.style.display = 'block';
    } else {
        searchInputContainer.style.display = 'none';
        removeHighlights(); // Remove highlights when search input is closed
    }
}

function removeHighlights() {
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function (element) {
        element.outerHTML = element.innerHTML; // Replace the highlighted element with its contents
    });
}

