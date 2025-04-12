#!/usr/bin/env node
import { BedrockChat } from '@langchain/community/chat_models/bedrock';

export const main = async (): Promise<void> => {
    const model = new BedrockChat({
        region: 'ap-northeast-1',
        // クロスリージョンでは別のIDをつける
        // 2025年4月にて、langchianjsにて未対応のように見える
        model: 'apac.amazon.nova-lite-v1:0',
    });

    const res = await model.invoke([
        ['human', 'LangChainとはなんですか']
    ]);
    console.log(JSON.stringify(res, null, 2));
};

main();
