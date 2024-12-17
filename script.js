// Hiệu ứng tuyết rơi với particles.js
particlesJS("snowfall", {
  particles: {
    number: { value: 80 }, // Số lượng bông tuyết
    shape: {
      type: "image",
      image: {
        src: "image/snowflake.png", // Đường dẫn hình bông tuyết
        width: 20,
        height: 20
      }
    },
    opacity: { value: 0.8, random: true }, // Độ mờ của bông tuyết
    size: { value: 15, random: true }, // Kích thước bông tuyết
    move: { speed: 2, direction: "bottom", out_mode: "out" }, // Hiệu ứng rơi
    line_linked: { // Tắt các đường nối giữa các hạt
      enable: false
    }
  }
});




// Hiển thị thiệp và ẩn nút
function showCard() {
  const card = document.getElementById("card");
  const button = document.getElementById("show-wish-btn");
  const treeContainer = document.getElementById("tree-container");
  card.classList.remove("hidden");
  card.classList.add("animate__fadeIn");
  button.style.display = "none"; // Ẩn nút
  treeContainer.style.display = "none"; // Ẩn cây thông
}

// Đóng thiệp
function closeCard() {
  const card = document.getElementById("card");
  card.classList.add("hidden"); // Ẩn thiệp khi đóng
  const button = document.getElementById("show-wish-btn");
  const treeContainer = document.getElementById("tree-container");
  button.style.display = "inline-block"; // Hiển thị lại nút chúc mừng
  treeContainer.style.display = "block"; // Hiển thị lại cây thông

}

// Phát hoặc dừng nhạc
let isPlaying = false;
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "🎶 Phát nhạc";
  } else {
    bgMusic.play();
    musicBtn.textContent = "⏸️ Dừng nhạc";
  }
  isPlaying = !isPlaying;
}

function generateTrees() {
  const treeContainer = document.getElementById('tree-container');
  treeContainer.innerHTML = ''; // Xóa cây cũ nếu có
  
  const screenWidth = window.innerWidth - 70; // Chừa 150px bên phải
  const treeWidth = 80;
  const spacing = 0;
  const totalSlots = Math.floor(screenWidth / (treeWidth + spacing));

  for (let i = 0; i < totalSlots; i++) {
    const leftPosition = i * (treeWidth + spacing);

    const tree = document.createElement('div');
    tree.classList.add('tree');
    tree.style.left = `${leftPosition}px`;
    treeContainer.appendChild(tree);
  }
}


let screenWidth = window.innerWidth;  // Lấy chiều rộng màn hình
let screenHeight = window.innerHeight;  // Lấy chiều cao màn hình

function updateCardSize() {
  let card = document.getElementById('card');
  
  // Lấy kích thước màn hình
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  // Ví dụ: Chiều rộng thẻ card sẽ là 80% chiều rộng màn hình
  let cardWidth = screenWidth * 0.9;  
  // Chiều cao thẻ card sẽ là 70% chiều cao màn hình
  let cardHeight = screenHeight * 0.9;

  // Đặt chiều rộng và chiều cao cho thẻ card
  card.style.width = `${cardWidth}px`;
  card.style.height = `${cardHeight}px`;
	if (screenWidth <= 600) {
		card.style.marginBottom = `${(screenHeight * 0.15)}px`;  // 15% of window width
	}
}

// Gọi hàm khi tải trang và khi thay đổi kích thước màn hình
window.onload = updateCardSize;
window.onresize = updateCardSize;
window.onload = generateTrees;

function adjustCardStyle() {
  const card = document.querySelector('.card');
  const title = document.querySelector('.title');
  const message = document.querySelector('.message');
  const closeBtn = document.querySelector('.close-btn');
  const title1 = document.querySelector('.title-1');
  const screenWidth = window.innerWidth;

  // Điều chỉnh cho màn hình nhỏ (dưới 600px)
  if (screenWidth <= 600) {
    card.style.maxHeight = '80vh';  // Giảm chiều cao tối đa của card
    title.style.fontSize = '1rem';  // Cỡ chữ của title
    title1.style.fontSize = '1rem';  // Cỡ chữ của title
    message.style.fontSize = '1rem';  // Cỡ chữ của message
    closeBtn.style.fontSize = '0.8rem';  // Cỡ chữ của nút đóng
	card.style.marginBottom = `${(screenHeight * 0.15)}px`;  // 15% of window width	
  } else {
    // Điều chỉnh cho màn hình lớn hơn 600px
    card.style.maxHeight = '85vh';  // Chiều cao tối đa của card
    title.style.fontSize = '2rem';  // Cỡ chữ của title
    title1.style.fontSize = '2rem';  // Cỡ chữ của title
    message.style.fontSize = '1.8rem';  // Cỡ chữ của message
    closeBtn.style.fontSize = '1.5rem';  // Cỡ chữ của nút đóng
  }
}

// Gọi hàm điều chỉnh khi trang được tải hoặc khi kích thước cửa sổ thay đổi
window.addEventListener('resize', adjustCardStyle);
window.onload = generateTrees;

