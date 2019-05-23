const  context=require.context('./',false,/\.js$/);

export default context.keys().filter(itme=>itme!=="./index.js").map(value=>context(value));
