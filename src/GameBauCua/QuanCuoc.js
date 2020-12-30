import React from 'react';
import { useDispatch } from 'react-redux';
import { changeBetLevel } from '../redux/actions/GameBauCuaActions';

export default function QuanCuoc(props) {

    let { quanCuocObj } = props;

    const dispatch = useDispatch();

    return (
        <div className="col-4 mt-0 py-1">
            <img className="w-75 d-block mx-auto" src={quanCuocObj.imgSrc} alt={quanCuocObj.id} />
            <div className="p-1 bg-success text-center text-warning mt-2 mx-auto rounded" style={{ width: '65%' }}>
                <button onClick={() => { dispatch(changeBetLevel(true, quanCuocObj.id)) }} className="btn btn-sm btn-danger" style={{ fontFamily: 'Roboto', color: 'white', fontWeight: 'bold' }}>+</button>
                <span style={{ color: 'yellow' }}> {quanCuocObj.betTotal.toLocaleString()}$ </span>
                <button onClick={() => { dispatch(changeBetLevel(false, quanCuocObj.id)) }} className="btn btn-sm btn-danger" style={{ fontFamily: 'Roboto', color: 'white', fontWeight: 'bold' }}>-</button>
            </div>
        </div>
    )
}
