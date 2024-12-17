// Hiệu ứng tuyết rơi với particles.js
particlesJS("snowfall", {
  particles: {
    number: { value: 80 }, // Số lượng bông tuyết
    shape: {
      type: "image",
      image: {
        src: "image/pngegg.png", // Đường dẫn hình bông tuyết
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
  card.classList.remove("hidden");
  card.classList.add("animate__fadeIn");
  button.style.display = "none"; // Ẩn nút
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
