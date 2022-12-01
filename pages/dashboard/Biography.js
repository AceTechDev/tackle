import DashBoardNav from "../../components/DashBoard/DashBoardNav";
import Footer from "../../components/Navigations/Footer/Footer";
import Layout from "../../components/layout";
import BioLinks from "../../components/DashBoard/bio/BioLinks";
import AboutText from "../../components/DashBoard/bio/AboutText";
import SaveBtn from "../../components/DashBoard/SaveBtn";

function Biography() {
  return (
    <Layout title="DashBoard">
      <main className="flex flex-col px-3 pt-20 main pb-14 body2 md:flex-row sm:px-6">
        <DashBoardNav selected="Bio" />
        <form className="flex flex-col items-start flex-1 mx-4 text-white md:mt-9 lg:mt-14 sm:mx-10 md:mx-14 lg:mx-16">
          <AboutText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AboutText>
          <div className="bio_links_container">
            <BioLinks
              socialmediaName="Youtube"
              link="www.youtube.com/watchv=2QWyoz47EFE"
            />
            <BioLinks
              socialmediaName="Fackbook"
              link="www.youtube.com/watchv=2QWyoz47EFE"
            />
            <BioLinks
              socialmediaName="Instagram"
              link="www.youtube.com/watchv=2QWyoz47EFE"
            />
            <BioLinks
              socialmediaName="Twitter"
              link="www.youtube.com/watchv=2QWyoz47EFE"
            />
          </div>
          <SaveBtn Class="w-full" />
        </form>
      </main>
      <Footer />
    </Layout>
  );
}

export default Biography;
