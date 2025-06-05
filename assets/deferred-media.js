class DeferredMedia extends HTMLElement {
    constructor() {
        super();
        this.querySelector('[id^="Deferred-Poster-"]')?.addEventListener('click', this.loadContent.bind(this));
    }

   loadContent() {
  if (!this.getAttribute('loaded')) {
    const templateContent = this.querySelector('template').content.cloneNode(true);
    const tempWrapper = document.createElement('div');
    tempWrapper.appendChild(templateContent);

    this.setAttribute('loaded', true);
    window.pauseAllMedia?.();

    const isMobile = window.innerWidth < 551;
    const elements = tempWrapper.querySelectorAll('video, model-viewer, iframe');

    elements.forEach(element => {
      if ((isMobile && element.classList.contains('slide-mb')) ||
          (!isMobile && element.classList.contains('slide-pc'))) {
        
        // Optional: force autoplay if it's iframe
        if (element.tagName === 'IFRAME') {
          const src = new URL(element.src);
          src.searchParams.set('autoplay', '1');
          src.searchParams.set('mute', '1');
          element.src = src.toString();
        }

        this.appendChild(element);
      }
    });
  }
}

}

customElements.define('deferred-media', DeferredMedia);








// class DeferredMedia extends HTMLElement {
//     constructor() {
//         super();
//         this.querySelector('[id^="Deferred-Poster-"]')?.addEventListener('click', this.loadContent.bind(this));
//     }

//     loadContent() {
//         if (!this.getAttribute('loaded')) {
//             const templateContent = this.querySelector('template').content.cloneNode(true);
//             const content = document.createElement('div');
//             content.appendChild(templateContent);

//             this.setAttribute('loaded', true);
//             window.pauseAllMedia();
            
//             const elements = content.querySelectorAll('video, model-viewer, iframe');
//             elements.forEach(element => this.appendChild(element));
//         }
//     }
// }

// customElements.define('deferred-media', DeferredMedia);

