import React from "react";
import { FaDownload } from "react-icons/fa";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function Downland({data, Name}){

    const downloadExcelFile = (jsonData, name) => {
        const workbook = XLSX.utils.book_new();
  
        const worksheet = XLSX.utils.json_to_sheet(jsonData);
  
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
        saveAs(excelBlob, name+'.xlsx');
    };

    return(
        <div className="MainQuiz-Div">
            <h2>¿Descargar excel?</h2>
            <div>   
                <button style={{background:"green"}} onClick={()=>downloadExcelFile(data, Name)}><FaDownload /></button>
            </div>
        </div>
    )
}

export default Downland