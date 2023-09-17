import styles from "./style";
import {folderPath} from "./constants";
import {
  Header,
  PlayerStat,
  Navbar,
  Breadcrumb,
  Leaguecrd,
  FeatureMatchCrd,
  TopPlayers,
  Matches,
  Standings,
  Test,
  StatCard,
  PositionCard,
} from "./components";

const App = () => (
  <div className="bg-[#F6f6f6] w-full ">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Breadcrumb path={folderPath} />
      </div>
    </div>
    <div className={` ${styles.flexStart}`}>
      <div className={`flex ${styles.boxWidth} lg:max-xl:px-[120px] px-[3rem] justify-between items-center`}>
        <Leaguecrd />
        <FeatureMatchCrd />
      </div>
    </div>
    <div className={` ${styles.flexStart} lg:mx-[120px] mt-5`}>
      <div className={`${styles.boxWidth}`}>
        <Standings />
      </div>
    </div>
    <div className={` ${styles.flexStart} w-full  mt-5`}>
      <div className={`flex ${styles.boxWidth} lg:max-xl:px-[120px] px-[3rem] justify-between items-center`}>
        <Matches />
        <StatCard />
        <PositionCard />
      </div>
    </div>
    <div className={`${styles.flexStart} my-5 `}>
      <div className={`flex ${styles.boxWidth} lg:max-xl:px-[120px] px-[3rem] justify-between content-center`}>
        <PlayerStat />
        <TopPlayers />
      </div>
    </div>
  </div>
);


export default App;

