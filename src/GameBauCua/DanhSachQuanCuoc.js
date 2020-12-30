import React from 'react';
import { useSelector } from 'react-redux';
import QuanCuoc from './QuanCuoc';

export default function DanhSachQuanCuoc(props) {

    let {choosenArr} = useSelector(state => state.GameBauCuaReducer);

    const renderChoosenArr = () => (
        choosenArr.map((item, index) =>((<QuanCuoc quanCuocObj={item} key={index} />)))
    )

    return (
        <div className="row">
            {renderChoosenArr()}
        </div>
    )
}
