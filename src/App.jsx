import styles from "./style";
import {
  Header,
  Hero,
  Navbar,
  Breadcrumb,
  Leaguecrd,
  FeatureMatchCrd,
  TopPlayers,
  Matches,
  Standings,
} from "./components";

const App = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#F5F5F5] ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Breadcrumb path={folderPath} />
      </div>
    </div>
    <div
      className={`bg-[#F5F5F5] ${styles.flexInlineCenter} lg:ml-[120px] gap-3 mt-5`}
    >
      <div className="flex-row justify-center">
        <div className={`${styles.boxWidth}`}>
          <Leaguecrd />
        </div>
      </div>
      <div className={`bg-[#F5F5F5] ${styles.flexInlineStart}   `}>
        <div className={`${styles.boxWidth}`}>
          <FeatureMatchCrd />
        </div>
      </div>
    </div>
    <div className={`bg-white ${styles.flexCenter} lg:mx-[120px] mt-5`}>
      <div className={`${styles.boxWidth}`}>
        <Standings />
      </div>
    </div>
    <div className={`bg-white ${styles.flexCenter} lg:ml-[120px] mt-5`}>
      <div className={`${styles.boxWidth}`}>
        <TopPlayers />
      </div>
    </div>
    <div className={`bg-white ${styles.flexCenter} lg:ml-[120px] mt-5`}>
      <div className={`${styles.boxWidth}`}>
        <Matches />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}></div>
      <Hero />
    </div>
  </div>
);

const folderPath = [
  { name: "England", link: "/folder1" },
  { name: "Premier League", link: "/folder2" },
];

export default App;
