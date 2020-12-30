import React from 'react';
import DanhSachQuanCuoc from './DanhSachQuanCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import ThongTinGame from './ThongTinGame';
import './GameBauCua.css';

export default function GameBauCua(props) {
    return (
        <div className="bg-warning" style={{height: '100vh'}}>
            <div className="row container mx-auto">
                <ThongTinGame />
                <div className="row mt-3">
                    <div className="col-7">
                        <DanhSachQuanCuoc />
                    </div>
                    <div className="col-5">
                        <DanhSachXucXac />
                    </div>
                </div>
            </div>
        </div>
    )
}
