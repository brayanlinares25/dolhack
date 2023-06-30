import React, {useState, useEffect} from "react";
import NavigateClass from "../../components/NavigationClass";
import ContenerClass from "../../components/ContenerClass";
import StudentsList from "../../components/StudentsList";
import Downland from "../../components/DownlandExecel";
import {GetResult, GetList} from "../../api/quialification";
import { FaDownload } from "react-icons/fa";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function QuizMyQuialification() {

    const downloadExcelFile = (jsonData, name) => {
        const workbook = XLSX.utils.book_new();
  
        const worksheet = XLSX.utils.json_to_sheet(jsonData);
  
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
        saveAs(excelBlob, name+'.xlsx');
    };

    const [Resp, setResp] = useState([]);

    useEffect(()=>{
        GetRes();
    },[])

    async function GetRes(){
        const result = await GetResult();
        setResp(result.data);
    }

    async function Donw(id, title){
        const result = await GetList(id);
        downloadExcelFile(result.data, title);
    }

    return(
        <>
            <NavigateClass />
            <ContenerClass>
                <Downland data={Resp} Name={'Notas'} />
                <div className="ContenerOfTray">
                    {Resp.map((Resp)=>(
                        <div  className="QuizEdit_list">
                        <div>
                            <h2>{Resp.titulo}</h2>
                            <p style={{color:"var(--Main_Color)"}} >{Resp.calificacion}</p>
                        </div>
                        <div className="Button_QuizEdit_list">
                            <h3>{Resp.calificaciontotal}</h3>
                            <button style={{background: "green"}} onClick={()=>Donw(Resp.idquiz, Resp.titulo)} ><FaDownload /></button>
                        </div>
                        </div>
                    ))} 
                </div>
                <StudentsList />
            </ContenerClass>
        </>
    )
}

export default QuizMyQuialification