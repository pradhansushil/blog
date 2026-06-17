// footer-component.js
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <small>&copy; 2025 The Dev Log. All rights reserved.</small>
      <p>
        Want to reach out?
        <a
          href="https://pradhansushil.github.io/portfolio/#contact-form"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact me via my portfolio (opens in a new tab)"
        >
          Contact me via my portfolio
        </a>
      </p>
    </footer>
    `;
    this.querySelector("#footer-year").textContent = new Date().getFullYear();
  }
}

customElements.define("site-footer", SiteFooter);
