class SkipToContent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <style>
      #skipToContentButton {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 9999;
      }

      #skipToContentButton:focus {
        top: 0;
      }
    </style>

    <button class="btn btn-danger" aria-label="menuju konten" id="skipToContentButton">Menuju Konten</button>
    `;

    const skipToContentButton = document.querySelector('#skipToContentButton');

    skipToContentButton.addEventListener('click', () => {
      document.querySelector('#mainContent').focus();
    });
  }
}

customElements.define('skip-to-content', SkipToContent);
