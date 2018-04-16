const express = require('express')
const cors = require('cors')
const data = require('./data/cohorts')
const app = express()
const port = process.env.PORT || 3060

app.use(cors())

function findById (data, id) {
    for (i = 0; i < data.length; i++) {
        if (data[i].ID == id) {
            return data[i]
        }
    } 
}

app.listen(port)

app.get('/', (req, res, next) => {
    res.json({data})
    next()
})

app.get('/:id', (req, res, next) => {
    let cohortInfo = findById (data, req.params.id)
    if (cohortInfo == null) {
        res.status(404).json({
            error: {
                message: 'Not found'
            }
        })
    }
    else {
        res.json({data: cohortInfo})
    }
})