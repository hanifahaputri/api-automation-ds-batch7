// @ts-check
const { test, expect } = require('@playwright/test');
const { log } = require("console");
const { Ajv } = require("ajv");

const ajv = new Ajv

test.describe('QA Batch 7 Sesi 7', () => {
    // Test Case 1: GET Request
    test('TC-1 GET Single Object', async ({ request }) => {
        // API Call
        const response = await request.get('https://reqres.in/api/users/2'); 

        // Extract body in JSON format
        const responseJson = await response.json();
        // console.log(responseJson);

        // Assertions
        expect(responseJson.data.email).toBe('janet.weaver@reqres.in');
        const valid = ajv.validate(require('./jsonschema/get-object-schema.json'), responseJson)

        if (!valid) {
            console.error("AJV Validation Errors: ", ajv.errorsText());
        }

        expect(valid).toBe(true);
        
        // Check for response status and body
        expect(response.status()).toBe(200);
        
    });

    // Test Case 2: POST Request
    test('TC-2 POST Add Objects', async ({ request }) => {
        // Data object
        const body = {
            name: 'Hanifah AP',
            job: 'qabatch7sesi7'
        };
        const header = {
            Accept: 'application/json'
        };

        // API Call
        const response = await request.post('https://reqres.in/api/users', {
            headers: header,
            data: body,  // 'data' is the body of the POST request
        });

        const responseJson = await response.json();
        expect(responseJson.name).toBe('Hanifah AP');

        const valid = ajv.validate(require('./jsonschema/post-object-schema.json'), responseJson)

        if (!valid) {
            console.error("AJV Validation Errors: ", ajv.errorsText());
        }

        expect(valid).toBe(true);

        // Check for response status and body
        expect(response.status()).toBe(201);
        
    });

    test('TC-3 DELETE Object', async ({ request }) => {
        // API Call
        const response = await request.delete('https://reqres.in/api/users/2'); 
        
        // Check for response status and body
        expect(response.status()).toBe(204);
    });

    test('TC-4 PUT Object', async ({ request }) => {
        // Updated data object
        const updatedData = {
            name: 'Hanifah AP',
            job: 'qabatch7sesi7'
        };

        const header = {
            Accept: 'application/json'
        };

        // API Call
        const response = await request.put('https://reqres.in/api/users/2', {
            headers: header,
            data: updatedData,  // 'data' is the body of the POST request
        });

        const responseJson = await response.json();
        expect(responseJson.name).toBe('Hanifah AP');

        const valid = ajv.validate(require('./jsonschema/put-object-schema.json'), responseJson)

        if (!valid) {
            console.error("AJV Validation Errors: ", ajv.errorsText());
        }

        expect(valid).toBe(true);

        // Check for response status and body
        expect(response.status()).toBe(200);
        
    });
});


