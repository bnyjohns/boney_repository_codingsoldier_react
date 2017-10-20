let postsApiController;
let studiesApiController;

class Routes{
    constructor(_postsApiController, _studiesApiController){        
        postsApiController =  _postsApiController;
        studiesApiController = _studiesApiController;        
    }

    init(app){         
        app.get('/api/posts/getAllPosts', postsApiController.getAllPosts);        
        app.get('/api/posts/getPosts', postsApiController.getPosts);  
        app.get('/api/posts/:postId', postsApiController.getPostById);        

        app.get('/api/studies/getAllStudies', studiesApiController.getAllStudies);
        app.get('/api/studies/getStudies', studiesApiController.getStudies);
        app.get('/api/studies/:studyId', studiesApiController.getStudyById);             
    }
}
export default Routes;