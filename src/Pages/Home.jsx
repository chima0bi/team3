import "./Home.css";
// import hero-img from "../assets/img/hero-bg-img.jpg";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-inside">
          <h2 className="hero-text">Welcome to Wayne Enterprises</h2>
          <p className="hero-text-2">Your comfort is our happiness...</p>
          <a href="/about" className="hero-link">
            Learn More
          </a>
        </div>
      </div>
      <div className="home-quick-links">
        <ul>
          <li>
            <a href="#news-and-events">News and Events</a>
          </li>
          <li>
            <a href="#promotions">Promotions</a>
          </li>
          <li>
            <a href="#sdg">SDG</a>
          </li>
          <li>
            <a href="#company-data">Company Data</a>
          </li>
          <li>
            <a href="#progress-report">Progress Report</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#good-to-know">Good To Know</a>
          </li>
        </ul>
      </div>
      <section className="home-body">
        <div id="news-and-events">
          <h3 className="section-title">News and Events</h3>
          <div className="news-cards">
            <div className="news-card">
              <h3>"Season 2 Angel Investment Round kicks off Nov 15th..."</h3>
              <p>
                Wayne Enterprises has announced the launch of its Season 2 Angel
                Investment Round, beginning November 15th, 2025. This round aims
                to empower early-stage startups across Africa, focusing on
                fintech, sustainable textiles, and digital entertainment.
                Selected startups will receive funding, mentorship, and access
                to Wayne’s innovation ecosystem.
              </p>
            </div>
            <div className="news-card">
              <h3>
                "Wayne Textiles Launches EcoFiber™: The Future of Sustainable
                Fashion..."
              </h3>
              <p>
                In a bold step toward sustainability, Wayne Textiles, a
                subsidiary of Wayne Enterprises, has unveiled EcoFiber™, a
                groundbreaking fabric made from recycled plant fibers and
                biodegradable materials. The innovation promises durability,
                comfort, and minimal carbon footprint — setting a new benchmark
                in the global textile market.
              </p>
            </div>
            <div className="news-card">
              <h3>
                "Wayne Financial Expands Digital Banking Services Across West
                Africa..."
              </h3>
              <p>
                Wayne Financial, the company’s fintech division, is
                revolutionizing access to banking with its WaynePay App 3.0. The
                new version introduces AI-driven savings recommendations,
                instant cross-border payments, and 24/7 smart customer support.
              </p>
            </div>
            <div className="news-card">
              <h3>
                " Wayne Media Studios Breaks Streaming Record with “Legacies
                Reborn..."
              </h3>
              <p>
                Wayne Media Studios has hit a major milestone as its original
                sci-fi series “Legacies Reborn” surpassed 200 million global
                streams within its first month of release. The series, produced
                in Lagos and Los Angeles, showcases Wayne Media’s commitment to
                global storytelling with African roots.
              </p>
            </div>
            <div className="news-card">
              <h3>
                "Wayne Foundation Expands ‘Meals of Hope’ Charity Program..."
              </h3>
              <p>
                The Wayne Foundation, the philanthropic arm of Wayne
                Enterprises, has announced the expansion of its Meals of Hope
                initiative to 10 new cities across Nigeria. The program,
                launched in 2022, has already provided over 5 million meals to
                underserved communities.
              </p>
            </div>
            <div className="news-card">
              <h3>"Season 2 Angel Investment Round kicks off Nov 15th..."</h3>
              <p>
                Wayne Enterprises has announced the launch of its Season 2 Angel
                Investment Round, beginning November 15th, 2025. This round aims
                to empower early-stage startups across Africa, focusing on
                fintech, sustainable textiles, and digital entertainment.
                Selected startups will receive funding, mentorship, and access
                to Wayne’s innovation ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div id="promotions">
          <h3 className="section-title">Promotions</h3>
          <div className="promote-cards">
            <div className="promote-card">
              <h3>"Season 2 Angel Investment Round kicks off Nov 15th..."</h3>
              <p>
                Wayne Enterprises has announced the launch of its Season 2 Angel
                Investment Round, beginning November 15th, 2025. This round aims
                to empower early-stage startups across Africa, focusing on
                fintech, sustainable textiles, and digital entertainment.
                Selected startups will receive funding, mentorship, and access
                to Wayne’s innovation ecosystem.
              </p>
            </div>
            <div className="promote-card">
              <h3>
                "Wayne Textiles Launches EcoFiber™: The Future of Sustainable
                Fashion..."
              </h3>
              <p>
                In a bold step toward sustainability, Wayne Textiles, a
                subsidiary of Wayne Enterprises, has unveiled EcoFiber™, a
                groundbreaking fabric made from recycled plant fibers and
                biodegradable materials. The innovation promises durability,
                comfort, and minimal carbon footprint — setting a new benchmark
                in the global textile market.
              </p>
            </div>
            <div className="promote-card">
              <h3>
                "Wayne Financial Expands Digital Banking Services Across West
                Africa..."
              </h3>
              <p>
                Wayne Financial, the company’s fintech division, is
                revolutionizing access to banking with its WaynePay App 3.0. The
                new version introduces AI-driven savings recommendations,
                instant cross-border payments, and 24/7 smart customer support.
              </p>
            </div>
            <div className="promote-card">
              <h3>
                " Wayne Media Studios Breaks Streaming Record with “Legacies
                Reborn..."
              </h3>
              <p>
                Wayne Media Studios has hit a major milestone as its original
                sci-fi series “Legacies Reborn” surpassed 200 million global
                streams within its first month of release. The series, produced
                in Lagos and Los Angeles, showcases Wayne Media’s commitment to
                global storytelling with African roots.
              </p>
            </div>
            <div className="promote-card">
              <h3>
                "Wayne Foundation Expands ‘Meals of Hope’ Charity Program..."
              </h3>
              <p>
                The Wayne Foundation, the philanthropic arm of Wayne
                Enterprises, has announced the expansion of its Meals of Hope
                initiative to 10 new cities across Nigeria. The program,
                launched in 2022, has already provided over 5 million meals to
                underserved communities.
              </p>
            </div>
            <div className="promote-card">
              <h3>"Season 2 Angel Investment Round kicks off Nov 15th..."</h3>
              <p>
                Wayne Enterprises has announced the launch of its Season 2 Angel
                Investment Round, beginning November 15th, 2025. This round aims
                to empower early-stage startups across Africa, focusing on
                fintech, sustainable textiles, and digital entertainment.
                Selected startups will receive funding, mentorship, and access
                to Wayne’s innovation ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
