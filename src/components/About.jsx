import { useState, useEffect } from "react";
import TabButton from "./TabButton";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About({ className, style }) {
  const tabs = ["About Us", "Leadership", "Services", "Awards"];
  const navigate = useNavigate();

  const [active, setActive] = useState("Leadership");

  /* ✔ Prevent infinite navigation loop */
  useEffect(() => {
    if (active === "Services") {
      navigate("/services");
      window.scrollTo(0, 0);
    }
  }, [active]);

  const fade = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45 },
  };

  const ContentWrapper = ({ children }) => (
    <div className="p-4 md:p-10 lg:p-16 bg-gradient-to-br from-white to-blue-50 min-h-screen space-y-20">
      {children}
    </div>
  );

  /* ------------ Page Content Renderer ------------ */
  const renderContent = () => {
    switch (active) {
      case "About Us":
        return (
          <ContentWrapper>
            <motion.div {...fade}>
              <AboutSection
                title="Who We Are"
                content={`Founded in 2011, Fstone Technologies is a global IT solutions provider operating across India, the USA, and Europe.

We specialize in building scalable digital solutions, modernizing legacy systems, and delivering high-performance technology services for enterprises and high-growth organizations.

Our mission is to empower businesses with reliable, secure, and future-ready technology—helping them innovate faster and operate smarter.`}
                image="/HeroImg.jpg"
              />
            </motion.div>

            <motion.div {...fade} transition={{ delay: 0.2 }}>
              <AboutSection
                title="Global Presence"
                content={`With delivery centers in India and support teams across the US & Europe, Fstone Technologies ensures seamless project execution across time zones.

We provide clients with 24×7 support, strategic consulting, and on-demand engineering expertise.`}
                reverse
                image="/HeroImg2.jpg"
              />
            </motion.div>

            <motion.div {...fade} transition={{ delay: 0.35 }}>
              <AboutSection
                title="Our Culture"
                content={`We are a team of engineers, strategists, analysts, and innovators who believe in integrity, transparency, and continuous learning.

Our culture is built on:
• Ownership and accountability  
• Customer-first thinking  
• Innovation with purpose  
• Team collaboration & open communication  

We invest heavily in learning and development to keep our teams ahead of industry standards.`}
                image="/HeroImg3.jpg"
              />
            </motion.div>
          </ContentWrapper>
        );

      case "Leadership":
        return (
          <ContentWrapper>
            <motion.div {...fade}>
              <AboutSection
                title="Meet Our Leadership Team"
                content={`Our leadership team brings 20+ years of combined expertise in technology consulting, digital transformation, and enterprise engineering.

• **Kavita Yadav – Chief Executive Officer**  
  Drives organizational strategy, global expansion, and client partnerships.

• **Lakhan Pal Solanki – Chief Technology Officer**  
  Leads technology innovation, architecture design, and engineering excellence.

• **Advisory Board (US & Europe)**  
  Senior industry leaders guiding cybersecurity, cloud, and transformation initiatives.`}
                image="/FstoneIMG.png"
              />
            </motion.div>
          </ContentWrapper>
        );

      case "Awards":
        return (
          <ContentWrapper>
            <motion.div {...fade}>
              <AboutSection
                title="Awards & Recognition"
                content={`Our work has been consistently recognized by clients, partners, and industry bodies.

• **Outstanding IT Services Provider – 2023**  
• **Top 10 Digital Transformation Companies – India**  
• **Client Excellence Award – 2022 (US Region)**  

We continue to push boundaries with innovation, reliability, and long-term client partnerships.`}
                reverse
                image="/AwardsImg.png"
              />
            </motion.div>
          </ContentWrapper>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* -------- Modern Responsive Tab Bar -------- */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-30">
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 py-3 md:px-10 md:py-5">
          {tabs.map((tab) => (
            <motion.div key={tab} whileHover={{ scale: 1.03 }}>
              <TabButton
                active={active === tab}
                onClick={() => setActive(tab)}
              >
                {tab}
              </TabButton>
            </motion.div>
          ))}
        </div>
      </header>

      {renderContent()}
      <Footer />
    </motion.div>
  );
}
