export const handleSmoothScroll = (
  event: React.MouseEvent<HTMLAnchorElement>,
  id: string
): void => {
  event.preventDefault();
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
