const Resource = (data, filterData) => {
    let result = [];
    if (data.length > 0) {
        data.map(d => {
            let values = {};
            filterData.map((item) => {
                values = {
                    ...values,
                    [item]: d[item]
                }
            })
            result.push(values);
        })

        return result;
    }
    else {
        let values = {};
        filterData.map((item) => {
            values = {
                ...values,
                [item]: data[item]
            }
        })
        return values;
    }
}

module.exports = Resource;