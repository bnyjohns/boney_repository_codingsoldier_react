let data;
let pageSize = 2;
let responseCallBack = function(error, studies, response){
    try{
        if(error){
            response.send(500, error);
        }
        else{ 
            response.set('Content-Type', 'application/json');           
            if(!studies)                
                response.send('No Studies Found!!');                        
            else            
                response.send(studies);                         
        }
    }
    catch(e){
        console.log(e);
    }    
    return;
};

let renderStudies = function(error, page, totalStudiesCount, studies, res){
    var totalPageCount = Math.ceil(totalStudiesCount/pageSize);
    if(error){
        response.send(500, error);
    }
    else{
        res.send({
            pageIndex: page,
            totalPageCount: totalPageCount,
            title: "Studies - Boney Johns - Coding Soldier",
            studies: studies
        });
    }            
};

class StudiesApiController{
    constructor(_data){
        data = _data;
    }
    
    getAllStudies(req, res){
        return data.getStudies()
            .then(studies => {                               
                responseCallBack(null, studies, res);                   
            })
            .catch(err => {
                responseCallBack(err, null, res);
            });     
    }

    getStudyById(req, res){
            var studyId = req.params.studyId;
            var id = parseInt(studyId);
            data.getStudies(id)
            .then(study => {
                responseCallBack(null, study, res);
            })
            .catch(err =>{
                responseCallBack(err, null, res);
            });          
    }

    getStudies(req,res){
        let page = parseInt(req.query.page);       
        if(!page){
            page = 1;
        }
        
        let skip = page > 0 ? ((page - 1) * pageSize) : 0;
        let pagingData = {
            skip: skip,
            limit: pageSize
        };   

        let getStudiesCountPromise = data.getStudiesCount();
        let findStudiesPromise = data.findStudies(pagingData);

        Promise.all([getStudiesCountPromise, findStudiesPromise])
        .then(values => {
            renderStudies(null, page, values[0], values[1], res);
        })
        .catch(err => {
            renderStudies(err);
        });            
    }
}

export default StudiesApiController;