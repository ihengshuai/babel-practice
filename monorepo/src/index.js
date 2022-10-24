async function load() {
    await new Promise(rs => setTimeout(rs, 1000));
    console.log("async load console....")
    return 'load async';
}

load();