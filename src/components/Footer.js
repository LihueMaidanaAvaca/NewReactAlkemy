import '../css/bootstrap.min.css'

export default function Footer () {
    return (
        <footer className="bg-dark text-light py-3">
        <div className="container">
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/" className="text-light" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-center">Copyright Alkemy Challenge</p>
        </div>
      </footer>
    )
}