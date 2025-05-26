// navbar.js - Export the navbar HTML as a string
export const navbar = `
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">Adham Alaa El-din</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/history.html">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/projects.html">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/courses.html">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/certificates.html">Certificates</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/skills.html">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;


export function initNavbar() {
    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }