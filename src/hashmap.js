// application logic for potential application

export default class HashMap {

    static hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }
        return hashCode;
    }

    set(key, value) {

    }
}

/* TODO



*/