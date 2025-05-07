

let clientes = sessionStorage.getItem("clientes") ? JSON.parse(sessionStorage.getItem("clientes")) :[];

function buscarClientes() {
    fetch("http://localhost:3000/clientes")
    .then((response) => response.json())
    .then((lista) => {
        clientes = lista;
        carregarClientes(clientes);
        
    })
}
buscarClientes();

function carregarClientes(listaDeClientes) {
    let tbodyElement = document.querySelector("#tabela");
    tbodyElement.innerHTML = '';
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
carregarClientes(clientes);

function cadastrarCliente(form) {
    event.preventDefault();
    let formData = new FormData(form);
    let cliente = Object.fromEntries(formData.entries());

    clientes.push(cliente);
    sessionStorage.setItem("clientes",JSON.stringify(clientes));
    mostrarOverlay();
    carregarClientes(clientes)
}
