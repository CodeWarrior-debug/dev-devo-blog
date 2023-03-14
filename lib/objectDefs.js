// export
 class Post{
    constructor(title,post,author,date,subtitle,url,idNum,tagsArr, commentsArr){
        this.title= title,
        this.post= post ,
        this.author=author,
        this.date= date,
        this.subtitle= subtitle,
        this.url=url,
        this.idNum= idNum,
        this.tagsArr=tagsArr,
        this.commentsArr=commentsArr
}
}

// export const blogPost = new Post(title,post,author,date,subtitle,url,id,tags,comments)

// export const blogPost2 = new Post(mytitle,post,myauthor,mydate,mysubtitle,myurl,myid,["good","bad"],["okay,fine"])



 

 const blogPost2 = new Post("mytitle","mypost","myauthor","mydate","mysubtitle","myurl",1,["good","bad"],["okay","fine"])

 
 console.log(blogPost2)