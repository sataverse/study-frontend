export function preventScroll() {
  const currentScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${currentScrollY}rem`;
  return currentScrollY;
}

export function allowScroll(prevScrollY: number) {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  window.scrollTo(0, prevScrollY);
}
