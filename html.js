document.addEventListener("DOMContentLoaded", function() {
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const sidebarKanan = document.getElementById('sidebarKanan');
    
    toggleSidebarBtn.addEventListener('click', function() {
      sidebarKanan.classList.toggle('active');
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    
    closeSidebarBtn.addEventListener('click', function() {
      document.getElementById('sidebarKanan').classList.remove('active');
    });
  });
  