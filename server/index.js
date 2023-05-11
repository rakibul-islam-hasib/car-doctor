const express = require('express')
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// ! MIDDLEWARE
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zioaowq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db('carDB')
        const servicesCollection = database.collection('services')

        //! GET services data 
        app.get('/services', async (req, res) => {
            let cursor = servicesCollection.find();
            const result = await cursor.toArray()
            res.send(result)
        })
        // ! Get single services 
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const options = {
                // Include only the `title` and `imdb` fields in the returned document
                projection: { title: 1, price: 1, service_id: 1, img: 1 },
            };

            const result = await servicesCollection.findOne(query, options)
            res.send(result)
        })
        // ! POST ordered services data 
        const orderedServicesCollection = database.collection('orderedServices')
        app.post('/ordered', async (req, res) => {
            const body = req.body;
            const doc = {
                name: body.name,
                email: body.email,
                phone: body.phone,
                message: body.message,
                date: body.date,
            }
            const result = await orderedServicesCollection.insertOne(doc)
            res.send(result)
            // console.log(search)

        })
        app.get('/ordered', (req, res) => {
            const search = req.query;
            const cursor = orderedServicesCollection.find()
            console.log(search)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING')
})
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT : ${port}`)
})
console.log(process.env.DB_USER)