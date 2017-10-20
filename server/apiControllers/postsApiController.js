let data = null;
let pageSize = 2;
let responseCallBack = function(error, posts, response){
    try{
        if(error){
            response.send(500, error);
        }
        else{ 
            response.set('Content-Type', 'application/json');           
            if(!posts)                
                response.send('No Posts Found!!');                        
            else            
                response.send(posts);                         
        }
    }
    catch(e){
        console.log(e);
    }    
    return;
};

let renderPosts = function(error, page, totalPostsCount, posts, res){
    var totalPageCount = Math.ceil(totalPostsCount/pageSize);
    if(error){
        response.send(500, error);
    }
    else{
        res.send({
            pageIndex: page,
            totalPageCount: totalPageCount,
            title: "Posts - Boney Johns - Coding Soldier",
            posts: posts
        });
    }            
};

class PostsApiController{
    constructor(_data){
        data = _data;
    }
    
    getAllPosts(req, res){        
        return data.getPosts()
            .then(posts => {                               
                responseCallBack(null, posts, res);                   
            })
            .catch(err => {
                responseCallBack(err, null, res);
            });     
    }

    getPostById(req, res){
            var postId = req.params.postId;
            var id = parseInt(postId);
            data.getPosts(id)
            .then(post => {
                responseCallBack(null, post, res);
            })
            .catch(err =>{
                responseCallBack(err, null, res);
            });          
    }

    getPosts(req,res){
        console.log(`Page Number from Query: ${req.query.page}`);
        let page = parseInt(req.query.page);       
        if(!page){
            page = 1;
        }
        
        let skip = page > 0 ? ((page - 1) * pageSize) : 0;
        let pagingData = {
            skip: skip,
            limit: pageSize
        };   

        let getPostsCountPromise = data.getPostsCount();
        let findPostsPromise = data.findPosts(pagingData);

        Promise.all([getPostsCountPromise, findPostsPromise])
        .then(values => {
            renderPosts(null, page, values[0], values[1], res);
        })
        .catch(err => {
            renderPosts(err);
        });            
    }
}

export default PostsApiController;