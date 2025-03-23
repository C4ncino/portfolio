export class LangSwitcher {
  constructor() {
    const selectors = document.querySelectorAll('[data-id="lang-switcher"]');

    selectors.forEach(selector => {
      selector.addEventListener('change', (e) => {
        this.onChange(e);
      });
    })
  }

  onChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const href = target.options[target.selectedIndex].value;

    const link = document.createElement("a");
    link.href = href;
    link.target = "_self";

    document.body.appendChild(link);
    link.click();
  }
} 
