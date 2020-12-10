'use strict';

class Place {

    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (id) {
            return this.db.find(record => record.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        let record = {
            id: ++this.id,
        //is this was this.id++ then the index and id would match up
            record: obj
        }
        this.db.push(record)
        return record;
    }
//this is where the request hits first, grabbing stuff and then need to call method of update to pass what it requires, then return updated record back
    update(id, obj) {
        console.log(id);
        if (id) {
            // const i = this.db.findIndex(obj => obj.id === id);
            // this.db[i] = obj.name;
            let updateRecord = { place: id };
            console.log(this.db);
            //[id-1] means that the id from my object is always 1 above the index of my array so we need to make them match up because having an id of 1 is more human readable. 
            this.db[id-1].record.name = obj.name;
            console.log(this.db);
            return this.db[i];
        }
    }
    delete(id) {
        if(!id) {return null}
        return null;
    }
}

module.exports = Place;