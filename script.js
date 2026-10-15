document.addEventListener("DOMContentLoaded", () => {
  // Mobile Sidebar Drawer
  const menuToggle = document.getElementById("menuToggle");
  const drawerClose = document.getElementById("drawerClose");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarDrawer = document.getElementById("sidebarDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    sidebarOverlay.style.display = "block";
    setTimeout(() => {
      sidebarDrawer.classList.add("active");
    }, 10);
  }

  function closeDrawer() {
    sidebarDrawer.classList.remove("active");
    setTimeout(() => {
      sidebarOverlay.style.display = "none";
    }, 300);
  }

  if (menuToggle) menuToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Accordion FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((other) => {
        other.classList.remove("active");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
