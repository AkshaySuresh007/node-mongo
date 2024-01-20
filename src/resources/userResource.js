const { Resource } = require("../../utils")

const filterData = [
    "_id",
    "username",
    "email",
]

const userResource = (data) => {
    return Resource(data, filterData);
}

module.exports = userResource;