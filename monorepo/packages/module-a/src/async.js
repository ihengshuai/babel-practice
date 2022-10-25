export async function loadFunc() {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  })
  return 2;
}