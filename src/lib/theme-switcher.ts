export class ThemeSwitcher {
  private theme: 'light' | 'dark'

  constructor() {
    const switchers = document.querySelectorAll('[data-id="theme-switcher"]')

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.theme = 'dark';
    }
    else
      this.theme = 'light';


    localStorage.setItem('theme', this.theme);

    switchers.forEach(switcher => {
      if (this.theme === 'light') {
        const icons = switcher.getElementsByTagName('svg');

        for (let i = 0; i < icons.length; i++)
          icons[i].classList.toggle('hidden');
      }

      switcher.addEventListener('click', () => {
        this.toggle(switcher as HTMLButtonElement);
      });
    });
  }

  toggle(switcher: HTMLButtonElement) {
    const icons = switcher.getElementsByTagName('svg');

    for (let i = 0; i < icons.length; i++)
      icons[i].classList.toggle('hidden');

    if (this.theme === 'light') {
      document.documentElement.classList.add('dark');
      this.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      this.theme = 'light';
    }

    localStorage.setItem('theme', this.theme);
  }
}
