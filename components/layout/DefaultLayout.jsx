import Meta from "./components/Meta";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function DefaultLayout(props) {
  const { title, children } = props;

  return (
    <div className="default-layout">
      <Meta
        pageTitle={title}
        description="Appalachian post-punk with undeniable 90s influence"
      />

      <Navbar />

      <main className="main" id="#main" tabIndex="-1">
        <div className="wrapper">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
