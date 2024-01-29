import React, { useEffect } from "react";
import { Table } from "antd";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "../features/record/recordSlice";
import { Link } from "react-router-dom";


import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";


const columns = [
    {
        title: "Id",
        dataIndex: 'key',
    },
    {
        title: "LPG",
        dataIndex: 'lpg',
    },
    {
        title: "Co",
        dataIndex: 'co',
    },
    {
        title: "Smoke",
        dataIndex: 'smoke',
    },
    {
        title: "Status",
        dataIndex: 'status',
    },
    {
        title: "time",
        dataIndex: 'time',
    },
]
const DashBoard = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDatas());
    }, []);
    const dataState = useSelector((state) => state.data.datas);
    const data1 = [];
    let d = 0;
    for (let i = 0; i < dataState.length; i++) {
        if (dataState[i].status === "Warning") {
            d++;
            data1.push({
                key: d,
                time: new Date(dataState[i].createdAt).toLocaleString(),
                status: dataState[i].status,
                action: (
                    <>
                        <Link to="/" className="fs-3 text-danger">
                            <BiEdit />
                        </Link>
                        <Link className="ms-3 fs-3 text-danger" to="/">
                            <AiFillDelete />
                        </Link>
                    </>
                ),
                co: dataState[i].co,
                lpg: dataState[i].lpg,
                smoke: dataState[i].smoke,

            })
        }
    }
    return (
        <>
            <h1 className="mb-4 title">DashBoard</h1>
            <div className="d-flex justify-content-between align-items-center gap-3 ">
                <div className="limit-info">
                    <h3>Giới hạn thông số</h3>
                    <p>Các chỉ số khi vượt qua ngưỡng giới hạn dưới đây sẽ được gửi cảnh báo về email </p>
                    <div className="d-flex flex-column align-items-begin">
                        <h5>
                            Khí LPG (Liquefied Petroleum Gas): trên 2000ppm
                        </h5>
                        <h5>
                            Khí CO (Carbon Monoxide): trên 150ppm
                        </h5>
                        <h5>
                            Khí Methane: trên 10000ppm
                        </h5>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="mb-5 title">Lịch sử cảnh báo</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </>
    )
}

export default DashBoard;