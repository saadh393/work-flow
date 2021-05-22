export const scrollStories = () => {
  const card: HTMLElement | null = document.querySelector(".card-wrapper");
  if (card) {
    card.onwheel = (e) => {
      card.scrollTo({ top: 0, left: card.scrollLeft + e.deltaY });
    };
  }
};

export const SliderGrab = () => {
  const slider: HTMLElement | null = document.querySelector(".card-wrapper");
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  if (slider) {
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x: number = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }
};
