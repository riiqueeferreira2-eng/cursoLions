import PromptSync from "prompt-sync";
 const prompt = PromptSync()

 let listaTarefas = []

 let tarefa1 = (prompt(`Tarefa 1: `));
 listaTarefas.push(tarefa1);
 let tarefa2 = (prompt(`Tarefa 2: `))
  listaTarefas.push(tarefa2);
 let tarefa3 = (prompt(`Tarefa 3: `))
 listaTarefas.push(tarefa3);
 

 console.table(listaTarefas);
 

 console.log(`Você tem ${listaTarefas.length} tarefas em sua lista!`);

 listaTarefas.pop();

 console.table(listaTarefas);

 console.log(`Agora você tem ${listaTarefas.length} tarefas em sua lista!`);
 