// await Deno.writeTextFile("./hello.txt", "Hello, World!");
await Deno.writeTextFile("./hello.txt", "appended Hello, World!", {
    append: true,
});

console.log("File written to , ./hello.txt");

function writeJson(path: string, data: object): string {
    try {
        Deno.writeTextFileSync(path, JSON.stringify(data));
        
        return "Writen to " + path;
    } catch (e) {
        return e.message;
    }
}

console.log(writeJson("./data.json", { hello: "World"}));
