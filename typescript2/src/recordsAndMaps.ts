// ways to create objects

type Users2 = {
  id: string;
  username: string;
};

type UserObj = {
  [key: string]: Users2;
};

const users: UserObj = {
  "user@1": {
    id: "user@1",
    username: "Ayush",
  },
  "user@2": {
    id: "user@2",
    username: "Ankit",
  },
};

// Record -> cleaner way rto create object

type User2 = Record<string, { name: string; age: number }>;

const users2: User2 = {
  "user@1": { name: "Ayush", age: 23 },
  "user@2": { name: "Ankit", age: 22 },
};

// Map -> JS concept

const users1 = new Map();
users1.set("user@123", { name: "Ayush", age: 23 });
users1.set("user@456", { name: "Ankit", age: 22 });

const getUsers = users1.get("user@123");
console.log(getUsers);

// or -> 

type UserShcema = {
  name: string,
  age: number,
  email: string
}

const userDetails = new Map<string, UserShcema>()
userDetails.set("userId1", { name: "Ayush", age: 32, email: "ayush@gmail.com" })
userDetails.set("userId2", { name: "Ankit", age: 22, email: "ankit@gmail.com" })

const getUserDetails = userDetails.get("userId1")
console.log(getUserDetails)

// Exclude

type EventType = "click" | "scroll" | "mousemove"
type ExcludeEvent = Exclude<EventType, "scroll"> // only click and mousemove work

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`)
}

handleEvent("click")
handleEvent("mousemove")

// handleEvent("scroll") will show the error
