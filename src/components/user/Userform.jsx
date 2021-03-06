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
                  placeholder="Digite o nome do usuário"
               />
            </div>
         </div>

         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>E-mail</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                  value={props.email}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite o e-mail do usuário"
               />
            </div>
         </div>

         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>Telefone</label>
               <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  className="form-control"
                  autoComplete="off"
                  value={props.telephone}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite o número de telefone"
               />
            </div>
         </div>

         <div className="col-12 col-md-6">
            <div className="form-group">
               <label>Senha</label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  autoComplete="off"
                  value={props.password}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite a senha"
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
               onClick={props.localStorage}
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
