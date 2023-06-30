<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class calificacionController extends Controller
{
    public function ShowQuizEstudiantes(Request $req){
        $idC = $req->idClass;

        $result = DB::select('SELECT estudiante.idestudiante ,quiz.idquiz ,respuesta.idrespuesta ,quiz.titulo, usuario.nombre FROM quiz JOIN pregunta ON quiz.idquiz = pregunta.quiz_idquiz JOIN respuesta ON pregunta.idpregunta = respuesta.pregunta_idpregunta JOIN estudiante ON respuesta.estudiante_idestudiante = estudiante.idestudiante JOIN usuario ON estudiante.usuario_idusuario = usuario.idusuario where quiz.clase_idclase = ?',[$idC]);

        return response()->json($result,200);
    }

    public function ShowQuizEstudiante(Request $req, string $idE, string $idQ){
        $idC = $req->idClass;

        $resul = DB::select(' SELECT respuesta.idrespuesta, estudiante.idestudiante ,pregunta.pregunta, respuesta.respuesta, usuario.nombre FROM respuesta JOIN pregunta ON respuesta.pregunta_idpregunta = pregunta.idpregunta JOIN estudiante ON respuesta.estudiante_idestudiante = estudiante.idestudiante JOIN usuario ON estudiante.usuario_idusuario = usuario.idusuario JOIN quiz ON pregunta.quiz_idquiz = quiz.idquiz WHERE quiz.clase_idclase = ? AND estudiante.idestudiante = ? AND quiz.idquiz = ? ;',[$idC, $idE, $idQ]);

        return response()->json($resul,200);
    }

    public function PostReport(Request $req, string $idE, string $idP){
        $idC = $req->idClass;
        $rol = $req->rol;

        $cal = $req->calificacion;

        if($rol === 'profesor'){
            $resul = DB::insert('INSERT into reporte (calificacion, clase_idclase, estudiante_idestudiante, respuesta_idrespuesta) values(?, ?, ?, ?)',[$cal, $idC, $idE, $idP]);

            return response()->json($resul, 200);
        }else{
            return response()->json('Solo el profesor puede calificar',500);
        }
    }

    public function GetReporte(Request $req){
        $idC = $req->idClass;

        $result = DB::select('SELECT reporte.idreporte ,usuario.nombre, respuesta.respuesta, reporte.calificacion FROM reporte JOIN respuesta ON reporte.respuesta_idrespuesta = respuesta.idrespuesta JOIN estudiante ON reporte.estudiante_idestudiante = estudiante.idestudiante JOIN usuario ON estudiante.usuario_idusuario = usuario.idusuario WHERE reporte.clase_idclase = ?',[$idC]);

        return response()->json($result, 200);
    }

    public function putReporte(Request $req, string $idR){
        $idC = $req->idClass;

        $cal = $req->calificacion;

        $result = DB::update('UPDATE reporte set calificacion = ? where idreporte = ?',[$cal,$idR]);

        return response()->json($result,200);
    }

    public function deleteReporte(Request $req, string $idR){
        $idC = $req->idClass;

        $result = DB::delete('DELETE from reporte where idreporte = ?',[$idR]);

        return response()->json($result,200);
    }
}
