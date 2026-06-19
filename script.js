// gentle reveal-on-scroll for every section
document.querySelectorAll("section:not(.hero)").forEach((s) => s.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// pause the memory video when it scrolls out of view (nice on mobile)
const video = document.getElementById("memoryVideo");
if (video) {
  const vio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting && !video.paused) video.pause();
      });
    },
    { threshold: 0.4 }
  );
  vio.observe(video);
}
