import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { recordDetail } from "../features/record/recordSlice";
import { useDispatch, useSelector } from "react-redux";


const RecordDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(recordDetail(id))
    }, []);
    const recordState = useSelector((state) => state.data.record);
    console.log(recordState);
    return (
        <div>
            <h1 className="mb-3">Record Detail</h1>
            <div className="d-flex flex-column gap-3 mb-3">
                <h3>Chỉ số LPG: {recordState.lpg}</h3>
                <h3>Chỉ số CO: {recordState.co}</h3>
                <h3>Chỉ số Smoke: {recordState.smoke}</h3>
                <h3>Trạng thái: {recordState.status}</h3>
                <h3>Thời điểm: {new Date(recordState.createdAt).toLocaleString()}</h3>
            </div>

            <Link to="/admin/record" className="button" >
                Back To List Record
            </Link>
        </div>
    )
}

export default RecordDetail;