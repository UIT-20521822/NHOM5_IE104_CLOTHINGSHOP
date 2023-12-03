// Tạo hiệu ứng xuất hiện thanh màu đen khi scroll
window.onscroll = function () {
  // Hiện thanh menu
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%, 0)";
  }
  // Ẩn lại thanh menu khi người dùng kéo lên lại
  else {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%, -100%)";
  }
};

// Truncate Card Title
window.addEventListener("load", function () {
  truncateCardTitle();
});

function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (var i = 0; i < cardList.length; i++) {
    var text = cardList[i].innerHTML;
    var newText = truncateString(text, 15);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

/* Sidebar Mini */
var toggleBtn = document.querySelector(".sidebarMini__button");
var sidebarMini = document.querySelector(".sidebarMini");
var switchBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});

switchBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("darkMode");
});

// PAYMENT
// Lấy tham chiếu đến nút "Đặt hàng"
var orderButton = document.getElementById("order-button");

// Gắn hành động xử lý sự kiện click vào nút "Đặt hàng"
orderButton.addEventListener("click", function () {
  // Hiển thị thông báo "Đặt hàng thành công"
  alert("Đặt hàng thành công");

  // Chuyển hướng về trang chủ
  window.location.href = "../index.html";
});

// Mã giảm giá
const showDiscountLink = document.getElementById("show-discount");
const overlay = document.getElementById("overlayPayment");
const closePopupButton = document.getElementById("close-popup");

showDiscountLink.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "flex";
});

closePopupButton.addEventListener("click", function () {
  overlay.style.display = "none";
});
