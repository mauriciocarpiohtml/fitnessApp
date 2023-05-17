const express = require('express')
const cors = require('cors')
const {Configuration, OpenAIApi} = require('openai')


const app = express()
app.use(cors())

app.use(express.json())

const configuration = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(configuration)

app.post('/', async(req, res) => {
    try {
        const prompt = req.body.prompt
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 2000,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        })
        res.status(200).send({
            bot:response.data.choices[0].text
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
})


app.listen(5006, () => console.log('Server is running in the port http://localhost:5006'))