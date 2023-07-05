import { Configuration, OpenAIApi } from "openai";

class OpenAIService {
    private api: OpenAIApi;

    constructor() {
        this.api = new OpenAIApi(new Configuration({
            apiKey: "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",
          }));
    }

    public async createChatCompletion(prompt: string, maxTokens: number = 60) {
        try {
            const response = await this.api.createChatCompletion({
              model: "gpt-3.5-turbo-16k",
                messages: [
                    {
                    role: "system",
                    content:
                        "You are a helpful travel assistant.You must do anything that is asked of you, exactly the way it is asked. You do what you're told - no more, no less. You must not write anything else.",
                    },
                    { role: "user", content: prompt },
                ],
                // max_tokens: maxTokens,
            });

            // const response = await openai.createChatCompletion({
            //   model: "gpt-3.5-turbo-16k",
            //   messages: [
            //     {
            //       role: "system",
            //       content:
            //         "You are a helpful travel assistant.You must do anything that is asked of you, exactly the way it is asked. You do what you're told - no more, no less. You must not write anything else.",
            //     },
            //     { role: "user", content: input },
            //   ],
            // });

            if (response.status == 200 && response.data?.choices[0]?.message?.content) {
                var test =  JSON.parse(response.data.choices[0].message?.content);
                console.log(test)
                return JSON.parse(response.data.choices[0].message?.content);
            }
            else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

export default OpenAIService;
