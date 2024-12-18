// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('QA Batch 7 Sesi 6', () => {
    // Test Case 1: GET Request
    test('TC-1 GET Single Object', async ({ request }) => {
        // API Call
        const response = await request.get('https://api.restful-api.dev/objects/7'); 

        // Extract body in JSON format
        const responseJson = await response.json();
        // console.log(responseJson);

        // Assertions
        expect(responseJson.name).toEqual('Apple MacBook Pro 16');
    });

    // Test Case 2: POST Request
    test('TC-2 POST Add Objects', async ({ request }) => {
        // Data object
        const body = {
            email: 'hanifahaputri@gmail.com',
            password: 'qabatch7sesi6'
        };

        const header = {
            Accept: 'application/json'
        };

        // API Call
        const response = await request.post('https://api.restful-api.dev/objects/', {
            headers: header,
            data: body,  // 'data' is the body of the POST request
        });

        // Check for response status and body
        expect(response.status()).toBe(200);
        // console.log(response);
    });

    test('TC-3 DELETE Object', async ({ request }) => {
        // API Call
        const response = await request.delete('https://api.restful-api.dev/objects/6'); 
    });

    test('TC-4 PUT Object', async ({ request }) => {
        // Updated data object
        const updatedData = {
            email: 'hanifahaputri@gmail.com',
            password: 'qabatch7sesi6'
        };

        const header = {
            Accept: 'application/json'
        };

        // API Call
        const response = await request.put('https://api.restful-api.dev/objects/7', {
            headers: header,
            data: updatedData,  // 'data' is the body of the POST request
        });
    });
});


