import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { refreshGameBtn } from '../redux/actions/GameBauCuaActions';

export default function ThongTinGame(props) {

    let { tongTienThuong } = useSelector(state => state.GameBauCuaReducer);

    const dispatch = useDispatch();

    return (
        <div className="col-12 text-center">
            <img className="img-fluid col-4 mt-2" src="./img/GameBauCua/Logo.png" alt="GameBauCuaLogo" />
            <div className="p-1 mx-auto mt-2" style={{ width: '20%', backgroundColor: 'red', borderRadius: 5 }}>
                <p className="mb-0" style={{ fontSize: 17, color: 'yellow' }}>Tiền thưởng: <span className="text-white" style={{ fontSize: 24 }}>{tongTienThuong.toLocaleString()}</span>$</p>
            </div>
            <button className="btn btn-sm btn-primary mt-2" onClick={() => {dispatch(refreshGameBtn())}}>Chơi lại</button>
        </div>
    )
}
