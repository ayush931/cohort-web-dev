import { startLogger } from "./logger.js";
import { GameManager } from "./store.js";

const gameManager = new GameManager();
startLogger()

setInterval(() => {
  gameManager.addGame(Math.random().toString());
})