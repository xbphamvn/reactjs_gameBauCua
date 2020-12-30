import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playGameBtn } from '../redux/actions/GameBauCuaActions';
import XucXac from './XucXac';

export default function DanhSachXucXac(props) {

    const { xucXacArr } = useSelector(state => state.GameBauCuaReducer);
    const dispatch = useDispatch();

    return (
        <>
            <div className="row w-50 h-50 bg-white rounded-circle mx-auto mt-5">
                <div className="row mt-4 h-25 p-1">
                    <div className="col-4" style={{ marginLeft: '100%' }}>
                        <XucXac xucXacItem={xucXacArr[0]} />
                    </div>
                </div>
                <div className="row mt-5 h-25 p-1">
                    <div className="col-4" style={{marginTop: '40%', marginLeft: '-10%'}}>
                        <XucXac xucXacItem={xucXacArr[1]} />
                    </div>
                    <div className="col-4" style={{marginTop: '40%', marginLeft: '20%'}}>
                        <XucXac xucXacItem={xucXacArr[2]} />
                    </div>
                </div>
            </div>
            <img onClick={() => {dispatch(playGameBtn())}} className="btn col-4 mt-2 d-block mx-auto" src="./img/GameBauCua/soc.png" alt="xoc btn" />
        </>
    )
}
