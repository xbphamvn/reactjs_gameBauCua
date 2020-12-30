import { CHANGE_BET_LEVEL, PLAY_GAME_BTN, REFRESH_GAME } from "../types/GameBauCuaTypes";

export const changeBetLevel = (boolean, quanCuocId) => ({
    type: CHANGE_BET_LEVEL,
    betObj: {boolean, quanCuocId}
});

export const playGameBtn = () =>({
    type: PLAY_GAME_BTN
});

export const refreshGameBtn = () => ({
    type: REFRESH_GAME
})