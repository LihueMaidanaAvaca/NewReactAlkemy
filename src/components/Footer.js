import '../css/bootstrap.min.css'
import '../css/footer.css'

export default function Footer () {
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
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
          <p className="text-center mb-0">Copyright Alkemy Challenge</p>
        </div>
      </footer>
    )
}