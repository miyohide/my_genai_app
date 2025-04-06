#!/usr/bin/env node
import { BedrockChat } from '@langchain/community/chat_models/bedrock';

export const main = async (): Promise<void> => {
    const model = new BedrockChat({
        region: 'ap-northeast-1',
        model: 'amazon.nova-lite-v1:0',
    });

    const res = await model.invoke([
        ['human', 'LangChainとはなんですか']
    ]);
    console.log(JSON.stringify(res, null, 2));
};

main();
