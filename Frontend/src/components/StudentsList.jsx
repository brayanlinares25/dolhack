import React, { useState } from "react";
import "./styles/StudentsList.css"
import { AiOutlineUser } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";
import {list} from "../api/class";
import { VerificRol } from "../api/auth";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import {useNavigate} from "react-router-dom"

function StudentsList(){

    const Navegate = useNavigate();

    const [List, setList] = useState([]);

    const [Auth, setAuth] = useState('');

    useEffect(()=>{
        GetList();
        VerificAuth();
    },[]);

    async function GetList(){
        const result = await list();
        setList(result.data);
        console.log(result.data);
    }

    const downloadExcelFile = (jsonData) => {
        const workbook = XLSX.utils.book_new();
  
        const worksheet = XLSX.utils.json_to_sheet(jsonData);
  
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
        saveAs(excelBlob, 'lista.xlsx');
    };

    const VerificAuth = async () => {
        const {data} = await VerificRol();
        setAuth(data[0]);
    }

    return(
        <div className="List">
            <h2>Estudiantes</h2>
            {
                List.map((List, i) => (
                    <p style={{cursor:"pointer"}} onClick={()=>Navegate('/studen/'+List.idestudiante)} key={i}><samp><AiOutlineUser /></samp> {List.nombre} {List.apellido} -</p>
                ))
            }
            {
                Auth === 'profesor' ? <div> <button onClick={()=>downloadExcelFile(List)}><FaDownload /> Descargar</button> </div> : null
            }
        </div>
    )
}

export default StudentsList