// Gọi một lần khi trang vừa được tải
adjustCardStyle();
window.onload = generateTrees;


//##########

// // Lấy phần tử hình ảnh và modal
// const img = document.getElementById('cardImage');
// const modal = document.getElementById('modal');
// const modalImg = document.getElementById('modalImage');
// const captionText = document.getElementById('caption');
// const closeBtn = document.getElementsByClassName('close')[0];

// // Khi người dùng nhấp vào ảnh, mở modal và hiển thị ảnh phóng to
// img.onclick = function() {
  // modal.style.display = 'block';
  // modalImg.src = this.src;  // Lấy src của ảnh và gán vào modal
  // captionText.innerHTML = this.alt;  // Lấy alt của ảnh và hiển thị dưới ảnh phóng to
// }

// // Khi người dùng nhấp vào nút đóng, đóng modal
// closeBtn.onclick = function() {
  // modal.style.display = 'none';
// }

// // Khi người dùng nhấp ra ngoài ảnh, đóng modal
// modal.onclick = function(event) {
  // if (event.target == modal) {
    // modal.style.display = 'none';
  // }
// }

// // Lấy phần tử cần căn giữa
// const modalContent = document.querySelector('.modal-content');

// // Cập nhật vị trí của modal-content khi modal được hiển thị
// function centerModal() {
  // // Lấy chiều cao và chiều rộng của modal-content
  // const modalContentHeight = modalContent.offsetHeight;
  // const modalContentWidth = modalContent.offsetWidth;

  // // Lấy chiều cao và chiều rộng của cửa sổ trình duyệt
  // const windowHeight = window.innerHeight;
  // const windowWidth = window.innerWidth;

  // // Căn giữa modal-content theo cả chiều ngang và chiều dọc
  // modalContent.style.position = 'absolute';
  // modalContent.style.top = `${(windowHeight - modalContentHeight) / 2}px`;
  // modalContent.style.left = `${(windowWidth - modalContentWidth) / 2}px`;
// }

// // Khi modal được mở, gọi hàm để căn giữa
// img.onclick = function() {
  // modal.style.display = 'block';
  // modalImg.src = this.src;  // Lấy src của ảnh và gán vào modal
  // captionText.innerHTML = this.alt;  // Lấy alt của ảnh và hiển thị dưới ảnh phóng to
  // centerModal();  // Căn giữa modal-content
// }

// // Khi người dùng thay đổi kích thước cửa sổ, gọi lại hàm căn giữa
// window.addEventListener('resize', centerModal);


//##########
// Lấy phần tử hình ảnh và modal
const img = document.getElementById('cardImage');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Khi người dùng nhấp vào ảnh, mở modal và hiển thị ảnh phóng to
img.onclick = function() {
  modal.style.display = 'block';
  modalImg.src = this.src;  // Lấy src của ảnh và gán vào modal
  captionText.innerHTML = this.alt;  // Lấy alt của ảnh và hiển thị dưới ảnh phóng to
  centerModal();  // Căn giữa modal-content và thay đổi kích thước
}

// Khi người dùng nhấp vào nút đóng, đóng modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Khi người dùng nhấp ra ngoài ảnh, đóng modal
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Lấy phần tử cần căn giữa
const modalContent = document.querySelector('.modal-content');

// Cập nhật vị trí của modal-content khi modal được hiển thị
function centerModal() {
  // Lấy chiều cao và chiều rộng của modal-content
  const modalContentHeight = modalContent.offsetHeight;
  const modalContentWidth = modalContent.offsetWidth;

  // Lấy chiều cao và chiều rộng của cửa sổ trình duyệt
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

 // Căn giữa modal-content theo cả chiều ngang và chiều dọc
  modalContent.style.position = 'absolute';

  // Nếu màn hình lớn hơn 600px, thay đổi kích thước ảnh và căn giữa
  if (windowWidth > 600) {
    // Tăng kích thước ảnh nếu màn hình lớn
    modalImg.style.width = "80%"; // Phóng to ảnh
    modalImg.style.height = "auto"; // Giữ tỉ lệ ảnh
    modalContent.style.right = "0px"; //`${(windowWidth) + }px`;
	 modalContent.style.left = "0px"; //`${(windowWidth) + }px`;
	 modalContent.style.top = "0px"; //`${(windowWidth) + }px`;

  } else {
    // Không thay đổi kích thước ảnh cho màn hình nhỏ
    modalImg.style.width = "100%"; // Để ảnh vừa với màn hình nhỏ
    modalImg.style.height = "auto"; // Giữ tỉ lệ ảnh
	 modalContent.style.top = `${(windowHeight - modalContentHeight) / 2}px`;
    // modalContent.style.left = `${(windowWidth - modalContentWidth) / 2}px`;
     modalContent.style.right = "0px"; //`${(windowWidth) + }px`;
	 modalContent.style.left = "0px"; //`${(windowWidth) + }px`;
  }

 
 
}

// Khi người dùng thay đổi kích thước cửa sổ, gọi lại hàm căn giữa
window.addEventListener('resize', centerModal);
window.onload = generateTrees;
