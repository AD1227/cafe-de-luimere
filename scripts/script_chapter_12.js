/**
 * first creating an array of object for menu items
 */

var menuItems = [
  // Coffee
  {
    name: "Espresso",
    category: "coffee",
    price: 9,
    image: "images/espresso.jpeg",
  },
  {
    name: "Americano",
    category: "coffee",
    price: 9,
    image: "images/americano_misto.jpeg",
  },
  { name: "Latte", category: "coffee", price: 9, image: "images/latte.jpeg" },
  {
    name: "Cappuccino",
    category: "coffee",
    price: 10,
    image: "images/capuccino.jpeg",
  },
  {
    name: "Matcha",
    category: "coffee",
    price: 11,
    image: "images/download (4).jpeg",
  },

  // Tea
  {
    name: "Green Tea",
    category: "tea",
    price: 7,
    image: "images/thai-green-tea-feature.png",
  },
  {
    name: "Jasmine Tea",
    category: "tea",
    price: 7,
    image: "images/jasmine-tea.jpeg",
  },
  {
    name: "Earl Grey",
    category: "tea",
    price: 8,
    image: "images/Vanilla-Earl-Grey-Tea.jpeg",
  },
  {
    name: "Raspberry Tea",
    category: "tea",
    price: 8,
    image: "images/raspberry-iced-tea-540x720.jpg",
  },

  // Fresh Drinks
  {
    name: "Hot Chocolate",
    category: "fresh-drinks",
    price: 8,
    image: "images/hot-chocolate.jpeg",
  },
  {
    name: "Milkshake",
    category: "fresh-drinks",
    price: 10,
    image: "images/milkshake.jpeg",
  },
  {
    name: "Smoothie",
    category: "fresh-drinks",
    price: 9,
    image: "images/smothie.jpeg",
  },
  {
    name: "Lemonade",
    category: "fresh-drinks",
    price: 6,
    image: "images/thai-tea-lemonade-6.jpg",
  },

  // Desserts
  {
    name: "Chocolate Cake",
    category: "desserts",
    price: 8,
    image: "images/easy_chocolate_cake_slice.jpeg",
  },
  {
    name: "Carrot Cake",
    category: "desserts",
    price: 8,
    image: "images/CarrotCake_Feature-500x500.jpeg",
  },
  {
    name: "Cheese Cake",
    category: "desserts",
    price: 9,
    image: "images/cheese-cake.jpg",
  },
  {
    name: "Pumpkin Pie",
    category: "desserts",
    price: 7,
    image: "images/detail_Pumpkin_Pie_2022.jpg",
  },
  {
    name: "Pecan Pie",
    category: "desserts",
    price: 7,
    image: "images/pecan-pie.jpeg",
  },

  // Frappe
  {
    name: "Caramel Frappé",
    category: "frappe",
    price: 12,
    image: "images/caramel-frappe.jpeg",
  },
  {
    name: "Mocha Frappé",
    category: "frappe",
    price: 12,
    image: "images/mocha=frappe.jpeg",
  },
  {
    name: "Caramel Ribbon Crunch Frappé",
    category: "frappe",
    price: 13,
    image: "images/caramel-ribbon-crunch.jpeg",
  },

  // Snacks
  {
    name: "French Fries",
    category: "snacks",
    price: 5,
    image: "images/french-fries.jpeg",
  },
  {
    name: "Buffalo Wings",
    category: "snacks",
    price: 9,
    image: "images/buffalo-wings.jpeg",
  },
  { name: "Pizza", category: "snacks", price: 11, image: "images/pizza.jpeg" },
];

var activeFilter = "all";

function getFiltereditem() {
  return menuItems.filter(function (item) {
    return activeFilter == "all" || item.category == activeFilter;
  });
}

function renderMenu() {
  var $tbody = $("#menu-tbody");
  $tbody.empty(); // clearing any existing row in menu-tbody

  var items = getFiltereditem();

  items.forEach(function (item) {
    /**
     * this foreach methond of filtering goes to every object on the array
     * and load them to the menu-tbody container on index file
     */

    var row =
      "<tr id='" +
      item.category +
      "'>" +
      "<td><img src='" +
      item.image +
      "'/></td>" +
      "<td>" +
      item.name +
      "</td>" +
      "<td>$" +
      item.price +
      "</td>" +
      "</tr>";
    $tbody.append(row); // add the row to the menu-tbody contaienr in index file
  });
}
renderMenu();

$(".filter-btn").on("click", function () {
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");

  activeFilter = $(this).data("filter");
  renderMenu();
});

$("#menu-search").on("input", function () {
  var query = $(this).val().toLowerCase();
  var results = getFiltereditem().filter(function (item) {
    return item.name.toLocaleLowerCase().includes(query);
  });

  var $tbody = $("#menu-tbody");
  $tbody.empty();
  results.forEach(function (item) {
    var row =
      "<tr id='" +
      item.category +
      "'>" +
      "<td><img src='" +
      item.image +
      "'/></td>" +
      "<td>" +
      item.name +
      "</td>" +
      "<td>$" +
      item.price +
      "</td>" +
      "</tr>";
    $tbody.append(row);
  });
});

$("#menu-sort").on("change", function () {
  var sort = $(this).val();
  var sorted = getFiltereditem().slice(); // this code is to copy the array

  if (sort === "price-asc") {
    sorted.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (sort === "price-desc") {
    sorted.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  if (sort === "name-asc") {
    sorted.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  var $tbody = $("#menu-tbody");
  $tbody.empty();
  sorted.forEach(function (item) {
    var row =
      "<tr id='" +
      item.category +
      "'>" +
      "<td><img src='" +
      item.image +
      "'/></td>" +
      "<td>" +
      item.name +
      "</td>" +
      "<td>$" +
      item.price +
      "</td>" +
      "</tr>";
    $tbody.append(row);
  });
});
