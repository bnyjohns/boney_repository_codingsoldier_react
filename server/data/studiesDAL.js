import Database from './database';

let database;
let getStudiesPrivate = function(db, id){
        if(!id){
            return db.studies.find().toArray();
        }
        else{
            return db.studies.findOne({ id : id });
        }
};

class StudiesDAL{
    constructor(dataBase){
        database = dataBase;
    }
    findStudies(pagingData){
        return database.getDb()
            .then(db => {
                return db.studies.find(null, null, pagingData).toArray();
            })
            .catch(err => {
                console.log(err);
            });
    }

    getStudiesCount(){
        return database.getDb()
            .then(db => {
                return db.studies.find().count();
            })
            .catch(err => {
                console.log(err);
            });
    }

    getStudies(id){
        return database.getDb()
            .then(db => {
                return getStudiesPrivate(db,id);
            });            
    }
}

export default StudiesDAL;