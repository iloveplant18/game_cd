import { ChangeEvent } from "react";
import { GameDifficulty, GameStatus } from "../../../types/types.ts";
import useSettingsStore from "../../../Stores/SettingsStore.ts";

function Settings() {
  const settings = useSettingsStore();

  function changeDifficulty(event: ChangeEvent) {
    const target = event.target as HTMLSelectElement;
    console.log(target.value);
    const newDifficultyLevel = target.value as GameDifficulty;
    settings?.setDifficultyLevel(newDifficultyLevel);
  }

  function handleRestart() {
    settings.setStatus(GameStatus.start);
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl">
        Settings
      </h2>
      <div className="mt-6 flex items-center gap-3 xl:flex-col">
        <div>
          <label className="block" htmlFor="level">Difficulty</label>
          <select
            onChange={changeDifficulty}
            className="block select select-primary mt-2"
            name="level"
            id="level"
          >
            <option value={GameDifficulty.easy}>Easy</option>
            <option value={GameDifficulty.hard}>Hard</option>
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
      <div className="mt-2">
      </div>
    </div>
  );
}

export default Settings;
