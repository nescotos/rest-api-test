## Documentation

###Instructions:

1.  npm install
2.  node

URL: /  
VERB: GET  
DESCRIPTION: Welcome Message  
PARAMETERS: NONE  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}

URL: /dog  
VERB: GET  
DESCRIPTION: Get all the dogs  
PARAMETERS: NONE  
RESPONSE FORMAT: [{name: string, breed: string, id: integer}]  
RESPONSE EXAMPLE: [{name: 'Dog1', breed: 'Breed1', id: 1}, {name: 'Dog2', breed: 'Breed2', id: 2} ...]  

VERB: POST  
DESCRIPTION: Insert dog  
PARAMETERS: {name: string, breed: string}  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}

URL: /dog/id(integer)  
VERB: GET  
DESCRIPTION: Get the with the id received  
PARAMETERS: NONE  
RESPONSE FORMAT: {name: string, breed: string, id: integer}  
RESPONSE EXAMPLE: {name: 'Dog1', breed: 'Breed1', id: 1}  

VERB: PUT  
DESCRIPTION: Update dog with the id received  
PARAMETERS: {name(optional): string, breed(optional): string}  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}  

VERB: DELETE  
DESCRIPTION: Delete dog with the id received  
PARAMETERS: NONE  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}

URL: /api  
VERB: GET  
DESCRIPTION: This does nothing xD, only to test middleware and token implementation  
PARAMETERS: {token: string} or ['X-ACCESS-HEADER'] = string or ?token=string  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}  

VERB: POST  
DESCRIPTION: This does nothing xD, only to test middleware and token implementation  
PARAMETERS: {token: string} or ['X-ACCESS-HEADER'] = string or ?token=string  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}

URL: /api/id(integer)  
VERB: GET  
DESCRIPTION: This does nothing xD, only to test middleware and token implementation  
PARAMETERS: {token: string} or ['X-ACCESS-HEADER'] = string or ?token=string  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}  

VERB: UPDATE  
DESCRIPTION: This does nothing xD, only to test middleware and token implementation  
PARAMETERS: {token: string} or ['X-ACCESS-HEADER'] = string or ?token=string  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}  

VERB: DELETE  
DESCRIPTION: This does nothing xD, only to test middleware and token implementation  
PARAMETERS: {token: string} or ['X-ACCESS-HEADER'] = string or ?token=string  
RESPONSE FORMAT: {message: string, success: boolean}  
RESPONSE EXAMPLE: {message: 'Hello World', sucess: true}
