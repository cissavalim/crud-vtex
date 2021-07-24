import React from "react";

export default (props) => {
   const lista = props.list;

   return (
      <table className="table mt-4">
         <thead>
            <tr>
               <th>#</th>
               <th>Nome</th>
               <th>Descrição</th>
               <th>Categoria</th>
               <th>Quantidade</th>
               <th>Ações</th>
            </tr>
         </thead>
         <tbody>
            {lista.map((prod) => {
               return (
                  <tr key={prod.id}>
                     <td>{prod.id}</td>
                     <td>{prod.name}</td>
                     <td>{prod.description}</td>
                     <td>{prod.category}</td>
                     <td>{prod.quantity}</td>
                     <td>
                        <button
                           className="btn outlined"
                           title="Editar"
                           onClick={() => props.load(prod)}
                        >
                           <i className="fa fa-pencil"></i>
                        </button>
                        <button
                           className="btn filled ml-2"
                           id="btn-excluir"
                           title="Excluir"
                           onClick={() => props.remove(prod)}
                        >
                           <i className="fa fa-trash"></i>
                        </button>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};
