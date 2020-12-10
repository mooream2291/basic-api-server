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
            record: obj
        }
        this.db.push(record)
        return record;
    }

    update(id, obj) {
        if (id) {
            return null;
        }
    }
    delete(id) {
        if(!id) {return null}
        return null;
    }
}

module.exports = Place;