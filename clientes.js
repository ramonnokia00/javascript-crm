let clientes = [
{
    nome: "conrado",
    email: "conrado@gmail.com",
    telefone: "85982007334",
    data: "05/05/2026",
},
{
    nome: "emanuel",
    email: "emanuel@gmail.com",
    telefone: "85954627232",
    data: "05/05/2027",
},
{
    nome: "Ana",
    email: "Ana@gmail.com",
    telefone: "85928281342",
    data: "05/05/2023",
},
]
function carregarClientes(listaDeClientes) {
    let tbodyElement = document.querySelector("#tabela");
    listaDeClientes.map((cliente)=> {
        tbodyElement.innerHTML += `
        <tr class="*:leading-[40px] border-2">
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.telefone}</td>
                        <td class="w-[100px]">${cliente.data}</td>
                        <td class="w-[100px] flex justify-center gap-4 pt-1 pl-5">
                            <box-icon type='solid' name='pencil'></box-icon>
                            <box-icon type='solid' name='trash'></box-icon>
                        </td>
                    </tr>`
    })
}
carregarClientes(clientes)