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

window.onload = generateTrees;

