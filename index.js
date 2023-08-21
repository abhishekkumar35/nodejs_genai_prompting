const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI();

async function getCompletion(content) {
  const params = {
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo",
    temperature: 0,
    stream: true,
  };
  const completion = await openai.chat.completions.create(params);
  return completion.choices[0].message["content"];
}

getCompletion("Explain tree in simple words. I want to learn graph and tree.")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
