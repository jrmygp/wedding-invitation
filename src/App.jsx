import { Button, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./App.css";

function App() {
  return (
    <div className="page-container">
      <section className="section1-container">
        <div className="text-header">
          <h1 className="wedding-of">THE WEDDING OF</h1>
          <h2 className="names">Jeremy & Mariska</h2>
          <h2 className="date">Sunday, 3 December 2023</h2>
        </div>

        <img src="../src/assets/open-veil.jpeg" className="header-image" alt="jeremy-mariska-invitation-image" />
      </section>

      <section className="section2-container">
        <h2 className="bible-verse">2 Peter 1 : 5 - 7</h2>
        <h2 className="bible-says">
          For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge; and to
          knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness,
          mutual affection; and to mutual affection, love.
        </h2>
      </section>

      <section className="section3-container">
        <div className="bride-groom-container">
          <h2 className="bride">Bride and</h2>
          <h2 className="groom">Groom</h2>
        </div>

        <div className="groom-profile">
          <img src="../src/assets/jeremy.jpeg" alt="jeremy" className="groom-image" />
          <div className="profile-detail">
            <p className="name">Jeremy Gerald Puglisi</p>
            <p className="family-text">Putra ketiga dari:</p>
            <p>Yosef Yuli Cahyono Puglisi</p>
            <p>Maria Leo Korua Puglisi</p>
            <Link href="/">
              <Button
                startIcon={<InstagramIcon />}
                sx={{
                  bgcolor: "#4a492a",
                  "&:hover": {
                    bgcolor: "#4a492a",
                  },
                  color: "white",
                }}
              >
                Jeremy
              </Button>
            </Link>
          </div>
        </div>

        <div className="bride-profile">
          <img src="../src/assets/ika.jpeg" alt="mariska" className="bride-image" />
          <div className="profile-detail">
            <p className="name">Mariska Angel Lumintaintang</p>
            <p className="family-text">Putri pertama dari:</p>
            <p>Luther Lumintaintang</p>
            <p>Inge Pesik</p>
            <Link href="/">
              <Button
                startIcon={<InstagramIcon />}
                sx={{
                  bgcolor: "#4a492a",
                  "&:hover": {
                    bgcolor: "#4a492a",
                  },
                  color: "white",
                }}
              >
                Mariska
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
