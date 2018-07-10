class OrmServiceImpl implements  OrmService{
    checkKeyExists(key: string): boolean {
        return false;
    }

    delete(key: string): boolean {
        return false;
    }

    findByKey(key: string): BaseOrmClass {
        return undefined;
    }

    insert(obj: BaseOrmClass): boolean {
        return false;
    }

    update(obj: BaseOrmClass): boolean {
        return false;
    }

}