export class Contact {
    id: number|null;
    name = '';
    email = '';

    constructor(id: number|null = null) {
        this.id = id;
    }
}
