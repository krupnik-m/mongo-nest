import {Body, Controller, Get, Post} from "@nestjs/common";
import {ImportService} from "./import.service";

@Controller('import')
export class ImportController {
    constructor(private readonly importService: ImportService){};

    @Get()
    getData():any {
        return {asd:"123",data: this.importService.getData()}
    }

    @Post()
    importData(@Body('importData') importData: Array<any>
               ): any {
        //this.importService.insertImportData(awayTeam,homeTeam,date,fthg,ftga);
        return 'ok';
    }
}