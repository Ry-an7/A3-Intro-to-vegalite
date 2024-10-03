// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
async function renderBar() {
  // load data
  const data = await d3.csv("./dataset/videogames_long.csv");

  // create a bar chart
const vlSpec = vl
  .markBar()
  .data(data)
  .encode(
  vl.x().fieldN("platform")
    .title("Platform"),
  vl.y().fieldQ("global_sales").aggregate("sum")
    .title("Global Sales"),
  vl.color().fieldN("genre")
    .title("Genre")
    .scale({scheme : "category20"}) 
  )

  .width("container")
  .height(400)
  .toSpec();

  vegaEmbed("#view", vlSpec).then((result) => {
    const view = result.view;
    view.run();
  });
}

async function renderLine() {
  // load data
  const data = await d3.csv("./dataset/videogames_long.csv");

  // create a bar chart
const vlSpec = vl
.markLine()
.data(data)
.encode(
  vl.x().fieldN("year"),
  vl.y().fieldQ("global_sales").aggregate("sum"),
  vl.color().fieldN("genre")
)

  .width("container")
  .height(400)
  .toSpec();

  vegaEmbed("#views", vlSpec).then((result) => {
    const view = result.view;
    view.run();
  });
}

renderBar();
renderLine();
