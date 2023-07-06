import ItemControl from "./control/itemControl";
import WorkerControl from "./control/workerControl";
import Chef from "./class/chef";
import Server from "./class/server";
import Menu from "./class/menu";

const orderControl = new ItemControl("#orders");
const cookingControl = new ItemControl("#cookings");
const servingControl = new ItemControl("#servings");
const chefControl = new WorkerControl<Chef>([new Chef(), new Chef()]);
const serverControl = new WorkerControl<Server>([new Server(1000), new Server(3000)]);

const sundeaElem = document.querySelector("#sundea") as HTMLButtonElement;
sundeaElem.onclick = () => run(new Menu("순댓국", 5000));

const heajangElem = document.querySelector("#heajang") as HTMLButtonElement;
heajangElem.onclick = () => run(new Menu("해장국", 3000));

async function run(menu: Menu): Promise<void> {
  orderControl.add(menu);

  const chef = await chefControl.findWorkerAsync();

  orderControl.remove(menu);
  cookingControl.add(menu);
  await chef.workAsync(menu.getTime());

  const server = await serverControl.findWorkerAsync();

  cookingControl.remove(menu);
  servingControl.add(menu);
  await server.workAsync(server.getTime());

  servingControl.remove(menu);
}
