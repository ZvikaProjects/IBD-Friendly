
const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const MODEL_NAME = "models/chat-bison-001";
const API_KEY = 'AIzaSyDLSma36W2BZIvqCeDJxBjKyete9CGkFFw';
const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


const createRecipe = async (body) => {
  const result = await client.generateMessage({
    model: MODEL_NAME, // Required. The model to use to generate the result.
    temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result.
    candidateCount: 1, // Optional. The number of candidate results to generate.
    prompt: {
      // optional, preamble context to prime responses
      context: "Respond to all questions with only one result.",
      // Required. Alternating prompt/response messages.
      messages: [{ content: body.text }],// body
    },
  });
  return result[0].candidates[0].content
}

exports.createRecipe=  createRecipe;