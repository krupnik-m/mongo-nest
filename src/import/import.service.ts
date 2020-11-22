import {ImportItem} from "./import.model";
import {HttpService, Injectable} from "@nestjs/common";

@Injectable()
export class ImportService {
    constructor(private http: HttpService){

    }

    imports: ImportItem[]  = [];

    getData (){
        return this.http.get('https://api.jsonbin.io/b/5ebb0cf58284f36af7ba1779/1');
    }

    insertImportData(awayTeam: string, homeTeam: string,
                     date: string,
                     fthg: number,
                     ftag: number){
        const newItem = new ImportItem(awayTeam, homeTeam,date,fthg,ftag);
        this.imports.push(newItem);
    }
}