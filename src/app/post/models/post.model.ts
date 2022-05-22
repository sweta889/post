export class Post{
    id: number;
    userId : String;
    title : String;
    body : String;

    constructor(id?: number,
        userId? : String,
        title? : String,
        body? : String)

        {
            this.id = id;
            this.userId = userId;
            this.title = title;
            this.body = body;
        }
}