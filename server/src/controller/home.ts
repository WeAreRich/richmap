import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { json } from 'body-parser';
@controller('/test')
export class HomeController {
  @httpGet('/file')
  public get(request: Request,response:Response){
    var file;
    // console.log(request)
    // if(!request.files)
    // {
    //     response.send("File was not found");
    //     return;
    // }

    // file = request.files.FormFieldName;  // here is the field name of the form

    // file.mv("file.txt", function(err)  //Obvious Move function
    //     {
    //           // log your error
    //     });

    response.end(JSON.stringify("File Uploaded"));
  
    return "hhh"
  }
  @httpPost('/file')
  public post(req:Request,res){
    var file;
    var fs = require('fs');
    
    console.log(req.files)
    // // get the temporary location of the file
    // var tmp_path = "law";
    // // set where the file should actually exists - in this case it is in the "images" directory
    // var target_path = './public/images/law';
    // // move the file from the temporary location to the intended location
    // fs.rename(tmp_path, target_path, function(err) {
    //     if (err) throw err;
    //     // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
    //     fs.unlink(tmp_path, function() {
    //         if (err) throw err;
    //         res.send('File uploaded to: ');
    //     });
    // });
    console.log(req.file)
    // if(!request.files)
    // {
    //     response.send("File was not found");
    //     return;
    // }

    // file = request.files.FormFieldName;  // here is the field name of the form

    // file.mv("file.txt", function(err)  //Obvious Move function
    //     {
    //           // log your error
    //     });
    return "hhh"
  }
}
