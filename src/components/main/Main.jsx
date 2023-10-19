import Banner from "../Banner";
import TopMixes from "../TopMixes";
import TopMade from "../TopMade";
import TopUniquely from "../TopUniquely";
import TopJump from "../TopJump";
import TopRecently from "../TopRecently";

const Main = () => {
  return (
    <div className="w-full bg-mixes">
    <Banner/>
      <TopMixes/>
      <TopMade/>
      <TopRecently/>
      <TopJump/>
      <TopUniquely/>
    </div>
  )
}
export default Main