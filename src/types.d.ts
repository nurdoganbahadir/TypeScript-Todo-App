interface todosList {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string; //*bu veri olabilirde olmayabilirde
}

type AddFn = (task: string) => Promise<void>;
type UpdateFn = (todo: todosList) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;
