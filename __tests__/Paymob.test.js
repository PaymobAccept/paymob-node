import { assert } from "chai";
import { Paymob } from '../src/'

const secretKey = 'skl-***'
const options = {}

describe("It's PaymobFactory.", () => {
    it('should inilize paymob with secretKey and options', () => {
        const paymob = Paymob(secretKey, options);
        assert.equal(secretKey, paymob.secretKey)
        assert.equal(options, paymob.options)
    });

});
