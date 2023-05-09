gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

// navbar closed

const showAnim = gsap
  .from("nav", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

// home sections

tl.fromTo(
  ".cta-home1",
  { y: "-50%", opacity: 0 },
  { y: 0, opacity: 1, duration: 2.5 }
)
  .fromTo(
    ".cta-home2",
    { y: "50%", opacity: 0 },
    { y: 0, opacity: 1, duration: 2.5 },
    "<35%"
  )
  .fromTo(
    ".cta-home3",
    { x: "50%", opacity: 0 },
    { x: 0, opacity: 1, duration: 2.5 },
    "<35%"
  )
  .fromTo(
    ".cta-button",
    { x: "50%", opacity: 0 },
    { x: 0, opacity: 1, duration: 2.5 },
    "<35%"
  )
  .fromTo(
    ".logo",
    { x: "-50%", opacity: 0 },
    { x: 0, opacity: 1, duration: 2.5 }
  )
  .fromTo(
    ".infographi-text",
    { y: "50%", opacity: 0 },
    { y: 0, opacity: 1, duration: 2.5 },
    "<"
  )
  .fromTo(
    ".Kategori",
    { y: "-50%", opacity: 0 },
    { y: 0, opacity: 1, duration: 2.5 },
    "<"
  );

// quotes sections

const tlQuotesSections = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "-25% center",
    end: "0% top",
    duration: 0.75,
    scrub: 4,
  },
});

tlQuotesSections
  .fromTo(".quotes2", { y: "50%", opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(".quotes3", { x: "50%", opacity: 0 }, { x: 0, opacity: 1 }, "<35%")
  .fromTo(".quotes1", { x: "-50%", opacity: 0 }, { x: 0, opacity: 1 }, "<35%")
  .fromTo(".about-container img", { opacity: 0 }, { opacity: 1 }, "<35%");

// kategori sections

const tlKategoriSections = gsap.timeline({
  scrollTrigger: {
    trigger: "#kategori",
    start: "-25% center",
    end: "0% top",
    duration: 0.75,
    scrub: 4,
  },
});

tlKategoriSections
  .fromTo(".cta1-title1", { y: "-50%", opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    ".cta2-title2",
    { y: "50%", opacity: 0 },
    { y: 0, opacity: 1 },
    "<35%"
  )
  .fromTo(".sub-title1", { y: "50%", opacity: 0 }, { y: 0, opacity: 1 }, "<35%")
  .fromTo(".kategori", { opacity: 0 }, { opacity: 1, duration: 4 }, "<35%");

// social media animation

const youtube = document.querySelector(".youtube");
const instagram = document.querySelector(".instagram");

youtube.addEventListener("click", () => {
  gsap.fromTo(".youtube", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
});

instagram.addEventListener("click", () => {
  gsap.fromTo(
    ".instagram",
    { scale: 1 },
    { scale: 0.9, yoyo: true, repeat: 1 }
  );
});
