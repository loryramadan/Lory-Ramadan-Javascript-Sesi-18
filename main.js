// items array & object
const menu = [
    {
        id: 1,
        kategori: "minuman",
        nama: "orange juice",
        harga: "Rp 10.000",
        img: "./assets/drinks-2.jpg"
    },
    {
        id: 2,
        kategori: "minuman",
        nama: "watermelon squash",
        harga: "Rp 10.000",
        img: "./assets/watermelon.jpg"
    },
    {
        id: 3,
        kategori: "minuman",
        nama: "melon juice",
        harga: "Rp 5000",
        img: "./assets/drinks-1.jpg",
    },
    {
        id: 4,
        kategori: "sarapan",
        nama: "omelete",
        harga: "Rp 5000",
        img: "./assets/breakfast-1.jpg",
    },
    {
        id: 5,
        kategori: "sarapan",
        nama: "special omelete",
        harga: "Rp 10.000",
        img: "./assets/breakfast-2.jpg",
    },
    {
        id: 6,
        kategori: "sarapan",
        nama: "bread",
        harga: "Rp 10.000",
        img: "./assets/bread.jpg",
    },
    {
        id: 7,
        kategori: "sarapan",
        nama: "pie",
        harga: "Rp 20.000",
        img: "./assets/pie.jpg",
    },
    {
        id: 8,
        kategori: "utama",
        nama: "pizza",
        harga: "Rp 150.000",
        img: "./assets/pizza.jpg",
    },
    {
        id: 9,
        kategori: "utama",
        nama: "burger",
        harga: "Rp 20.000",
        img: "./assets/burger.jpg",
    },
    {
        id: 10,
        kategori: "utama",
        nama: "spagetti",
        harga: "Rp 30.000",
        img: "./assets/spageti.jpg",
    },
    {
        id: 11,
        kategori: "utama",
        nama: "steak",
        harga: "Rp 100.000",
        img: "./assets/steak.jpg",
    },
];
// select parrent element
const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});
// filtering items
filterBtn.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        const kategori = e.currentTarget.dataset.id;
        const menuKategori = menu.filter((menuItem) => {
            if (menuItem.kategori === kategori){
                return menuItem;
            };
        });
        if(kategori === 'semua'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuKategori);
        };
    });
});




function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((key) => {
            return `<div class="card">
                        <img src=${key.img} alt=${key.nama}/>
                        <div class="description-card">
                            <header class="title">
                                <h4>${key.nama}</h4>
                                <h4 class="harga">${key.harga}</h4>
                            </header>
                        </div>
                    </div>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}