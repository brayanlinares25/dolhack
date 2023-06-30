import React,{useEffect, useState} from "react";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import "./Sustentacion.css";
import {clase, examen} from "../../api/auth";

function Sustentacion(){

    const downloadExcelFile = (jsonData) => {
        const workbook = XLSX.utils.book_new();
  
        const worksheet = XLSX.utils.json_to_sheet(jsonData);
  
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
        saveAs(excelBlob, 'datos.xlsx');
    };
    

    const [R, setR] = useState([]);
    const [R2, setR2] = useState([]);

    useEffect(()=>{
        GetClass();
        GetExam();
    },[])

    async function GetClass(){
        const result = await clase();
        setR(result.data);
    }

    async function GetExam(){
        const result = await examen();
        setR2(result.data);
    }

    return(
        <div className="Sustentacion-div">
            <div className="Sustentacion">
                <h2>Link de la sustentacion</h2>
                <a href="https://docs.google.com/presentation/d/1EcV7rJui_Bj7YMFYAPGOfHVXcixSa9YB/edit#slide=id.p3">Click aqui</a>
                <h1>casos de usos</h1>
                <h2>Examen</h2>
                <img src="https://cdn.discordapp.com/attachments/1005592732166795287/1122002472563638412/CASO_DE_USO_DE_EXAMEN.drawio.png" alt=""/>
                <h2>Calificación</h2>
                <img src="https://cdn.discordapp.com/attachments/1005592732166795287/1122003692808306809/CASO_DE_USO_DE_CALIFICAION.drawio_2.png" alt="" />
                <h2>Clase</h2>
                <img src="https://cdn.discordapp.com/attachments/1005592732166795287/1122008407067594762/CASO_DE_USO_DE_CLASE.drawio_1.png" alt="" />
                <h1>Descargar excel</h1>
                <h2>Clase</h2>
                <button onClick={() => downloadExcelFile(R)}>Descargar</button>
                <h2>Examen</h2>
                <button onClick={() => downloadExcelFile(R2)} >Descargar</button>
                <h2>Calificación</h2>
                <button onClick={() => downloadExcelFile(R2)} >Descargar</button>
            </div>
        </div>
    )
}

export default Sustentacion
