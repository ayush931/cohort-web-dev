const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require("./db")
const bcrypt = require('bcrypt')
const { z } = require('zod')
const app = express()

mongoose.connect("mongodb+srv://ayush:111@cluster0.mur2t.mongodb.net/")

const JWT_SECRET = "ayush@123"
app.use(express.json())

function auth (req, res, next) {
    const token = req.headers.token
    const decodedData = jwt.verify(token, JWT_SECRET)

    if (decodedData) {
        req.userId = decodedData.id
        next()
    }
    else {
        res.status(403).json({
            message: 'Incorrect credentials!!!'
        })
    }
}

app.post("/signup", async function (req, res) {
    // input validation

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    // const parsedData = requiredBody.parse(req.body)
    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
    }

    const email = req.body.email
    const name = req.body.name
    const password = req.body.password

    let errorThrown = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 5)
        console.log(hashedPassword)
    
        await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })
    } catch (error) {
        res.json({
            message: "User already exists"
        })
        errorThrown = true
    }
    if (!errorThrown) {
        res.json({
            message: "You have signed in"
        })
    }
})

app.post("/signin", async function (req, res) {
    const email = req.body.email
    const password = req.body.password

    
    const user = await UserModel.findOne({
        email: email,
    })

    if (!user) {
        res.status(403).json({
            message: "User does not exists in db"
        })
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password)
    console.log(user)
    
    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET)
        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: 'Invalid credentials!!!'
        })
    }
})

app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000, () => {
    console.log("App is listening on 3000")
})