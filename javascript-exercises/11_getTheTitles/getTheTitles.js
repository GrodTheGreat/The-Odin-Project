const getTheTitles = function(list) {
    return list.reduce((titles, item) => {
        titles.push(item.title);
        return titles;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
