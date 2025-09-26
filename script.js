window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  music.volume = 0.50; // volume bem baixinho

  // Tenta tocar automaticamente
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("Autoplay bloqueado, aguardando interação do usuário.");

      // Cria botão para liberar som
      const btn = document.createElement('button');
      btn.textContent = "🎵 Tocar Música";
      btn.id = "play-btn";
      document.querySelector('.card').appendChild(btn);

      btn.addEventListener('click', () => {
        music.play();
        btn.style.display = 'none';
      });
    });
  }
});
