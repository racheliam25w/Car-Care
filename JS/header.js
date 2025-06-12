const headHTML = `

<h2 class="greet"> Hello, racheliam </h2>
<h1> Car Care </h1>
<label class="search">
            <button>
                <a href="#" onclick="toggleSearchInput()"><img src="../../Img/search.png" alt="Search"></a>
            </button>
            <span id="searchInputContainer" style="display:none;">
                <input type="text" id="searchInput" placeholder="Enter word to search">
                <button style="color: azure; border-style:solid;border-color: azure;"
                    onclick="searchAndHighlight()">Search</button>
            </span>
        
</label>
<label class="user">
    <a href="#" class="notActive"><img src="../../Img/user.png" alt="User Icon"></a>
</label>

`;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('head-container').innerHTML = headHTML;
});
