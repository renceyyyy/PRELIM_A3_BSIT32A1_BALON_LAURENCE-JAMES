import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          LYCEUM OF ALABANG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                About LOA
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Others
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#academics">
                    Academics
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a className="dropdown-item" href="#admission">
                    Admission
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#projects">
                    Admin and Offices
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                Contacts
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="py-5 text-center"
      style={{ width: "100%", backgroundColor: "#273c75" }} // Light blue background
    >
      <div className="container">
        <h1>LYCEUM OF ALABANG EDUCATIONAL STATEMENT</h1>
        <p>
          <b>PHILISOPHY</b>
        </p>
        <p>
          An institution that provides quality and relevant instruction and
          innovation for the next generation to improve the lives of
          individuals; physically, emotionally, morally, and spiritually adhere
          to the principle of God. “I will instruct you and teach in the way you
          should go; I will counsel you with my loving eyes on you.” – Psalm
          32:8
        </p>
        <p>
          <b>VISION</b>
        </p>
        <p>
          Lyceum of Alabang envisions becoming one of the nation’s leading
          educational institutions involved in the pursuit and advancement of
          knowledge, skills, and values for personal, community and national
          development.
        </p>
        <p>
          <b>MISSION</b>
        </p>
        <p>
          Lyceum of Alabang shall provide world-class education and training
          through competent personnel, high-end facilities, advanced technology,
          and equipment and accredited curricula of industry-based courses.
        </p>
        <p>
          <b>QUALITY POLICY</b>
        </p>
        <p>
          We, at the Lyceum of Alabang, commit ourselves to exceed the
          expectations of our stakeholders through continual improvement for
          effective and efficient provision of quality education and training.
          We will ensure that all our academic and non-academic processes and
          activities are aligned with their voice.
        </p>
      </div>
    </section>
  );
}

function Admission() {
  return (
    <section
      id="admission"
      className="py-5"
      style={{ backgroundColor: "#273c75" }} // Light cyan background
    >
      <div className="container">
        <h3>
          <b>Admission</b>
        </h3>
        <ul>
          <li>
            <b>FRESHMEN:</b>
          </li>
          <ul>
            <li>Photocopy of latest PSA birth certificate</li>
            <li>Original copy of Form 138 (Report Card)</li>
            <li>Original Certificate of Good Moral Character</li>
            <li>Long brown and plastic envelope (2 pcs.)</li>
            <li>2×2 picture (4 pcs. – white/blue background)</li>
          </ul>

          <li>
            <b>TRANSFEREES:</b>
          </li>
          <ul>
            <li>Certificate of Honorable Dismissal</li>
            <li>Copy of Grades with subject description for pre-evaluation</li>
            <li>Original Certificate of Good Moral Character</li>
            <li>Long brown and plastic envelope (2 pcs.)</li>
            <li>2×2 picture (4 pcs. – white/blue background)</li>
          </ul>

          <li>
            <b>FOR POST GRADUATE PROGRAM:</b>
          </li>
          <ul>
            <li>Transcript of Record (Original)</li>
            <li>Passport size picture (4 pcs. – white/blue background)</li>
            <li>Long brown and plastic envelope (2 pcs.)</li>
          </ul>

          <li>
            <b>FOREIGN STUDENTS:</b>
          </li>
          <ul>
            <li>
              Student VISA or Special Study Permit issued by the Bureau of
              Immigration
            </li>
            <li>Photocopy of passport</li>
            <li>Birth Certificate</li>
            <li>Long brown and plastic envelope (2 pcs.)</li>
            <li>2×2 picture (4 pcs. – white/blue background)</li>
          </ul>
        </ul>
      </div>
    </section>
  );
}

function Academics() {
  return (
    <section
      id="academics"
      className="py-5"
      style={{ backgroundColor: "#273c75" }} // Light cyan background
    >
      <div className="container">
        <h2>PROGRAM OFFERING</h2>
        <p>
          <p>
            <b>Basic Education</b>
          </p>
          <ul>
            <li>Complete Elementary Program: Kindergarten to Grade 6</li>
            <li>Junior High School: Grade 7 to Grade 10</li>
            <li>Senior High School: Grade 11 to Grade 12</li>
            <p>
              <b>Academic Tracks</b>
            </p>
            <li>
              Science, Technology, Engineering, and Mathematics (STEM) Strand
            </li>
            <li>Accountancy, Business, and Management (ABM) Strand</li>
            <li>Humanities and Social Sciences (HUMMS) Strand</li>
            <li>General Academic Strand (GAS) Strand</li>
            <li>Information and Communication Technology (ICT) Strand</li>
            <li>Home Economics (HE) Strand</li>
            <li>Industrial Arts (IA) Strand</li>
            <li>
              <b>College of Real Estate Management</b>
            </li>
            <ul>
              <li>Bachelor of Science in Real Estate Management</li>
            </ul>

            <li>
              <b>College of Tourism and Hospitality Management</b>
            </li>
            <ul>
              <li>Bachelor of Science in Tourism Management</li>
              <li>Bachelor of Science in Hospitality Management</li>
              <li>
                <b>College of Business Management Education</b>
              </li>
              <ul>
                <li>Bachelor of Science in Accountancy</li>
                <li>Bachelor of Science in Custom Administration</li>
                <li>Bachelor of Science in Business Administration</li>
                <ul>
                  <li>Major in Marketing Management</li>
                  <li>Major in Financial Management</li>
                  <li>Major in Human Resource Development Management</li>
                </ul>
              </ul>

              <li>
                <b>College of Criminal Justice</b>
              </li>
              <ul>
                <li>Bachelor of Science in Criminology</li>
              </ul>

              <li>
                <b>College of Computer Studies</b>
              </li>
              <ul>
                <li>Bachelor of Science in Computer Science</li>
                <li>Bachelor of Science in Information Technology</li>
              </ul>

              <li>
                <b>College of Engineering</b>
              </li>
              <ul>
                <li>Bachelor of Science in Industrial Engineering</li>
                <li>Bachelor of Science in Computer Engineering</li>
              </ul>

              <li>
                <b>College of Arts and Sciences</b>
              </li>
              <ul>
                <li>Bachelor of Science in Psychology</li>
              </ul>

              <li>
                <b>College of Education</b>
              </li>
              <ul>
                <li>Bachelor of Elementary Education</li>
                <li>Bachelor of Secondary Education</li>
                <ul>
                  <li>Major in English</li>
                  <li>Major in Filipino</li>
                  <li>Major in Mathematics</li>
                </ul>
                <li>Bachelor of Technical Vocational for Teacher Education</li>
              </ul>
            </ul>
          </ul>
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#273c75" }} // Light orange background
    >
      <div className="container">
        <h3>Admin and Office</h3>
        <p>
          <ul>
            <li>Registrar Office</li>
            <li>Guidance Office</li>
            <li>Clinic and Dental Office</li>
            <li>Library</li>
            <li>Office of Student Affairs</li>
            <li>Carrer Placement Office</li>
            <li>Research, Development and Extension Office</li>
            <li>Human Resource Office</li>
            <li>Information Technology Mnanagement Office</li>
            <li>Finance</li>
            <li>Physical Facilities Management Office</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#273c75" }} // Light yellow background
    >
      <div className="container">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur velit magna, id porttitor nulla gravida et.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Academics />
      <Admission />
      <Skills />
      <Contact />
    </div>
  );
}
