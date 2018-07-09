class God {
    userName:string;
    databaseName:string;
    password:string;
    static connection:any

    constructor(){
        this.userName="root";
        this.databaseName="richdb";
        this.password="root";
        this.connect()

        //请自己改成自己本地数据库的用户名、数据库名、密码
    }

    private connect(){
        var mysql=require('mysql');
        God.connection=mysql.createConnection({
            host:'localhost',
            user:this.userName,
            password:this.password,
            database:this.databaseName
        });
        God.connection.connect();
    }
    public godbasic(content:string){


        God.connection.query(content,function (error,results,fields) {
            if(error)throw error;
            return results
        })


    }

}