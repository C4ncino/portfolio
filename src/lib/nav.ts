export class NavbarMenu {
  private openButton: HTMLButtonElement;
  private linkList: HTMLUListElement;
  private isOpen = false;

  constructor() {
    this.openButton = document.getElementById("nav-toggle") as HTMLButtonElement;

    if (this.openButton instanceof HTMLButtonElement)
      this.openButton.addEventListener("click", () => this.toggle());

    this.linkList = document.getElementById("nav-menu") as HTMLUListElement;
    this.linkList.style.animationDuration = "500ms";

    const links = this.linkList.getElementsByTagName("li");
    for (let i = 0; i < links.length; i++)
      links[i].style.animationDelay = i * 100 + "ms";


    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) {
      const links = this.linkList.getElementsByTagName("li");

      for (let i = 0; i < links.length; i++) {
        links[i].style.animationDelay = (links.length - 1 - i) * 100 + "ms";
        links[i].classList.remove("animate-fade-in");
        links[i].classList.add("animate-fade-out");
      }


      const time = links.length * 100 + 500;

      setTimeout(() => {
        this.linkList.classList.remove("animate-fade-in");
        this.linkList.classList.add("animate-fade-out");

        setTimeout(() => {
          this.linkList.classList.add("hidden");
          this.linkList.classList.remove("flex");
          this.linkList.classList.add("animate-fade-in");
          this.linkList.classList.remove("animate-fade-out");
        }, 500)

        const icons = this.openButton.children;

        for (let i = 0; i < icons.length; i++)
          icons[i].classList.toggle("hidden");

        for (let i = 0; i < links.length; i++) {
          links[i].style.animationDelay = i * 100 + "ms";
          links[i].classList.remove("animate-fade-out");
          links[i].classList.add("animate-fade-in");
        }
      }, time);

      this.isOpen = false;

      return;
    }

    this.linkList.classList.remove("hidden");
    this.linkList.classList.add("flex");

    const icons = this.openButton.children;

    for (let i = 0; i < icons.length; i++)
      icons[i].classList.toggle("hidden");

    this.isOpen = true;
  }
}
