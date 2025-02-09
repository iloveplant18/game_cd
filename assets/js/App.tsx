import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout.tsx";
import { ReactNode } from "react";
import Game from "./Pages/Game/Game.tsx";

function App(): ReactNode {
  return (
    <DefaultLayout>
      <Game />
    </DefaultLayout>
  );
}

export default App;
