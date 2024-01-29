import React, { useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "../features/record/recordSlice";

import { AiFillDelete } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";


const columns = [
    {
        title: "Id",
        dataIndex: 'key',
    },
    {
        title: "status",
        dataIndex: "status",
    },
    {
        title: "time",
        dataIndex: 'time',
    },
    {
        title: "Action",
        dataIndex: "action"
    }
]


const Record = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDatas());
    }, []);
    const dataState = useSelector((state) => state.data.datas);
    const data1 = [];
    for (let i = 0; i < dataState.length; i++) {
        data1.push({
            key: i + 1,
            time: new Date(dataState[i].createdAt).toLocaleString(),
            status: dataState[i].status,
            action: (
                <>
                    <Link to={`/admin/record-detail/${dataState[i]._id}`} className="fs-3 text-danger">
                        <CgDetailsMore />
                    </Link>
                    <Link className="ms-3 fs-3 text-danger" to="/">
                        <AiFillDelete />
                    </Link>
                </>
            )
        })
    }
    return (
        <>
            <div>
                <h1>Lịch sử theo dõi</h1>
                <div className="mt-4">
                    <div>
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Record;