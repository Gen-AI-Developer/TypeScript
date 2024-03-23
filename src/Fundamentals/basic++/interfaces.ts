///-----------------//
///-Interfaces TypeScript-//
///-----------------//
// In TypeScript, an interface is a way to define the shape or structure of an object. 
// It provides a contract for what properties and methods an object should have. 
// Interfaces do not contain any implementation code; they simply describe the 
// expected structure of an object.
interface Author {
    name: string,
    avatar: string
}
const authorOne: Author = { name: 'Safdar', avatar: 'img/safdar.png' }

interface Post {
    title: string,
    body: string,
    tags: string[],
    created_at: Date,
    author: Author,
}

const newPost: Post = {
    title: 'Generative Ai is in Trending',
    body: 'Body of Article',
    tags: ['GenAI', 'Python'],
    created_at: new Date(),
    author: authorOne,
}
function create_post(post: Post) {
    console.log(`Created post ${post.title} by ${post.author.name}`)
}
create_post(newPost)
///-----------------//
///-Interfaces TypeScript-//
///-----------------//
let posts: Post[] = []
posts.push(newPost)
/////////////////////////////////////////////////
interface Person {
    name: string;
    age: number;
    sayHello(): void;
}

class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const student1: Person = new Student("Alice", 25);
student1.sayHello();
// Output: Hello, my name is Alice and I am 25 years old.
// In this example, the Person interface defines the
// structure expected for a person object, with properties
// name and age, and a method sayHello(). The Student class
// implements this interface, ensuring it has the required
// properties and method.