import React from "react";
import Main from "../template/Main";
import ProdForm from "./ProdForm";
import ProdTable from "./ProdTable";
import axios from "axios";

import {
   NotificationContainer,
   NotificationManager,
} from "react-notifications";

const headerProps = {
   icon: "shopping-cart",
   title: "Produtos",
   subtitle: "Cadastro de Produtos",
};

const baseUrl = "http://localhost:3001/products";

const initialState = {
   prod: {
      name: "",
      category: "",
      description: "",
      quantity: "",
   },
   list: [],
};

export default class ProdCrud extends React.Component {
   constructor() {
      super();

      this.state = { ...initialState };

      this.clear = this.clear.bind(this);
      this.save = this.save.bind(this);
      this.getUpdatedList = this.getUpdatedList.bind(this);
      this.updateField = this.updateField.bind(this);
      this.load = this.load.bind(this);
      this.remove = this.remove.bind(this);
      this.handleEnterPress = this.handleEnterPress.bind(this);
      this.localStorage = this.localStorage.bind(this);
   }

   componentWillMount() {
      axios.get(baseUrl).then((response) => {
         this.setState({ list: response.data });
      });
   }

   handleEnterPress(event) {
      if (event.key === "Enter") {
         this.save();
      }
   }

   clear() {
      this.setState({ prod: initialState.prod });
   }

   save() {
      const prod = this.state.prod;
      const method = prod.id ? "put" : "post";
      const url = prod.id ? `${baseUrl}/${prod.id}` : baseUrl;

      if (
         prod.name === "" ||
         prod.description === "" ||
         prod.quantity === "" ||
         prod.category === ""
      ) {
         NotificationManager.warning(
            "Campos obrigatórios",
            "Preencha todos os campos"
         );
      } else {
         axios[method](url, prod).then((response) => {
            const list = this.getUpdatedList(response.data);
            this.setState({ prod: initialState.prod, list });
            if (method === "post")
               NotificationManager.success(
                  "Produto criado com sucesso",
                  "Criar Produto"
               );
            else
               NotificationManager.success(
                  "Produto alterado com sucesso",
                  "Editar Produto"
               );
         });
      }
   }

   getUpdatedList(prod, add = true) {
      const list = this.state.list.filter((u) => u.id !== prod.id);
      if (add) list.unshift(prod);
      return list;
   }

   updateField(event) {
      const prod = { ...this.state.prod };
      prod[event.target.name] = event.target.value;
      this.setState({ prod });
   }

   load(prod) {
      this.setState({ prod });
   }

   remove(prod) {
      axios.delete(`${baseUrl}/${prod.id}`).then((response) => {
         const list = this.getUpdatedList(prod, false);
         this.setState({ list });
         NotificationManager.success(
            "Produto excluído com sucesso",
            "Excluir produto"
         );
      });
   }

   render() {
      return (
         <Main {...headerProps}>
            <ProdForm
               name={this.state.prod.name}
               description={this.state.prod.description}
               category={this.state.prod.category}
               quantity={this.state.prod.quantity}
               clear={this.clear}
               save={this.save}
               updateField={this.updateField}
               handleEnterPress={this.handleEnterPress}
            />
            <ProdTable
               list={this.state.list}
               load={this.load}
               remove={this.remove}
            />
         </Main>
      );
   }

   localStorage() {
      let name = this.state.prod.name;
      let category = this.state.prod.category;
      let description = this.state.prod.description;
      let quantity = this.state.prod.quantity;

      let data = {
         name,
         category,
         description,
         quantity,
      };

      let convertData = JSON.stringify(data);

      localStorage.setItem("product", convertData);
   }
}
