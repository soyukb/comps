import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <h1 className="bg-slate-700">sdfsdfsd</h1>
      <div>
        <Button primary>
          <GoBell />

          <div>Click me!</div>
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          <div>Buy Now!</div>
        </Button>
      </div>
      <div>
        <Button>
          <GoDatabase />
          <div>See Deal!</div>
        </Button>
      </div>
      <div>
        <Button>Hide Ads!</Button>
      </div>
      <div>
        <Button>Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
