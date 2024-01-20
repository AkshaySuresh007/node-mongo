const { Resource } = require('../../utils');

const filterData = [
    "_id",
    "title", 
    "snippet", 
    "body",
]

const blogResource = (data) => {
    return Resource(data, filterData);
}

module.exports = blogResource;