import Hashids from 'hashids';

class HashIds {
    evaluate() {
        const hasher = new Hashids(this.salt, this.padding);
        return hasher.encode(this.id);
    }
}

HashIds.identifier = 'nl.cloudstek.Hashids';
HashIds.title = 'Hash IDs';
HashIds.inputs = [
    InputField('id', 'ID', 'Number'),
    InputField('padding', 'Padding', 'Number', {
        persisted: true,
        defaultValue: 10,
    }),
    InputField('salt', 'Salt', 'String', {
        defaultValue: 'salty'
    }),
];

registerDynamicValueClass(HashIds);
