// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Remove the '#'
    const target = document.getElementById(targetId);

    if (target) {
      const targetPosition = target.offsetTop; // Get the target element's position relative to the top of the offsetParent node
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
