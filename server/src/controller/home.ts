import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { json } from 'body-parser';
@controller('/test')
export class HomeController {
  @httpGet('/file')
  public get(request: Request,response:Response){
    var file;
    console.log("here0")
    response.end(JSON.stringify("File Uploaded"));
  
    return "hhh"
  }
  @httpPost('/file')
  public post(req:Request,res){
    var file;
    var fs = require('fs');
    console.log("here1")
    console.log(req.files)
    console.log(req.file)
   
   
    return "hhh"
  }
}
