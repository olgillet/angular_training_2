export class Supplier {
    private $id: number;
    private $companyname: string;
    private $bankaccountnumber: string;

    constructor(id: number, companyname: string, bankaccountnumber: string) {
        this.$id = id;
        this.$companyname = companyname;
        this.$bankaccountnumber = bankaccountnumber;
    }


    get id(): number {
        return this.$id;
    }

    set id(value: number) {
        this.$id = value;
    }

    get companyname(): string {
        return this.$companyname;
    }

    set companyname(value: string) {
        this.$companyname = value;
    }

    get bankaccountnumber(): string {
        return this.$bankaccountnumber;
    }

    set bankaccountnumber(value: string) {
        this.$bankaccountnumber = value;
    }
}