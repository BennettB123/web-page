export class Project {
    public name: string;
    public description: string;
    public images: string[]; // URLs of demo images (should be in 'assets/projectImgs')
    public link: string;
    public demoLink?: string;
    public techUsed: string[];
    public notes: string;

    constructor(data: {name: string, description: string, images: string[], link: string, demoLink?: string, techUsed: string[], notes?: string}){
        this.name = data.name;
        this.description = data.description;
        this.images = data.images;
        this.link = data.link;
        this.techUsed = data.techUsed;
        if(data.demoLink){
            this.demoLink = data.demoLink;
        }
        if(data.notes){
            this.notes = data.notes;
        }
    };
}
