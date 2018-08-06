let multer = require('multer');

let storage = multer.diskStorage({
    //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
    destination: "fileDirectory",
    filename: function (req, file, cb) {
        let fileFormat =(file.originalname).split(".");
        cb(null, new Date().getTime() + "." + fileFormat[fileFormat.length - 1]);
    }
});

//添加配置文件到muler对象。
let upload = multer({
    storage: storage
});
export default function file(app){
     app.post('/profile', upload.single('file'), (req, res) => {
        console.log(req.file.filename);
        res.send(req.file.filename);
        res.end();
     });
}