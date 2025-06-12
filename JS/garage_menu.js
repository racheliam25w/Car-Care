const menuHTML = `
<nav class="menu">
    <ul>
        <li><a href="../../index.html">Home</a></li>
        <li><a href="../../includes/php/Schedule.php">Schedule</a></li>
        <li><a href="../../includes/html/Maintenance.html">Maintenance</a></li>
        <li class="has-submenu">
            <a href="../../includes/html/Garage.html">Garage</a>
            <ul class="submenu">
                <li><a href="#" class="garage-option" data-target="1">North</a></li>
                <li><a href="#" class="garage-option" data-target="2">Center</a></li>
                <li><a href="#" class="garage-option" data-target="3">South</a></li>
            </ul>
        </li>
        <li class="has-submenu">
            <a href="../../includes/html/Tutorial.html">Tutorial</a>
            <ul class="submenu">
                <li class="submenu-category">
                    <span class="submenu-category-title">Engine Maintenance</span>
                    <ul class="submenu-links">
                        <li><a href="../../includes/html/Tutorial.html#1">Air cabin filter</a></li>
                        <li><a href="../../includes/html/Tutorial.html#2">Fluids</a></li>
                        <li><a href="../../includes/html/Tutorial.html#3">Air filter</a></li>
                        <li><a href="../../includes/html/Tutorial.html#5">AC</a></li>
                        <li><a href="../../includes/html/Tutorial.html#6">Brakes</a></li>
                        <li><a href="../../includes/html/Tutorial.html#9">Oil Changes</a></li>
                    </ul>
                </li>
                <li class="submenu-category">
                    <span class="submenu-category-title">Car Exterior Care</span>
                    <ul class="submenu-links">
                        <li><a href="../../includes/html/Tutorial.html#4">Wash and Wax</a></li>
                        <li><a href="../../includes/html/Tutorial.html#8">Headlights</a></li>
                        <li><a href="../../includes/html/Tutorial.html#10">Wiper Blades</a></li>
                    </ul>
                </li>
                <li class="submenu-category">
                    <span class="submenu-category-title">Tire Maintenance</span>
                    <ul class="submenu-links">
                        <li><a href="../../includes/html/Tutorial.html#7">Tire tread</a></li>
                        <li><a href="../../includes/html/Tutorial.html#9">Tire pressure</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</nav>
`;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-container').insertAdjacentHTML('beforeend', menuHTML);

    const menuContainer = document.querySelector('.menu');

    menuContainer.addEventListener('click', function (e) {
        const target = e.target;
        if (target.classList.contains('garage-option')) {
            e.preventDefault();
            const garageOptions = document.querySelectorAll('.garage-option');
            const tables = document.querySelectorAll('.content table');

            garageOptions.forEach(option => {
                if (option === target) {
                    const dataTarget = option.getAttribute('data-target');
                    tables.forEach(table => {
                        if (table.id === dataTarget) {
                            table.parentElement.classList.remove('hidden');
                        } else {
                            table.parentElement.classList.add('hidden');
                        }
                    });
                }
            });
        }
    });
});


