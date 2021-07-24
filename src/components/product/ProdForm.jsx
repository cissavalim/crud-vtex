import React from "react";

export default (props) => (
   <div className="form">
      <div className="row">
         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>Nome</label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  autoComplete="off"
                  value={props.name}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite o nome do produto"
               />
            </div>
         </div>

         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>Descrição</label>
               <input
                  type="type"
                  name="description"
                  id="description"
                  className="form-control"
                  autoComplete="off"
                  value={props.description}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite a descrição"
               />
            </div>
         </div>

         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>Categoria</label>
               <input
                  type="text"
                  name="category"
                  id="category"
                  className="form-control"
                  autoComplete="off"
                  value={props.category}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite a categoria"
               />
            </div>
         </div>

         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>Quatidade</label>
               <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="form-control"
                  autoComplete="off"
                  value={props.quantity}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite a quantidade"
               />
            </div>
         </div>
      </div>

      <hr />

      <div className="row">
         <div className="col-12 d-flex justify-content-end">
            <button
               id="save"
               className="btn outlined"
               onCLick={props.localStorage}
               onClick={props.save}
            >
               <i className="fa fa-save mr-1"></i> Salvar
            </button>
            <button className="btn filled ml-2" onClick={props.clear}>
               <i className="fa fa-remove mr-1"></i> Cancelar
            </button>
         </div>
      </div>
   </div>
);
