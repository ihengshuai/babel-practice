module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV === "production");
  api.env("production");

  console.log(process.cwd())

  return {
    "babelrcRoots": [".", "./packages/**"]
  }
}