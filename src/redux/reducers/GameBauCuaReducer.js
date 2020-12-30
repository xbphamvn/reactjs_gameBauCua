import { CHANGE_BET_LEVEL, PLAY_GAME_BTN, REFRESH_GAME } from "../types/GameBauCuaTypes";

const initialState = {
    choosenArr: [
        { id: 'ga', imgSrc: './img/GameBauCua/ga.png', betTotal: 0 },
        { id: 'bau', imgSrc: './img/GameBauCua/bau.png', betTotal: 0 },
        { id: 'cua', imgSrc: './img/GameBauCua/cua.png', betTotal: 0 },
        { id: 'tom', imgSrc: './img/GameBauCua/tom.png', betTotal: 0 },
        { id: 'ca', imgSrc: './img/GameBauCua/ca.png', betTotal: 0 },
        { id: 'nai', imgSrc: './img/GameBauCua/nai.png', betTotal: 0 },
    ],
    tongTienThuong: 1000,
    xucXacArr: [
        { id: 'ga', imgSrc: './img/GameBauCua/ga.png' },
        { id: 'ga', imgSrc: './img/GameBauCua/ga.png' },
        { id: 'ga', imgSrc: './img/GameBauCua/ga.png' },
    ]
}

const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BET_LEVEL:
            let choosenArrUpdate = [...state.choosenArr];
            let { betObj } = action;
            let index = choosenArrUpdate.findIndex(item => item.id === betObj.quanCuocId);
            if (index !== -1) {
                if (choosenArrUpdate[index].betTotal === 0 && !betObj.boolean) {
                    alert('Mức cược tối thiểu là 100!');
                    return { ...state };
                }
                // betObj.boolean ? choosenArrUpdate[index].betTotal += 100 : choosenArrUpdate[index].betTotal -= 100;
                if (betObj.boolean && state.tongTienThuong >= 100) {
                    choosenArrUpdate[index].betTotal += 100;
                    state.tongTienThuong -= 100;
                } else if (!betObj.boolean) {
                    choosenArrUpdate[index].betTotal -= 100;
                    state.tongTienThuong += 100;
                }
            }
            return { ...state, choosenArr: choosenArrUpdate };

        case PLAY_GAME_BTN:
            let randomArr = [];
            for (let i = 0; i < 3; i++) {
                let indexRandom = Math.floor(Math.random() * 6); //6
                randomArr.push(state.choosenArr[indexRandom]);
            }

            randomArr.forEach((item) => {
                let indexChoosen = state.choosenArr.findIndex(choosen => choosen.id === item.id);
                if (indexChoosen !== -1) {
                    state.tongTienThuong += state.choosenArr[indexChoosen].betTotal;
                }
            });

            state.choosenArr.forEach((item) => {
                let indexRandom = randomArr.findIndex(random => random.id === item.id);
                if (indexRandom !== -1) {
                    return state.tongTienThuong += item.betTotal;
                }
            });

            state.choosenArr.map((item) => {
                return item.betTotal = 0;
            });
            return { ...state, xucXacArr: randomArr };

        case REFRESH_GAME:
            state.tongTienThuong = 1000;
            state.choosenArr.map((item) => {
                return item.betTotal = 0;
            });
            return { ...state };

        default:
            return { ...state };
    }
}

export default GameBauCuaReducer;
