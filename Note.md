# Table of content
1. [General Typescript structure](#structure)

## 1. General Typescript structure <a name="structure"></a>
Each project is a json structure:
```ts
type Project = {
    title: string,
    author: string, 
    school: string | null,
    course: string | null, 
    professor: string | null, 
    date: Date,  // last update
    ...,
    content: Array<Elements>,
}   
```

A project can be converted in a template, a template is a collection of elemets that can be imported directly into a project. As usually a template is a single chapter of a topic. 
```ts
type Template = {
    title: string,
    author: string, 
    date: Date,  // last update
    ...,
    content: Array<Elements>,
}   
```

