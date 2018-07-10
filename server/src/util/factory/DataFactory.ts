
class DataFactory{
    private _sqlService:SqlService;
    private _ormService:OrmService;
    constructor(){
        this._sqlService=null;
        this._ormService=new OrmServiceImpl();
    }


    public get sqlService(): SqlService {
        return this._sqlService;
    }

    public get ormService(): OrmService {
        return this._ormService;
    }
}