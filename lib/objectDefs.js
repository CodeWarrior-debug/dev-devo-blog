
export class Post{
    constructor(title,post,author,createddateTime, updateddateTime,subtitle,url,idNum,tagsArr,commentsArr){
        this.title= title,
        this.post= post ,
        this.author=author,
        this.createdDateTime= createddateTime,
        this.updatedDateTime= updateddateTime,
        this.subtitle= subtitle,
        this.url=url,
        this.idNum= idNum,
        this.tagsArr=tagsArr,
        this.commentsArr=commentsArr
}
}


 

//  const blogPost2 = new Post("mytitle","mypost","myauthor","mydate","mysubtitle","myurl",1,["good","bad"],["okay","fine"])

 
//  console.log(blogPost2)