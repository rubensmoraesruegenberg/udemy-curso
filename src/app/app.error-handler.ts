import {Response} from "@angular/http"
import { Observable } from "rxjs/Observable";

//Arquivo para tratamento de erros na aplicação.
export class ErrorHandler{
    //método
    static handlerError(error: Response | any){
        //Os parametros aqui é do tipo resoponse(Response ou algun(|),
        // nota-se que aqui um paramtro pode ser de dois tipos.)
        
        //Variavel para receber a receber a menssagem de erro.
        let errorMessage: string
        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMessage = error.toString()
        }

        
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}