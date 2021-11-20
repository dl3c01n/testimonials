const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const mysql = require('mysql2/promise')

const schema = buildSchema(`
    type Review {
        firstName: String
        lastName: String
        comment: String
    }

    input ReviewInput {
        firstName: String
        lastName: String
        comment: String
    }

    type Query {
        getReviews: [Review]
        getReview(id: Int!): Review
    }

    type Mutation {
        createReview(input: ReviewInput): Review
    }
`)

const root = { 
    getReviews: async() => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: 8889,
            password: 'password',
            database: 'testimonials'
        })
        const [rows] = await connection.execute('SELECT firstName, lastName, comment FROM reviews')
        console.log(rows)
        console.log("rows")
       
        return rows 
    },
    getReview: async (args) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: 8889,
            password: 'password',
            database: 'testimonials',
        })
        const [rows] = await connection.execute('SELECT firstName, lastName, comment FROM `reviews` WHERE `id` = ?', [args.id])
        console.log(rows)
        return rows[0] 
    },
    createReview: async (args) => { 
        const {firstName, lastName, comment } = args.input
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: 8889,
            password: 'password',
            database: 'testimonials',
        })
        const [rows] = await connection.execute('INSERT INTO reviews(firstName, lastName, comment, secretKey) VALUES (?, ?, ?, "test")', [firstName, lastName, comment])
        console.log(rows)
        return rows[0]
    }
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Running on port 4000")
})